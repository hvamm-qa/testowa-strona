import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, TrendingUp, ShieldCheck, Globe, Zap, Users, BarChart3 } from 'lucide-react';
import { Language, translations } from '../i18n';

const reasonsList = (language: Language) => [
  { icon: <Zap className="text-red-500" />, text: language === 'pl' ? "Unikalne gry oparte na silnych emocjach i zapadających w pamięć historiach." : "Unique games based on strong emotions and memorable stories." },
  { icon: <TrendingUp className="text-red-500" />, text: language === 'pl' ? "Elastyczne formy inwestycji: studio, wybrany projekt lub działalność wydawnicza." : "Flexible investment forms: studio, selected project, or publishing." },
  { icon: <Globe className="text-red-500" />, text: language === 'pl' ? "IP o wysokim potencjale adaptacji (film, serial, komiks, książka)." : "IP with high adaptation potential (movie, series, comic, book)." },
  { icon: <BarChart3 className="text-red-500" />, text: language === 'pl' ? "Projekty o globalnym potencjale." : "Projects with global potential." },
  { icon: <ShieldCheck className="text-red-500" />, text: language === 'pl' ? "Transparentność finansowa i partnerskie podejście do inwestorów." : "Financial transparency and partnership approach to investors." },
  { icon: <Users className="text-red-500" />, text: language === 'pl' ? "Wczesny dostęp do dynamicznie rozwijającego się studia z wyraźną wizją i ambicją." : "Early access to a dynamically growing studio with a clear vision and ambition." }
];

import { Theme } from '../App';

interface InvestorsProps {
  language: Language;
  theme: Theme;
}

export default function Investors({ language, theme }: InvestorsProps) {
  const t = translations[language];
  const [isExpanded, setIsExpanded] = useState(false);
  const currentReasons = reasonsList(language);

  const shardPath = 'polygon(15% 10%, 35% 0%, 55% 12%, 75% 2%, 92% 15%, 100% 45%, 94% 72%, 100% 95%, 78% 100%, 52% 92%, 28% 100%, 12% 94%, 0% 78%, 8% 45%, 2% 20%)';

  return (
    <section id="investors" className={`py-32 relative overflow-hidden border-t transition-colors duration-500 ${
      theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2 relative">
             {/* Floating Title Shards */}
             <div className="absolute -top-10 -left-10 w-8 h-8 bg-red-600/10 blur-[2px]" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
             <div className="absolute top-20 -right-5 w-6 h-6 bg-red-600/5 blur-[1px]" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} />
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85] ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {t.investors.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-sm md:text-base leading-relaxed border-l-2 border-red-600 pl-6 space-y-6 tracking-tighter ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              <p>
                {t.investors.desc1}
              </p>
              <p>
                {t.investors.desc2}
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div 
              className={`p-8 border-r-4 border-red-600 backdrop-blur-sm cursor-pointer transition-all rounded-sm border ${
                theme === 'dark' ? 'bg-neutral-900/50 hover:bg-neutral-800 border-neutral-800' : 'bg-white hover:bg-neutral-100 shadow-sm border-neutral-200'
              }`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className={`text-xl md:text-2xl font-black italic uppercase tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {t.investors.whyUs}
                </h3>
                <div className="text-red-500">
                  {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-6 pt-10">
                      {currentReasons.map((reason, index) => (
                        <div key={index} className="flex gap-4 items-start">
                          <div className="mt-1">{reason.icon}</div>
                          <p className={`text-xs leading-relaxed font-black tracking-widest italic ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                          }`}>
                            {reason.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
