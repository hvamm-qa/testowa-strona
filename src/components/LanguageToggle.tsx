
import { motion } from 'motion/react';
import { Language } from '../i18n';

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

export default function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <div 
      className="relative flex items-center bg-neutral-900 border border-neutral-800 p-1 cursor-pointer w-20 h-8 rounded-sm overflow-hidden"
      onClick={() => onToggle(language === 'pl' ? 'en' : 'pl')}
    >
      <div className={`flex-1 flex items-center justify-center z-10 text-[10px] font-black tracking-tighter transition-colors duration-300 ${language === 'pl' ? 'text-white' : 'text-white/40'}`}>
        PL
      </div>
      <div className={`flex-1 flex items-center justify-center z-10 text-[10px] font-black tracking-tighter transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-white/40'}`}>
        EN
      </div>
      
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-red-600 rounded-sm flex items-center justify-center"
        animate={{ x: language === 'pl' ? 0 : '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
      </motion.div>
    </div>
  );
}
