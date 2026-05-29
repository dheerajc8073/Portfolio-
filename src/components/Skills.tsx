import { motion } from 'motion/react';
import { Sparkles, Layers, Cpu, Database, Terminal, ChevronRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function Skills() {
  // Map category title to appropriate decorative icon
  const getCategoryIcon = (title: string) => {
    const lTitle = title.toLowerCase();
    if (lTitle.includes('front')) return <Layers size={18} className="text-brand-cyan" />;
    if (lTitle.includes('back')) return <Terminal size={18} className="text-brand-violet" />;
    if (lTitle.includes('ai') || lTitle.includes('vision')) return <Cpu size={18} className="text-purple-400" />;
    if (lTitle.includes('data')) return <Database size={18} className="text-brand-cyan" />;
    return <Sparkles size={18} className="text-zinc-400" />;
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-dark-bg border-t border-white/5">
      {/* Decorative ambient lighting nodes */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div id="skills-section-header" className="mb-16">
          <span className="font-mono text-xs text-brand-violet tracking-widest uppercase block mb-2">
            // INDEX 02
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full mt-4" />
        </div>

        {/* Dynamic Category Bento Dashboard */}
        <div id="skills-grid-bento" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="interactive-card p-6 bg-zinc-900/30 border border-white/5 rounded-3xl backdrop-blur-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.08 }}
              whileHover={{ 
                y: -5, 
                borderColor: 'rgba(6, 182, 212, 0.25)',
                boxShadow: '0 10px 30px -15px rgba(6, 182, 212, 0.1)'
              }}
            >
              <div>
                {/* Header card details */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                      {getCategoryIcon(category.title)}
                    </div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-600">
                    // S.{catIdx + 1}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-4">
                  {category.skills.map((sk) => (
                    <div key={sk.name} className="group/item">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-sans text-xs text-zinc-300 group-hover/item:text-white transition-colors flex items-center gap-1.5">
                          <ChevronRight size={10} className="text-zinc-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          {sk.name}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500 group-hover/item:text-brand-cyan transition-colors">
                          {sk.level}%
                        </span>
                      </div>

                      {/* Custom Track */}
                      <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-violet to-brand-cyan"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${sk.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Subtle status tags */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-sans text-[9px] text-zinc-500 tracking-wider">
                  VERIFIED STACK
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
