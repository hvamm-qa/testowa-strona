import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Lightbulb, Banknote, Shield, Megaphone, Network } from 'lucide-react';
import { Language, translations } from '../i18n';

const supportItemsList = (language: Language) => [
  { icon: <Lightbulb className="text-red-500" />, text: language === 'pl' ? "Wsparcie przy dopracowaniu i rozwijaniu koncepcji projektu" : "Support in refining and developing project concepts" },
  { icon: <Banknote className="text-red-500" />, text: language === 'pl' ? "Elastyczne modele współfinansowania, dopasowane do skali gry" : "Flexible co-financing models tailored to the game scale" },
  { icon: <Shield className="text-red-500" />, text: language === 'pl' ? "Opieka producencka od doświadczonych specjalistów branży" : "Production oversight from experienced industry specialists" },
  { icon: <Megaphone className="text-red-500" />, text: language === 'pl' ? "Strategiczne planowanie marketingowe oraz wsparcie wydawnicze" : "Strategic marketing planning and publishing support" },
  { icon: <Network className="text-red-500" />, text: language === 'pl' ? "Dostęp do sieci kontaktów i partnerów biznesowych studia" : "Access to the studio\'s network of contacts and business partners" }
];

import { Theme } from '../App';

interface CreatorsProps {
  language: Language;
  theme: Theme;
}

export default function Creators({ language, theme }: CreatorsProps) {
  const t = translations[language];
  const [isExpanded, setIsExpanded] = useState(false);
  const supportItems = supportItemsList(language);

  const shardPath = 'polygon(15% 12%, 35% 2%, 58% 18%, 82% 5%, 95% 15%, 100% 42%, 92% 68%, 100% 95%, 85% 100%, 52% 92%, 25% 100%, 10% 95%, 0% 78%, 12% 48%, 2% 25%, 8% 5%)';

  return (
    <section id="creators" className={`py-32 relative overflow-hidden border-t transition-colors duration-500 ${
      theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-20 items-start">
          <div className="lg:w-1/2 relative">
             {/* Floating Title Shards */}
             <div className="absolute -top-12 -right-10 w-10 h-10 bg-red-600/10 blur-[3px]" style={{ clipPath: 'polygon(10% 0, 100% 70%, 20% 100%)' }} />
             <div className="absolute bottom-0 -left-8 w-5 h-5 bg-red-600/5 blur-[1px]" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 50%)' }} />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85] ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {t.creators.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-sm md:text-base leading-relaxed border-l-2 border-red-700 pl-6 space-y-6 tracking-tighter ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              <p>
                {t.creators.desc1}
              </p>
              <p className={`text-lg font-black italic ${
                theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                {t.creators.quote}
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div 
              className={`p-8 border-r-4 border-red-700 backdrop-blur-sm cursor-pointer transition-all rounded-sm border ${
                theme === 'dark' ? 'bg-neutral-900/50 hover:bg-neutral-800 border-neutral-800' : 'bg-white hover:bg-neutral-100 shadow-sm border-neutral-200'
              }`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className={`text-xl md:text-2xl font-black italic uppercase tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {t.creators.visionTitle}
                </h3>
                <div className="text-red-600">
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
                    <div className="flex flex-col gap-6 pt-10">
                      {supportItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-5 group/item">
                          <div className={`transition-colors ${
                            theme === 'dark' ? 'text-neutral-500 group-hover/item:text-red-600' : 'text-neutral-400 group-hover/item:text-red-500'
                          }`}>
                            {item.icon}
                          </div>
                          <span className={`text-xs transition-colors font-black tracking-widest italic ${
                            theme === 'dark' ? 'text-neutral-400 group-hover/item:text-neutral-200' : 'text-neutral-500 group-hover/item:text-neutral-800'
                          }`}>
                            {item.text}
                          </span>
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
