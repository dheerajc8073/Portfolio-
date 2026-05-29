import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ArrowRight, BrainCircuit, Terminal, Code2 } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';
import Student3DAvatar from './Student3DAvatar';

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % PORTFOLIO_OWNER.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResume = () => {
    alert("Resume download triggered (Sample Resume of Dheeraj C, Bachelor of Technology in Computer Science).");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-dark-bg"
    >
      {/* Absolute Decorative Tech Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full border border-white/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full border border-white/5 pointer-events-none border-dashed" />

      {/* Hero Core Content: 2-Column Responsive Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Information, Name, Narrative & Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Top Tagline Badges */}
          <motion.div
            id="hero-intro-badge"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-violet/30 bg-brand-violet/5 text-[#a78bfa] text-xs font-mono mb-6 select-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
            AVAILABLE FOR NEW PROJECTS
          </motion.div>

          {/* Big Large Name */}
          <motion.h1
            id="hero-name-heading"
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            <span className="block text-zinc-400 font-extralight text-xl sm:text-2xl lg:text-3xl tracking-widest uppercase mb-2">
              {PORTFOLIO_OWNER.name}
            </span>
            Crafting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan animate-pulse">
              Intelligent
            </span>{' '}
            Digital Experiences.
          </motion.h1>

          {/* Dynamic Title Slide Cycler */}
          <div id="hero-rotating-titles" className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6 relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIdx}
                className="font-display font-medium text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan uppercase tracking-widest text-center lg:text-left w-full"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {PORTFOLIO_OWNER.titles[titleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Narrative bio teaser */}
          <motion.p
            id="hero-bio-narrative"
            className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl lg:max-w-none leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.8 }}
          >
            Senior-level Computer Science student specializing in the convergence of{' '}
            <strong className="text-white">Computer Vision (YOLOv8)</strong> and{' '}
            <strong className="text-white">Full Stack Engineering (React/FastAPI)</strong>. Building fast and highly interactive web platforms powered by core data intelligence.
          </motion.p>

          {/* CTA Interlocks */}
          <motion.div
            id="hero-cta-group"
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* Main CTA */}
            <button
              onClick={handleScrollToContact}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-violet to-[#6d28d9] text-white rounded-xl font-bold shadow-lg shadow-brand-violet/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-sm"
            >
              Initiate Contact
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CV Download */}
            <button
              onClick={handleOpenResume}
              className="w-full sm:w-auto px-8 py-4 border border-white/10 rounded-xl font-bold backdrop-blur-sm bg-white/5 text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-sm"
            >
              <FileText size={14} className="text-brand-cyan" />
              Download Resume
            </button>
          </motion.div>

          {/* Inline Stats Display Bar */}
          <motion.div 
            className="pt-12 mt-4 flex gap-8 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">Projects Done</div>
            </div>
            <div className="border-r border-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">AI / ML</div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">Specialization</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Parallax Avatar */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          {/* Subtle surrounding decorative vector grid lines */}
          <div className="absolute w-[440px] h-[440px] border border-brand-violet/10 rounded-full flex items-center justify-center pointer-events-none animate-[ping_8s_linear_infinite] opacity-35" />
          <div className="absolute w-[360px] h-[360px] border border-brand-cyan/15 rounded-full flex items-center justify-center pointer-events-none opacity-50" />
          
          <Student3DAvatar />
        </motion.div>

      </div>

      {/* Orbit Floating interactive decorative Tech Icons */}
      <div id="hero-floating-elements" className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Node 1: AI (BrainCircuit) */}
        <motion.div
          className="absolute top-1/4 left-1/6 p-3 bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="p-1 px-1.5 rounded-lg bg-brand-violet/20 text-brand-violet">
            <BrainCircuit size={16} />
          </div>
          <span className="font-mono text-[9px] text-zinc-300 tracking-wider">YOLOv8 CV</span>
        </motion.div>

        {/* Node 2: Web / Python (Terminal) */}
        <motion.div
          className="absolute bottom-1/3 left-1/5 p-3 bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <div className="p-1 px-1.5 rounded-lg bg-brand-cyan/20 text-brand-cyan">
            <Terminal size={16} />
          </div>
          <span className="font-mono text-[9px] text-zinc-300 tracking-wider">FASTAPI</span>
        </motion.div>

        {/* Node 3: React Integration */}
        <motion.div
          className="absolute top-1/3 right-1/6 p-3 bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-2"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
        >
          <div className="p-1 px-1.5 rounded-lg bg-purple-500/20 text-purple-400">
            <Code2 size={16} />
          </div>
          <span className="font-mono text-[9px] text-zinc-300 tracking-wider">REACT SPA</span>
        </motion.div>
      </div>
    </section>
  );
}
