import { motion } from 'motion/react';
import { Calendar, Briefcase, Award, Code } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data';

export default function Experience() {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase size={16} className="text-brand-cyan" />;
      case 'project':
        return <Code size={16} className="text-brand-violet" />;
      default:
        return <Award size={16} className="text-purple-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-6 relative bg-dark-bg border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div id="experience-section-header" className="mb-16 text-center">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block mb-2">
            // INDEX 04
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-white tracking-tight">
            Professional Track & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full mt-4 mx-auto" />
        </div>

        {/* Vertical Timeline Track */}
        <div id="timeline-v-container" className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12 py-4">
          {EXPERIENCE_TIMELINE.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              {/* Spinning / Glowing connection bullet point */}
              <div className="absolute top-1.5 -left-[45px] md:-left-[53px] w-8 h-8 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:border-brand-cyan/50 duration-300 z-10 shadow-lg">
                {getTimelineIcon(exp.type)}
              </div>

              {/* Card Container Layout */}
              <div className="interactive-card p-6 md:p-8 bg-white/3 border border-white/5 rounded-3xl backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-white/10">
                {/* Horizontal glowing top accent stripe */}
                <div className="absolute top-0 inset-x-0 h-[10px] bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-xs text-brand-cyan font-medium group-hover:text-brand-violet transition-colors">
                      {exp.company}
                    </p>
                  </div>

                  {/* Period tag */}
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 md:bg-transparent md:border-none md:p-0">
                    <Calendar size={12} className="text-brand-violet" />
                    {exp.period}
                  </span>
                </div>

                {/* Bullets lists */}
                <ul className="space-y-3">
                  {exp.description.map((bullet, liIdx) => (
                    <li key={liIdx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 flex-shrink-0" />
                      <span className="font-sans text-[12px] text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
