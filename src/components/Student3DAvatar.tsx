import React, { useState, useRef, MouseEvent, useEffect } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Camera, RotateCcw, Upload, Sparkles, Layers, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';

export default function Student3DAvatar() {
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Load custom image from localStorage on mount
  useEffect(() => {
    try {
      const savedImage = localStorage.getItem('dbit-custom-avatar');
      if (savedImage) {
        setCustomImage(savedImage);
      }
    } catch (e) {
      console.error('Failed to load cached avatar image from local storage', e);
    }
  }, []);

  // Motion values for smooth physical mouse interpolation
  const mouseX = useSpring(0, { damping: 25, stiffness: 180 });
  const mouseY = useSpring(0, { damping: 25, stiffness: 180 });

  // Handle card element mouse interactions for 3D tilting
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized coordinates (-0.5 to 0.5) from the center
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // 3D Card tilt transformations
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);

  // Parallax layers translations based on mouse position
  const bgX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  const midX = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const midY = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);

  const frontX = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const frontY = useTransform(mouseY, [-0.5, 0.5], [-14, 14]);

  // Handle photo file selection and read as base64
  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCustomImage(dataUrl);
        try {
          localStorage.setItem('dbit-custom-avatar', dataUrl);
        } catch (err) {
          console.warn('Image is too large to cache in localStorage, using session state only.');
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  // Drag and drop events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    try {
      localStorage.removeItem('dbit-custom-avatar');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* Invisible file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        id="hidden-avatar-uploader"
      />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="relative w-80 h-[390px] sm:w-[340px] sm:h-[430px] mx-auto cursor-pointer [perspective:1200px] select-none group"
        style={{
          filter: isHovered 
            ? 'drop-shadow(0 30px 60px rgba(139, 92, 246, 0.25)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.45))'
            : 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6))',
        }}
      >
        <motion.div
          className="w-full h-full relative overflow-hidden flex flex-col items-center justify-between p-6 pb-5"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
            clipPath: 'polygon(45px 0, 100% 0, 100% calc(100% - 45px), calc(100% - 45px) 100%, 0 100%, 0 45px)',
            border: isDragging ? '2px dashed #8b5cf6' : '1px solid rgba(255,255,255,0.1)'
          }}
          animate={{
            scale: isHovered || isDragging ? 1.02 : 1,
            borderColor: isDragging ? '#8b5cf6' : isHovered ? 'rgba(139, 92, 246, 0.4)' : 'rgba(255, 255, 255, 0.1)'
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Tech Blueprint Background Grid Over Slate Card */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          {/* Radial Studio Light Backdrop Halo Glow (matches photo lighting) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#8b5cf6]/10 rounded-full blur-[80px] pointer-events-none"
            style={{ x: bgX, y: bgY }}
          />

          {/* Frame Borders and Corners (Sleek tech aesthetics) */}
          <div className="absolute top-3 left-12 right-3 h-[1px] bg-white/5" />
          <div className="absolute bottom-3 left-3 right-12 h-[1px] bg-white/5" />
          <div className="absolute left-3 top-12 bottom-3 w-[1px] bg-white/5" />
          <div className="absolute right-3 top-3 bottom-12 w-[1px] bg-white/5" />

          {/* Core Content Container */}
          <div className="relative w-full h-full flex flex-col items-center justify-between z-10">
            {/* Top Bar Status */}
            <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              <span className="flex items-center gap-1">
                <Layers size={10} className="text-brand-cyan" />
                SYSTEM READY
              </span>
              <span className="text-[9px] text-zinc-400 font-bold px-2 py-0.5 bg-white/5 border border-white/5">
                {customImage ? "USER PHOTO" : "VECTOR ENGRAVING"}
              </span>
            </div>

            {/* Avatar Showcase Center Frame */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center [transform:translateZ(60px)] my-auto">
              
              {/* Dynamic Toggle Animation between default SVG and custom uploaded photo */}
              <AnimatePresence mode="wait">
                {customImage ? (
                  /* Custom Uploaded User Image Rendering with high-tech 3D Parallax halo */
                  <motion.div
                    key="uploaded-photo"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full p-2"
                  >
                    {/* Floating circular sci-fi rings around the photo */}
                    <motion.div 
                      className="absolute inset-0 border border-brand-cyan/20 rounded-full animate-[spin_12s_linear_infinite]"
                      style={{ x: midX, y: midY }}
                    />
                    <motion.div 
                      className="absolute -inset-2 border border-brand-violet/15 rounded-full border-dashed animate-[spin_20s_linear_infinite_reverse]"
                      style={{ x: bgX, y: bgY }}
                    />

                    {/* Highly polished mask frame for photo */}
                    <div 
                      className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 relative"
                      style={{
                        clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
                      }}
                    >
                      {/* Photo Image with bounce/breathing effect */}
                      <motion.img
                        src={customImage}
                        alt={PORTFOLIO_OWNER.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        animate={{
                          scale: [1, 1.02, 1],
                          y: [0, -4, 0]
                        }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        style={{ x: midX, y: midY }}
                      />

                      {/* Sci-Fi Scanner Grid lines moving slowly overlaid on photo */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-brand-cyan/5 to-transparent h-1/2 w-full animate-[bounce_8s_ease-in-out_infinite] opacity-60" />
                      
                      {/* Interactive Swap overlay visible on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                        <Camera size={26} className="text-white animate-bounce" />
                        <span className="text-xs font-semibold text-white tracking-widest uppercase">Change Photo</span>
                        <span className="text-[9px] text-zinc-400">Drag & drop anywhere</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* High-Fidelity Professional SVG Graphic of Dheeraj C matching Headshot */
                  <motion.div
                    key="default-engraving"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {/* Breathing core motion */}
                    <motion.div
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 4.0,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-full h-full"
                    >
                      <svg
                        className="w-full h-full drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)]"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Elegant Tech Rings in background */}
                        <circle cx="100" cy="100" r="76" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                        <circle cx="100" cy="100" r="66" fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="1.2" strokeDasharray="6 4" />
                        <circle cx="100" cy="100" r="54" fill="none" stroke="rgba(6,182,212,0.12)" strokeWidth="1" />

                        {/* LAYER 1: Core Blazer & Crossed Arms (Matches the specific professional headshot) */}
                        <motion.g style={{ x: midX, y: midY }}>
                          {/* Dark Blazer Silhouette */}
                          <path
                            d="M42,168 C42,138 68,124 100,124 C132,124 158,138 158,168 L163,195 L37,195 Z"
                            fill="#111115"
                            stroke="#ffffff"
                            strokeOpacity="0.1"
                            strokeWidth="1"
                          />
                          
                          {/* Pure White Starched Dress Shirt with unbuttoned open collar */}
                          <path d="M84,124 L100,146 L116,124 Z" fill="#ffffff" />
                          <path d="M100,146 L96,168 L104,168 Z" fill="#f4f4f5" />
                          
                          {/* Beautiful crisp collar flaps matching photo style */}
                          <path d="M81,123 L100,138 L96,124 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.6" />
                          <path d="M119,123 L100,138 L104,124 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.6" />

                          {/* Matte black blazer front lapels */}
                          <path d="M72,126 L94,142 L80,172 Z" fill="#09090b" />
                          <path d="M128,126 L106,142 L120,172 Z" fill="#09090b" />

                          {/* Crossed Arms posture from the custom headshot upload */}
                          {/* Under sleeve (left arm) */}
                          <path 
                            d="M44,164 C55,160 85,160 96,168 C96,174 90,185 80,185 C65,185 50,180 40,180 Z" 
                            fill="#111115" 
                            stroke="#ffffff"
                            strokeOpacity="0.08"
                            strokeWidth="1"
                          />
                          {/* Over sleeve (right arm) */}
                          <path 
                            d="M156,164 C145,160 115,160 104,168 C104,174 110,185 120,185 C135,185 150,180 160,180 Z" 
                            fill="#15151b" 
                            stroke="#ffffff"
                            strokeOpacity="0.1"
                            strokeWidth="1"
                          />
                          {/* Pop-out white French cuffs */}
                          <path d="M52,176 L54,168 L59,170 L57,178 Z" fill="#ffffff" />
                          <path d="M148,176 L146,168 L141,170 L143,178 Z" fill="#ffffff" />
                        </motion.g>

                        {/* LAYER 2: Face & Neck Neckliner with premium contrast stenciling */}
                        <motion.g style={{ x: frontX, y: frontY }}>
                          {/* Neck base with soft shadow casting */}
                          <rect x="91" y="111" width="18" height="20" rx="3" fill="#ffffff" />
                          <path d="M91,123 Q100,128 109,123" fill="none" stroke="#e4e4e7" strokeWidth="1.2" />

                          {/* Ears */}
                          <circle cx="65" cy="85" r="7" fill="#ffffff" />
                          <circle cx="65" cy="85" r="4" fill="#f4f4f5" />
                          <circle cx="135" cy="85" r="7" fill="#ffffff" />
                          <circle cx="135" cy="85" r="4" fill="#f4f4f5" />

                          {/* Face Oval Profile */}
                          <path
                            d="M68,85 C68,59 82,51 100,51 C118,51 132,59 132,85 C132,109 119,118 100,118 C81,118 68,109 68,85 Z"
                            fill="#ffffff"
                            stroke="#e4e4e7"
                            strokeWidth="1.2"
                          />

                          {/* Minimalist modern light shadow nose line */}
                          <path d="M100,78 L100,91 Q100,93 102,93" stroke="#cbd5e1" strokeWidth="2.0" strokeLinecap="round" fill="none" />

                          {/* Dheeraj's goatee and mustache stubble in solid flat charcoal */}
                          {/* Mustache profile */}
                          <path
                            d="M86,97 Q93,93 100,95 Q107,93 114,97 Q100,99 86,97"
                            fill="#09090b"
                          />
                          
                          {/* Goatee line wrapping along chin */}
                          <path
                            d="M93,109 Q100,115 107,109 Q103,116 100,116 Q97,116 93,109"
                            fill="#09090b"
                          />
                          {/* Precision soul patch block */}
                          <rect x="97" y="102" width="6" height="5" rx="1.2" fill="#09090b" />

                          {/* Confidence smiling mouth line from photo */}
                          <path
                            d="M91,99 Q100,105 109,99"
                            stroke="#18181b"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                          />

                          {/* Vector blush accents */}
                          <ellipse cx="77" cy="91" rx="4" ry="2" fill="#000000" fillOpacity="0.04" />
                          <ellipse cx="123" cy="91" rx="4" ry="2" fill="#000000" fillOpacity="0.04" />
                        </motion.g>

                        {/* LAYER 3: Stylized Wavy Executive Hair (Swept upwards and to the right) */}
                        <motion.g style={{ x: midX, y: midY }}>
                          {/* Forehead hair shadow depth */}
                          <path d="M66,68 C64,52 74,34 94,33 C114,32 131,43 133,59 Z" fill="#000000" fillOpacity="0.12" />

                          {/* Matte Black high-volume swept hair */}
                          <path
                            d="M66,68 C63,51 72,34 95,31 C118,28 132,40 134,58 C135,68 130,73 130,73 C130,73 125,51 98,53 C76,55 70,72 66,68 Z"
                            fill="#09090b"
                          />
                          {/* Modern charcoal-gray highlights */}
                          <path
                            d="M69,60 C66,48 76,38 92,36 C108,34 125,43 128,54 Q120,44 100,45 C80,46 72,62 69,60 Z"
                            fill="#27272a"
                          />
                          <path
                            d="M80,48 C75,41 85,34 100,34 Q115,34 118,44 Q105,38 92,40 B78,43"
                            fill="#3f3f46"
                          />
                        </motion.g>

                        {/* LAYER 4: Eyes, Bold Black Rectangular Glasses */}
                        <motion.g style={{ x: frontX, y: frontY }}>
                          {/* Eyebrows */}
                          <path d="M74,72 C79,69 86,70 91,73" stroke="#09090b" strokeWidth="3" strokeLinecap="round" fill="none" />
                          <path d="M126,72 C121,69 114,70 109,73" stroke="#09090b" strokeWidth="3" strokeLinecap="round" fill="none" />

                          {/* Pure black pupils */}
                          <circle cx="82" cy="79" r="3" fill="#09090b" />
                          <circle cx="118" cy="79" r="3" fill="#09090b" />
                          <circle cx="83.2" cy="77.8" r="0.9" fill="#ffffff" />
                          <circle cx="119.2" cy="77.8" r="0.9" fill="#ffffff" />

                          {/* Bold Rectangular black acetate frames */}
                          <rect
                            x="70"
                            y="71"
                            width="26"
                            height="17"
                            rx="4.5"
                            fill="none"
                            stroke="#09090b"
                            strokeWidth="3.2"
                          />
                          <rect
                            x="104"
                            y="71"
                            width="26"
                            height="17"
                            rx="4.5"
                            fill="none"
                            stroke="#09090b"
                            strokeWidth="3.2"
                          />
                          {/* Metal keyhole bridge */}
                          <path d="M96,78 L104,78" stroke="#09090b" strokeWidth="3.2" strokeLinecap="round" />
                          {/* Side hinges wrapping backwards */}
                          <path d="M70,76 Q65,76 64,79" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M130,76 Q135,76 136,79" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />
                        </motion.g>
                      </svg>
                    </motion.div>

                    {/* Quick drag over/upload CTA indicator inside frame when hover default */}
                    <div className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <Camera size={26} className="text-white animate-bounce" />
                      <span className="text-xs font-semibold text-white tracking-widest uppercase">Swap with Real Photo</span>
                      <span className="text-[9px] text-zinc-400">Click to upload or drag & drop</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Bottom Info Panels (Matching the layout perfectly) */}
            <div className="w-full text-center flex flex-col items-center gap-1.5 [transform:translateZ(40px)]">
              <div className="font-display font-black text-xl text-white tracking-tight uppercase leading-none flex items-center gap-1.5">
                {PORTFOLIO_OWNER.name}
                <ShieldCheck size={16} className="text-brand-cyan" />
              </div>
              
              {/* Dynamic 3D badge overlay */}
              <div className="font-mono text-[9px] text-zinc-300 uppercase tracking-[0.22em] flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-none font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                Interactive 3D Hologram
              </div>
            </div>

            {/* Upload swap metadata line */}
            <div className="w-full border-t border-white/5 pt-3 flex items-center justify-between text-zinc-500 font-mono text-[9px] tracking-[0.12em] uppercase font-bold shrink-0">
              <button 
                onClick={triggerUpload}
                className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Camera size={10} />
                {customImage ? "Replace Photo" : "Upload Photo"}
              </button>

              {customImage ? (
                <button
                  onClick={handleReset}
                  className="hover:text-red-400 text-brand-cyan transition-colors flex items-center gap-1 cursor-pointer"
                  title="Toggle back to Vector graphic engraving fallback"
                >
                  <RotateCcw size={10} />
                  Reset to Vector
                </button>
              ) : (
                <span className="text-zinc-600">Tilt Card to Interact</span>
              )}
            </div>

          </div>

          {/* Glowing drag state highlight ring */}
          {isDragging && (
            <div className="absolute inset-0 bg-brand-violet/10 backdrop-blur-sm z-50 flex flex-col items-center justify-center border-2 border-dashed border-brand-violet animate-pulse pointer-events-none">
              <Upload size={36} className="text-brand-violet mb-2" />
              <div className="text-xs font-bold text-white uppercase tracking-widest">Drop Image file here</div>
              <div className="text-[10px] text-zinc-400 font-mono mt-1">To instantly render as 3D visual photo</div>
            </div>
          )}

        </motion.div>
      </div>

      {/* Floating dynamic hint label beneath card */}
      <div className="text-[10px] text-zinc-500 font-mono tracking-wider flex items-center gap-1.5">
        <Sparkles size={11} className="text-brand-violet animate-pulse" />
        <span>Supports Drag & Drop of any real JPG/PNG photo</span>
      </div>
    </div>
  );
}
