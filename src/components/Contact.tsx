import { ChangeEvent, FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, AlertTriangle, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic Validation Check
    if (!formData.name || !formData.email || !formData.message) {
      setValidationError('Please populate all required fields (Name, Email, and Message).');
      return;
    }

    // Email Pattern Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationError('Please provide a valid email address.');
      return;
    }

    setFormState('submitting');

    // Simulate luxury API call submitting state
    setTimeout(() => {
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-dark-bg border-t border-white/5">
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div id="contact-section-header" className="mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block mb-2">
            // INDEX 05
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-white tracking-tight">
            Initiate Contact & Collaboration
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full mt-4" />
        </div>

        {/* 2-Column Grid */}
        <div id="contact-split-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Descriptive texts, Social nodes (Span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 bg-white/3 border border-white/5 rounded-3xl backdrop-blur-sm">
              <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase block mb-2">
                Available coordinates
              </span>
              <h3 className="font-display font-semibold text-lg text-white mb-4">
                Let's Build Something Intelligent Together
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Whether you want to construct deep neural classifiers (YOLOv8), orchestrate highly reactive single-pages, or simply converse about artificial intelligence — I am open to discussing new roles and technical collaborations.
              </p>

              <div className="space-y-4">
                {/* Location item */}
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="p-2.5 bg-white/5 rounded-xl text-brand-violet">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-semibold text-xs text-white">Inbound Base</span>
                    <span className="font-sans text-[11px] text-zinc-500">Karnataka, India // Global Remote Ready</span>
                  </div>
                </div>

                {/* Direct email box */}
                <a
                  href={`mailto:${PORTFOLIO_OWNER.email}`}
                  className="flex items-center gap-3 text-zinc-300 group hover:text-brand-cyan transition-colors"
                >
                  <div className="p-2.5 bg-white/5 rounded-xl text-brand-cyan group-hover:bg-brand-cyan/10 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-semibold text-xs text-white group-hover:text-brand-cyan transition-colors">Digital Mail</span>
                    <span className="font-mono text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {PORTFOLIO_OWNER.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick social networking channels */}
            <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl flex flex-col gap-4">
              <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase block">
                Social Node Registries
              </span>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PORTFOLIO_OWNER.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 bg-white/5 rounded-2xl flex items-center justify-center gap-2 font-mono text-xs text-zinc-300 border border-white/5 hover:border-white/20 hover:text-white transition-all text-center"
                >
                  <Github size={14} /> /dheeraj-c
                </a>
                <a
                  href={PORTFOLIO_OWNER.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 bg-white/5 rounded-2xl flex items-center justify-center gap-2 font-mono text-xs text-zinc-300 border border-white/5 hover:border-white/20 hover:text-white transition-all text-center"
                >
                  <Linkedin size={14} className="text-brand-cyan" /> /dheeraj-c
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction form container (Span 7) */}
          <div className="lg:col-span-12 xl:col-span-7 lg:col-span-7">
            <div className="p-8 md:p-10 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/5 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success-state"
                    className="flex flex-col items-center text-center py-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>

                    <h3 className="font-display font-semibold text-xl text-white mb-2">
                      Transmission Dispatched
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 max-w-sm mb-8 leading-relaxed">
                      Thank you for initiating communication. Your message has been resolved successfully. I will review and reply within 12 standard business hours.
                    </p>

                    <button
                      onClick={() => setFormState('idle')}
                      className="px-6 py-2 border border-white/10 text-white font-semibold rounded-full hover:bg-zinc-800 text-xs tracking-wider uppercase transition-all"
                    >
                      Reset Form Channel
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form-state"
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                          Your Name <span className="text-brand-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={formState === 'submitting'}
                          placeholder="Dheeraj"
                          className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors"
                        />
                      </div>

                      {/* Email field */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                          Email Address <span className="text-brand-cyan">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={formState === 'submitting'}
                          placeholder="name@domain.com"
                          className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject field */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={formState === 'submitting'}
                        placeholder="Collaboration Opportunities"
                        className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors"
                      />
                    </div>

                    {/* Message field */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                        Detailed Message <span className="text-brand-cyan">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={formState === 'submitting'}
                        placeholder="Detail your collaborative concept or project criteria here..."
                        className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {/* Alert Box showing validation issues */}
                    {validationError && (
                      <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-[11px] font-sans">
                        <AlertTriangle size={14} />
                        {validationError}
                      </div>
                    )}

                    {/* Submit dispatch button */}
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full py-4 px-6 bg-gradient-to-r from-brand-violet to-brand-cyan hover:scale-[1.01] active:scale-[0.99] rounded-2xl text-xs font-semibold uppercase tracking-wider text-white select-none transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Broadcasting Transmission...
                        </>
                      ) : (
                        <>
                          <Send size={12} className="text-white" />
                          Transmit Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
