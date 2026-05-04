import { motion } from 'motion/react';
import { Language, translations } from '../i18n';
import { Theme } from '../App';

interface HeroProps {
  language: Language;
  theme: Theme;
}

export default function Hero({ language, theme }: HeroProps) {
  const t = translations[language];
  const shard1 = 'polygon(15% 5%, 22% 0%, 35% 8%, 42% 2%, 55% 10%, 65% 0%, 78% 12%, 88% 5%, 100% 28%, 95% 45%, 100% 65%, 94% 82%, 100% 95%, 85% 100%, 72% 92%, 58% 100%, 45% 95%, 32% 100%, 18% 92%, 5% 100%, 0% 82%, 8% 65%, 2% 45%, 12% 28%, 4% 12%)';
  const shard2 = 'polygon(5% 15%, 18% 5%, 35% 2%, 52% 10%, 68% 0%, 82% 12%, 95% 5%, 100% 32%, 92% 55%, 100% 88%, 85% 100%, 62% 95%, 42% 100%, 25% 92%, 10% 100%, 0% 78%, 8% 55%, 2% 32%, 12% 12%)';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden font-sans">
      {/* Background Geometric Decoration */}
      <div className={`absolute top-[-100px] right-[-100px] w-96 h-96 blur-[120px] rounded-full ${theme === 'dark' ? 'bg-red-600/10' : 'bg-red-500/5'}`}></div>
      <div className={`absolute bottom-[-50px] left-[-50px] w-64 h-64 blur-[100px] rounded-full ${theme === 'dark' ? 'bg-red-600/10' : 'bg-red-500/5'}`}></div>

      {/* Smooth Transition Mask to next section - Extending fragments to overlap banner */}
      <div className={`absolute bottom-[-100px] left-0 right-0 h-96 z-30 pointer-events-none bg-gradient-to-t ${
        theme === 'dark' ? 'from-neutral-950 via-neutral-950/40 to-transparent' : 'from-white via-white/40 to-transparent'
      }`}>
        {/* Floating Fragments in Transition Area - These will now overlap the banner */}
        <motion.div 
          animate={{ y: [-50, 30, -50], x: [-20, 40, -20], rotate: [0, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 left-[15%] w-32 h-32 bg-red-600/10 blur-[2px]" 
          style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
        />
        <motion.div 
          animate={{ y: [0, -80, 0], x: [30, -30, 30], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-40 right-[20%] w-48 h-24 bg-red-600/10 blur-[4px]" 
          style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}
        />
        <motion.div 
          animate={{ y: [20, 100, 20], rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-10 left-[40%] w-24 h-24 bg-red-900/10" 
          style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
        />
        <motion.div 
          animate={{ x: [-100, 100, -100], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl md:text-5xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
            >
              {t.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-600">{t.hero.title2}</span>. <br />
              {t.hero.title3} <br />
              <span className={`text-[0.75em] md:text-[0.65em] block mt-2 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>{t.hero.title4}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-2 border-red-600 pl-6 max-w-xl mb-12"
            >
              <p className={`text-sm md:text-base leading-relaxed mb-4 tracking-tighter ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {t.hero.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-end lg:pr-20"
            >
              <div className="relative group/btn scale-110 md:scale-150 mt-12 lg:mt-20">
                <a
                   href="#case-study"
                  className="px-16 py-8 bg-red-600 hover:bg-red-500 font-black uppercase text-[14px] tracking-[0.4em] transition-all relative flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.6)] border-y-2 border-white/30"
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0 30%)' }}
                >
                  <span className="inline-block text-white italic relative z-10 drop-shadow-2xl -translate-y-2">{t.hero.ctaProjects}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[200%] group-hover/btn:translate-x-[200%] transition-transform duration-700 ease-in-out" />
                  
                  {/* Extreme Gaming Decor */}
                  <div className="absolute top-0 left-0 w-4 h-full bg-white/20 skew-x-12" />
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/20" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
                </a>

                {/* Cyberpunk Shards - VERY SLOW and majestic */}
                <motion.div 
                   animate={{ y: [-40, 30, -40], x: [-25, 25, -25], rotate: [0, 360, 0], scale: [1, 1.1, 1] }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   className="absolute -top-16 -right-20 w-20 h-20 bg-red-600/80 blur-[2px] mix-blend-screen" 
                   style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 70%)' }} 
                />
                <motion.div 
                   animate={{ y: [40, -40, 40], x: [30, -20, 30], rotate: [360, 0, 360] }}
                   transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-20 -left-20 w-16 h-16 bg-red-600/50 blur-[1px]" 
                   style={{ clipPath: 'polygon(10% 10%, 100% 0, 80% 100%)' }} 
                />
                
                {/* Additional Small Fragments - Slower */}
                <motion.div 
                   animate={{ x: [0, 20, 0], y: [0, -30, 0], rotate: [0, 90, 0] }}
                   transition={{ duration: 15, repeat: Infinity }}
                   className="absolute top-0 -right-24 w-6 h-6 bg-red-500/40" 
                   style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                />
                <motion.div 
                   animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                   transition={{ duration: 18, repeat: Infinity }}
                   className="absolute -bottom-10 right-0 w-4 h-4 bg-white/20" 
                   style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
                />
                <motion.div 
                   animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                   transition={{ duration: 5, repeat: Infinity }}
                   className="absolute -top-10 left-10 w-2 h-2 bg-red-400/60"
                />
                <motion.div 
                   animate={{ rotate: [0, -180, 0] }}
                   transition={{ duration: 12, repeat: Infinity }}
                   className="absolute top-1/2 -left-32 w-6 h-6 bg-red-900/30 blur-[1px]" 
                   style={{ clipPath: 'polygon(20% 0%, 100% 40%, 70% 100%, 0% 80%)' }}
                />
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:block lg:col-span-5 translate-y-12">
            <motion.div
               animate={{ rotate: [0, 2, 0], y: [0, -10, 0] }}
               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
               className="relative"
            >
              <div className={`absolute inset-0 blur-[120px] rounded-full scale-150 rotate-12 ${theme === 'dark' ? 'bg-red-500/30' : 'bg-red-500/15'}`} />
              <img 
                src={theme === 'dark' ? "/logo_white_text.png" : "/logo_black_text.png"} 
                alt="Fire" 
                className={`opacity-90 filter transition-all duration-1000 w-full h-auto mx-auto ${
                  theme === 'dark' 
                    ? 'max-w-[500px] brightness-125 drop-shadow-[0_0_50px_rgba(239,68,68,0.4)]' 
                    : 'max-w-[380px] contrast-125'
                }`}
                style={{ 
                  objectFit: 'contain'
                }}
              />
              
              {/* Massive Floating Shards around Hero Logo */}
              <motion.div 
                animate={{ y: [-20, 20, -20], rotate: [0, 45, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-red-600/10 blur-[2px]" 
                style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
              />
              <motion.div 
                animate={{ x: [-30, 30, -30], rotate: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 w-32 h-8 bg-red-600/5 blur-[3px]" 
                style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
