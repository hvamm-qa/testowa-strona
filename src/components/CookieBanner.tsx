import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { Language, translations } from '../i18n';

import { Theme } from '../App';

interface CookieBannerProps {
  language: Language;
  theme: Theme;
}

export default function CookieBanner({ language, theme }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language];
  const shardPath = 'polygon(15% 8%, 45% 2%, 72% 12%, 95% 5%, 100% 42%, 88% 78%, 95% 98%, 68% 100%, 35% 92%, 12% 100%, 0 75%, 10% 38%, 2% 12%)';

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] w-full max-w-xl px-6"
        >
          <div className={`${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200'
          } border p-6 md:p-8 shadow-2xl backdrop-blur-xl rounded-sm transition-colors duration-500`}>
            <h3 className={`${theme === 'dark' ? 'text-white' : 'text-neutral-900'} font-black italic uppercase text-lg mb-2 tracking-tight`}>{t.cookies.title}</h3>
            <p className={`${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'} text-[10px] leading-relaxed mb-6 font-medium uppercase tracking-wider`}>
               {t.cookies.text}
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleAccept}
                className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase text-[10px] tracking-widest transition-all relative group overflow-hidden"
                style={{ clipPath: shardPath }}
              >
                <span className="relative z-10 italic">{t.cookies.accept}</span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
