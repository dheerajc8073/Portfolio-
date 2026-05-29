import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code, Database, Sparkles, BrainCircuit, Activity, X, Layers, BookOpen, Info, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);
  // Renders a high-craft pure CSS illustration for projects
  const renderProjectMockup = (type: Project['imageFallbackType']) => {
    switch (type) {
      case 'snake-detection':
        return (
          <div className="relative w-full h-full bg-slate-950 font-mono text-[9px] text-zinc-400 p-4 border border-zinc-900 rounded-2xl flex flex-col justify-between overflow-hidden group">
            {/* Top Bar simulating camera layout */}
            <div className="flex justify-between items-center text-zinc-500 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-red-500">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                LIVE STREAM
              </span>
              <span>1080P // 30 FPS</span>
            </div>

            {/* Neural/CV Mock outline in the middle */}
            <div className="absolute inset-x-8 top-12 bottom-12 border border-brand-cyan/20 rounded-xl flex items-center justify-center">
              {/* Overlay detecting neon cyan bounding box with label */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-[45%] h-[40%] border-2 border-brand-cyan rounded-md"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="absolute top-0 left-0 -translate-y-full bg-brand-cyan text-black px-1.5 py-0.5 rounded-t text-[8px] font-bold">
                  YOLOv8: Venomous Cobra (94.2%)
                </div>
              </motion.div>

              {/* Vector representation of a serpentine line */}
              <svg className="w-2/3 h-2/3 text-brand-cyan/20" viewBox="0 0 100 100" fill="none">
                <path d="M10,80 Q25,20 50,50 T90,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* System logs at bottom of stream */}
            <div className="flex justify-between gap-2 text-[8px] text-zinc-500 mt-auto pt-2 border-t border-white/5 bg-slate-950/80 backdrop-blur z-10">
              <span>MODEL: YOLOv8S.PT</span>
              <span>LATENCY: 12MS</span>
            </div>
          </div>
        );

      case 'agro-connect':
        return (
          <div className="relative w-full h-full bg-slate-950 font-mono text-[9px] p-4 border border-zinc-900 rounded-2xl flex flex-col justify-between overflow-hidden">
            {/* Health Dashboard simulation */}
            <div className="flex justify-between items-center text-zinc-500 mb-2">
              <span className="font-bold flex items-center gap-1 text-emerald-400">
                <Activity size={10} />
                AGRO STATUS: HEALTHY
              </span>
              <span>ZONE A</span>
            </div>

            {/* Crop analysis with dynamic chart elements */}
            <div className="my-auto grid grid-cols-2 gap-3 z-10 text-[8px] text-zinc-400">
              <div className="p-2.5 bg-white/3 border border-white/5 rounded-xl">
                <span className="text-zinc-500 block">SOIL MOISTURE</span>
                <span className="text-sm font-bold text-white">74.5%</span>
                <div className="w-full h-1 bg-zinc-900 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-3/4 h-full bg-emerald-400" />
                </div>
              </div>
              <div className="p-2.5 bg-white/3 border border-white/5 rounded-xl">
                <span className="text-zinc-500 block">NPK ANALYSIS</span>
                <span className="text-sm font-bold text-white">OPTIMAL</span>
                <div className="w-full h-1 bg-zinc-900 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-11/12 h-full bg-brand-violet" />
                </div>
              </div>
            </div>

            {/* Bottom logs simulating connected state */}
            <div className="flex justify-between items-center text-[8px] text-zinc-500 pt-2 border-t border-white/5">
              <span>DB SYNC: OK</span>
              <span className="text-brand-cyan font-bold">SECURE PIPELINE</span>
            </div>
          </div>
        );

      case 'ai-assistant':
        return (
          <div className="relative w-full h-full bg-slate-950 font-mono text-[9px] p-4 border border-zinc-900 rounded-2xl flex flex-col overflow-hidden">
            {/* Conversational Terminal mock window */}
            <div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-2 text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              <span className="text-[8px] ml-1">AI-ORCHESTRATOR.SH</span>
            </div>

            <div className="space-y-3 flex-1 flex flex-col justify-end">
              {/* User Prompt */}
              <div className="text-right">
                <div className="inline-block bg-white/5 border border-white/5 text-[8px] text-zinc-300 px-2 py-1.5 rounded-xl rounded-tr-none">
                  Query: Optimize CV parameters.
                </div>
              </div>
              
              {/* AI Streaming Response */}
              <div className="text-left w-11/12">
                <div className="bg-brand-violet/10 border border-brand-violet/10 text-[8px] text-zinc-100 p-2 rounded-xl rounded-tl-none leading-relaxed">
                  <span className="text-brand-cyan">AI:</span> Compiling parameters... Adjust kernel sizing to (5,5) dynamically.
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative bg-dark-bg border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] bg-brand-cyan/2 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div id="projects-section-header" className="mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block mb-2">
            // INDEX 03
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-white tracking-tight">
            Featured Intelligent Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full mt-4" />
        </div>

        {/* Project Layout List */}
        <div id="projects-feed" className="flex flex-col gap-12 sm:gap-16">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8 }}
              >
                
                {/* Left Visual Preview Wrapper (Span 6) - Clicking expands modal */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className={`lg:col-span-6 w-full h-64 sm:h-80 relative overflow-hidden flex items-center justify-center p-3 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-brand-cyan/40 transition-all cursor-pointer group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  title="Click to view full architecture & documentation"
                >
                  {/* Subtle glassmorphic hover overlay banner */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex justify-between items-center">
                    <span id={`overlay-cta-${project.id}`} className="text-[10px] font-mono font-bold tracking-wider text-brand-cyan uppercase flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full border border-brand-cyan/35 shadow-lg">
                      <Layers size={11} className="animate-pulse" /> EXPLORE SYSTEM ARCHITECTURE
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400">Click to expand</span>
                  </div>
                  {renderProjectMockup(project.imageFallbackType)}
                </div>

                {/* Right Text Description details (Span 6) */}
                <div className={`lg:col-span-6 flex flex-col gap-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Category info */}
                  <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase flex items-center gap-2">
                    <Sparkles size={11} /> {project.category}
                  </span>

                  {/* Title - clickable to open modal */}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight hover:text-brand-cyan cursor-pointer transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Long descriptive text */}
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Built with Stacks */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-zinc-900 border border-white/5 text-[10px] text-zinc-300 font-mono rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interaction Buttons: Explore Architecture + Direct Links */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-xs text-white bg-gradient-to-r from-brand-violet to-[#6d28d9] hover:opacity-95 px-5 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-brand-violet/20 cursor-pointer"
                    >
                      <Layers size={13} />
                      Explore System Details
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 px-3.5 py-2.5 rounded-full font-medium transition-all"
                        >
                          <Github size={13} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 px-3.5 py-2.5 rounded-full font-medium transition-all"
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* High-Fidelity Detail interactive Modal Portal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gradient-to-tr from-zinc-950/95 via-zinc-900/95 to-zinc-950/95 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-12 max-h-[92vh] md:max-h-[85vh] text-zinc-100"
            >
              {/* Floating Close Button for accessibility */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 text-zinc-400 hover:text-white bg-black/40 border border-white/5 rounded-full cursor-pointer transition-colors focus:outline-none"
                aria-label="Close details modal"
              >
                <X size={16} />
              </button>

              {/* Panel 1: Mockup Visualizer & Architecture Flow (Col Span 5 on MD+) */}
              <div className="md:col-span-5 bg-black/40 border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-full">
                
                {/* Visual rendering showcase */}
                <div className="w-full h-44 sm:h-52 bg-white/3 border border-white/5 p-2 rounded-2xl flex items-center justify-center mb-6">
                  {renderProjectMockup(selectedProject.imageFallbackType)}
                </div>

                {/* System Architecture Section */}
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-cyan uppercase tracking-widest font-bold">
                    <Layers size={12} /> SYSTEM FLOW ARCHITECTURE
                  </div>
                  
                  {/* Beautiful Flow Blueprint Diagram placeholder box */}
                  <div className="bg-zinc-950 border border-white/5 rounded-2xl p-4 font-mono text-[9px] text-zinc-400 leading-normal bg-opacity-80">
                    <div className="flex items-center gap-1 text-zinc-500 mb-2.5 pb-2 border-b border-white/5">
                      <Code size={11} className="text-brand-violet" />
                      <span>DATAFLOW DIAGRAM // ACTIVE</span>
                    </div>
                    {/* Multi step flow parsed visually */}
                    <div className="flex flex-col gap-2">
                      {selectedProject.architectureSummary?.split(' ──► ').map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan flex items-center justify-center font-bold text-[8px] shrink-0 font-sans">
                            {idx + 1}
                          </span>
                          <span className="text-zinc-300 font-semibold">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-sans leading-normal">
                    * The above flow represents the core microservice architecture routing and component lifecycle.
                  </p>
                </div>
              </div>

              {/* Panel 2: Contributions, Description, Technologies and Documentation (Col Span 7 on MD+) */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[52vh] md:max-h-full">
                <div>
                  {/* Category string label */}
                  <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase flex items-center gap-1.5 mb-1.5 font-bold">
                    <Sparkles size={11} /> {selectedProject.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-3">
                    {selectedProject.title}
                  </h3>

                  {/* Summary brief */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Technical stacks list badges */}
                  <div className="mb-6">
                    <div className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase mb-2">
                      TECHNOLOGY SHIELDS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-zinc-900 border border-white/5 text-[9px] text-zinc-300 font-mono rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CORE CONTRIBUTIONS (Specific detailed milestones requested by user) */}
                  <div className="space-y-3 mb-6">
                    <div className="font-mono text-[10px] text-brand-violet tracking-wider uppercase flex items-center gap-1.5 font-bold">
                      <BrainCircuit size={12} /> CORE CONTRIBUTIONS & PERFORMANCE METRICS
                    </div>
                    
                    <ul className="flex flex-col gap-2">
                      {selectedProject.contributionNotes?.map((note, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                          <span className="text-brand-cyan font-bold select-none shrink-0 mt-0.5">▪</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action items with view documentation direct link */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-white/5 mt-4">
                  {/* Documentation Direct Link */}
                  {selectedProject.documentationUrl && (
                    <a
                      href={selectedProject.documentationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-xs text-black bg-brand-cyan hover:opacity-90 px-6 py-3 rounded-xl font-bold transition-all shadow-md shadow-brand-cyan/10"
                    >
                      <BookOpen size={13} />
                      View Documentation
                    </a>
                  )}

                  {/* Github wrapper link */}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-xs text-zinc-300 hover:text-white bg-zinc-900/50 border border-white/10 hover:border-white/20 px-5 py-3 rounded-xl font-medium transition-all"
                    >
                      <Github size={13} />
                      Source Repository
                    </a>
                  )}

                  {/* Live demo external link */}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-xs text-zinc-300 hover:text-white bg-zinc-900/50 border border-white/10 hover:border-white/20 px-5 py-3 rounded-xl font-medium transition-all"
                    >
                      <ExternalLink size={12} />
                      Live Stream
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
