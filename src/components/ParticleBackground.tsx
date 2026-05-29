import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseActive = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseActive.current = true;
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseLeave = () => {
      mouseActive.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const initParticles = (width: number, height: number) => {
      // Density-based particle count
      const density = Math.floor((width * height) / 25000);
      const count = Math.min(Math.max(density, 40), 120);
      particles = [];

      const colors = [
        'rgba(124, 58, 237, ', // violet
        'rgba(6, 182, 212, ',  // cyan
        'rgba(161, 161, 170, ', // zinc
      ];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        // set canvas buffer dimensions to match logical layout dimensions
        canvas.width = width;
        canvas.height = height;
        initParticles(width, height);
      }
    });

    resizeObserver.observe(container);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse interaction: draw subtle connections or apply vector attraction
        if (mouseActive.current) {
          const dx = mousePos.x - p.x;
          const dy = mousePos.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            // Apply a very gentle pull towards mouse
            p.x += (dx / dist) * 0.15;
            p.y += (dy / dist) * 0.15;

            // Draw link
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 58, 237, ${(1 - dist / 120) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div
      ref={containerRef}
      id="particles-container"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Background Dark Canvas */}
      <canvas
        ref={canvasRef}
        id="bg-canvas-particles"
        className="block w-full h-full opacity-60"
      />

      {/* Luxury Gradient Glow Nodes */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-violet/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 translate-y-1/2 translate-x-1/2 w-[450px] h-[450px] bg-brand-cyan/8 rounded-full blur-[140px]" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-violet/8 rounded-full blur-[110px]" />
    </div>
  );
}
