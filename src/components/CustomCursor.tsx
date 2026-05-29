import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Use motion values for ultra-performant cursor rendering
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply smooth physics
  const springConfig = { damping: 40, stiffness: 450, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor if it is not a touch-enabled device and screen is desktop-size
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Identify interactive elements and apply active scale-up on cursors
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .interactive-card'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Periodically update interactions to support dynamic DOM changes
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 1500);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer interactive tracking ring */}
      <motion.div
        id="custom-cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-violet/60 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? (isClicking ? 1.6 : 2.0) : (isClicking ? 0.8 : 1.0),
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.15)' : 'rgba(0,0,0,0)',
          borderColor: isHovered ? 'rgba(6, 182, 212, 0.8)' : 'rgba(124, 58, 237, 0.6)',
        }}
      />
      {/* Central focus dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-cyan pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isClicking ? 0.5 : 1.0,
        }}
      />
    </>
  );
}
