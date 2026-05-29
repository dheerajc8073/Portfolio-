import { motion } from 'motion/react';
import { Award, GraduationCap, MapPin, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_OWNER, STATS, EDUCATION_TIMELINE } from '../data';
import DbitLogo from './DbitLogo';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-dark-bg border-t border-white/5">
      <div className="absolute top-0 right-10 w-72 h-72 bg-brand-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div id="about-section-header" className="mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block mb-2">
            // INDEX 01
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-white tracking-tight">
            Professional Narrative & Academic Foundations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full mt-4" />
        </div>

        {/* 2-Column Bento Grid Panel */}
        <div id="about-bento-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Summary and Core Stats (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              className="p-8 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7 }}
            >
              {/* Corner decorative light */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-xl" />

              <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <Flame size={18} className="text-brand-cyan" />
                The Bio-Architect
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                {PORTFOLIO_OWNER.bio}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-zinc-300">
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <MapPin size={13} className="text-brand-violet" /> Inbound Global Remote
                </span>
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <Award size={13} className="text-gold-luxury text-yellow-500" /> B.Tech Undergraduate
                </span>
              </div>
            </motion.div>

            {/* Stats Dashboard Grid */}
            <div id="about-stats-container" className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="interactive-card p-6 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, borderColor: 'rgba(124, 58, 237, 0.25)' }}
                >
                  <div className="mb-2">
                    <span className="font-display font-bold text-3xl sm:text-4xl text-white">
                      {stat.value}
                    </span>
                    <span className="font-display text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan font-bold">
                      {stat.suffix}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-xs text-zinc-200 tracking-wide mb-1">
                      {stat.label}
                    </h4>
                    <p className="font-sans text-[10px] text-zinc-500 leading-normal">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Track and Timeline (Span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 lg:col-span-5 flex flex-col justify-between">
            {EDUCATION_TIMELINE.map((edu) => (
              <motion.div
                key={edu.id}
                className="interactive-card h-full p-8 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm flex flex-col"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ borderColor: 'rgba(6, 182, 212, 0.25)' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-cyan/10 rounded-2xl text-brand-cyan">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 tracking-wider">
                      ACADEMIC CREDENTIAL
                    </span>
                    <h3 className="font-display font-semibold text-lg text-white leading-tight">
                      Education Timeline
                    </h3>
                  </div>
                </div>

                <div className="mb-5 flex items-start gap-4.5">
                  <div className="shrink-0 mt-1.5 p-1 bg-white/5 border border-white/10 rounded-2xl shadow-lg shadow-black/25">
                    <DbitLogo size={42} />
                  </div>
                  <div>
                    <motion.span 
                      className="inline-block px-2.5 py-1 bg-brand-violet/20 border border-brand-violet/30 rounded-lg text-brand-violet font-mono text-xs mb-3"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {edu.period}
                    </motion.span>
                    <h4 className="font-display font-medium text-sm sm:text-base text-white tracking-wide leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-xs text-zinc-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Major Highlights List */}
                <div className="mt-auto space-y-3">
                  <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase block">
                    Core Concentration Highlights
                  </span>
                  {edu.highlights.map((hlt, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-brand-cyan mt-1 flex-shrink-0" />
                      <span className="font-sans text-[11px] text-zinc-300 leading-snug">
                        {hlt}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
