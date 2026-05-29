import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="global-footer" className="py-12 px-6 bg-dark-bg border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left column logo info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display font-medium text-sm text-white tracking-widest uppercase">
            {PORTFOLIO_OWNER.name}
          </span>
          <span className="font-mono text-[9px] text-zinc-600 tracking-wider">
            AI & WEB ENGINEERING PORTFOLIO © 2026 // SECURE DEPLOYMENT
          </span>
        </div>

        {/* Middle column quick links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={() => handleNavClick('about')}
            className="font-sans text-[11px] text-zinc-500 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('skills')}
            className="font-sans text-[11px] text-zinc-500 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="font-sans text-[11px] text-zinc-500 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('experience')}
            className="font-sans text-[11px] text-zinc-500 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="font-sans text-[11px] text-zinc-500 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Right column socials + scroll-to-top interlocks */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <a
              href={PORTFOLIO_OWNER.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/5 rounded-full text-zinc-500 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={PORTFOLIO_OWNER.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/5 rounded-full text-zinc-500 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={`mailto:${PORTFOLIO_OWNER.email}`}
              className="p-2 bg-white/5 rounded-full text-zinc-500 hover:text-white transition-colors"
              title="Email"
            >
              <Mail size={14} />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-2 bg-white/5 rounded-xl text-zinc-500 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Scroll To Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      {/* Immersive UI Status Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium gap-4 select-none">
        <div>© 2026 Dheeraj C — All rights reserved</div>
        <div className="flex gap-6">
          <span>Bengaluru, India</span>
          <span className="text-zinc-400">Version 2.0.4</span>
        </div>
      </div>
    </footer>
  );
}
