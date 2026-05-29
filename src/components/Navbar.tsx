import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, FileText, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';

interface NavItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', targetId: 'home' },
  { label: 'About', targetId: 'about' },
  { label: 'Skills', targetId: 'skills' },
  { label: 'Projects', targetId: 'projects' },
  { label: 'Experience', targetId: 'experience' },
  { label: 'Contact', targetId: 'contact' },
];

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for glass effect and active link rendering
  useEffect(() => {
    const handleScroll = () => {
      // Glassmorphic toggle threshold
      setScrolled(window.scrollY > 40);

      // Section spy detection
      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold to detect which section fills the viewport top half
          return {
            id: item.targetId,
            topOffset: rect.top,
            height: rect.height,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the first section that is visible on screen
      const current = sections.find((sect) => {
        if (!sect) return false;
        // If element is scrolled past top but still has visible height
        return sect.topOffset <= 160 && sect.topOffset + sect.height > 160;
      });

      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Execute a fast invocation on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      // Offset navbar height
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <motion.header
        id="main-glass-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-bg/70 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand Initials / Signature */}
          <button
            id="brand-logo-nav"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-bg rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">
                  D
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg tracking-tight text-white leading-tight">
                Dheeraj C.
              </span>
              <span className="font-sans text-[9px] text-zinc-500 tracking-wider">
                AI / FULL STACK
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-1.5 py-1 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.targetId}
                onClick={() => handleNavClick(item.targetId)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                  activeSection === item.targetId
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeSection === item.targetId && (
                  <motion.div
                    layoutId="active-navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call To Actions */}
          <div id="desktop-actions" className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-white/10 pr-4">
              <button
                onClick={toggleTheme}
                className="text-zinc-400 hover:text-brand-cyan transition-colors p-1.5 rounded-full cursor-pointer flex items-center justify-center focus:outline-none"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <a
                href={PORTFOLIO_OWNER.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-brand-cyan transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={PORTFOLIO_OWNER.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-brand-violet transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_OWNER.email}`}
                className="text-zinc-400 hover:text-brand-cyan transition-colors"
                title="Email Me"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-1.5 text-xs text-white bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full font-medium tracking-wide shadow-lg hover:shadow-brand-violet/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Hamburguer Handler */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Slide Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-lg z-30 pt-28 px-8 flex flex-col md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Nav List */}
            <div className="flex flex-col gap-5 mb-12">
              <span className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">
                Navigation Indices
              </span>
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.targetId}
                  onClick={() => handleNavClick(item.targetId)}
                  className="text-left font-display font-semibold text-3xl text-zinc-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-violet hover:to-brand-cyan transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <span className="font-mono text-xs text-brand-violet/50 mr-4">
                    0{index + 1}.
                  </span>
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Sub Social and Contact section inside Mobile Nav */}
            <div className="mt-auto pb-12 flex flex-col gap-6">
              <div className="w-full h-[1px] bg-white/5" />
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <button
                    onClick={toggleTheme}
                    className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white transition-colors flex items-center justify-center focus:outline-none"
                    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    aria-label="Toggle Theme"
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                  <a
                    href={PORTFOLIO_OWNER.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={PORTFOLIO_OWNER.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${PORTFOLIO_OWNER.email}`}
                    className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="px-6 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full"
                >
                  Contact Me
                </button>
              </div>
              <div className="text-center font-mono text-[9px] text-zinc-600">
                PORTFOLIO OF DHEERAJ C © 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
