import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('Initializing luxury portal...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const phases = [
      { min: 0, text: 'Resolving aesthetic assets...' },
      { min: 25, text: 'Loading neural CV modules...' },
      { min: 55, text: 'Hydrating smart glass layers...' },
      { min: 80, text: 'Launching Dheeraj C credentials...' }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 3;
        if (next >= 100) {
          clearInterval(interval);
          setPhaseText('Ready.');
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 550); // Give time for exit anim
          }, 400);
          return 100;
        }

        const appropriatePhase = [...phases].reverse().find(p => next >= p.min);
        if (appropriatePhase) {
          setPhaseText(appropriatePhase.text);
        }

        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="global-loading-screen"
          className="fixed inset-0 bg-dark-bg z-index-top-most flex flex-col justify-center items-center select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -25, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {/* Central Logo Symbol */}
          <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
            {/* Spinning decorative orbit */}
            <motion.div
              className="absolute inset-0 border-t-2 border-r-2 border-brand-violet/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 border-b-2 border-l-2 border-brand-cyan/40 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
            {/* Initials Text */}
            <span className="font-display font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-brand-violet to-brand-cyan tracking-wider">
              D
            </span>
            <span className="font-display font-medium text-lg text-zinc-400 absolute bottom-1 right-2">
              C
            </span>
          </div>

          {/* Value Progress bar */}
          <div className="w-56 max-w-full relative h-[2px] bg-zinc-900 rounded-full overflow-hidden mb-4">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-violet to-brand-cyan"
              style={{ width: `${progress}%` }}
              layoutId="luxury-loading-progress"
            />
          </div>

          {/* Percentage text */}
          <span className="font-mono text-xs text-white tracking-widest block mb-1">
            {progress}%
          </span>

          <span className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase h-4 transition-all duration-300">
            {phaseText}
          </span>

          {/* System metadata credits (discreet design) */}
          <div className="absolute bottom-6 font-mono text-[9px] text-zinc-600 tracking-wider">
            DHEERAJ.C // VERSION 2026.05
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
