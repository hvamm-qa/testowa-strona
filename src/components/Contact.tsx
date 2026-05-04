import { motion } from 'motion/react';
import { Mail, MapPin, User, Send } from 'lucide-react';
import { Language, translations } from '../i18n';

import { Theme } from '../App';

interface ContactProps {
  language: Language;
  theme: Theme;
  onOpenPrivacy: () => void;
}

export default function Contact({ language, theme, onOpenPrivacy }: ContactProps) {
  const currentYear = new Date().getFullYear();
  const t = translations[language];
  const shardPath = 'polygon(12% 15%, 35% 2%, 58% 18%, 82% 5%, 95% 15%, 100% 42%, 92% 68%, 100% 95%, 85% 100%, 52% 92%, 25% 100%, 10% 95%, 0% 78%, 12% 48%, 2% 25%, 8% 5%)';

  return (
    <footer id="footer" className={`border-t relative pt-32 pb-12 overflow-hidden transition-colors duration-500 ${
      theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-100 border-neutral-200'
    }`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-end">
          <div className="lg:col-span-12 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-7xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.8] mb-12 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {t.contact.title} <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600">{t.contact.spark}</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 space-y-12 pb-12">
            <div className="border-l-2 border-red-600 pl-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-red-400 font-black mb-2">{t.contact.location}</h4>
              <p className={`font-bold ${theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}`}>ul. Ignacego Mościckiego 1, 24-110 Puławy</p>
            </div>
            <div className="border-l-2 border-red-600 pl-6">
               <h4 className="text-[10px] uppercase tracking-[0.3em] text-red-400 font-black mb-2">{t.contact.email}</h4>
               <a href="mailto:contact@revivethespark.studio" className={`font-bold hover:text-red-500 transition-colors ${
                 theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
               }`}>
                contact@revivethespark.studio
              </a>
            </div>
            <div className="border-l-2 border-red-600 pl-6">
               <h4 className="text-[10px] uppercase tracking-[0.3em] text-red-400 font-black mb-2">{t.contact.lead}</h4>
               <p className={`font-bold ${theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}`}>Dawid Ciślak</p>
            </div>
          </div>

          <div className={`lg:col-span-7 border p-8 md:p-12 shadow-2xl relative transition-colors duration-500 ${
            theme === 'dark' ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-400 border-neutral-500'
          }`}>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`border-b focus-within:border-red-500 transition-colors ${
                  theme === 'dark' ? 'border-neutral-700' : 'border-neutral-900'
                }`}>
                  <input type="text" placeholder={t.contact.formName} className={`w-full bg-transparent py-4 text-xs font-black tracking-widest focus:outline-none ${
                    theme === 'dark' ? 'text-white placeholder:text-neutral-500' : 'text-black placeholder:text-neutral-800'
                  }`} />
                </div>
                <div className={`border-b focus-within:border-red-500 transition-colors ${
                  theme === 'dark' ? 'border-neutral-700' : 'border-neutral-900'
                }`}>
                  <input type="email" placeholder={t.contact.formEmail} className={`w-full bg-transparent py-4 text-xs font-black tracking-widest focus:outline-none ${
                    theme === 'dark' ? 'text-white placeholder:text-neutral-500' : 'text-black placeholder:text-neutral-800'
                  }`} />
                </div>
              </div>
              <div className={`border-b focus-within:border-red-500 transition-colors ${
                theme === 'dark' ? 'border-neutral-700' : 'border-neutral-900'
              }`}>
                <textarea rows={3} placeholder={t.contact.formMessage} className={`w-full bg-transparent py-4 text-xs font-black tracking-widest focus:outline-none resize-none ${
                    theme === 'dark' ? 'text-white placeholder:text-neutral-500' : 'text-black placeholder:text-neutral-800'
                  }`} />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="hidden peer" />
                  <div className={`w-4 h-4 border peer-checked:bg-red-500 peer-checked:border-red-500 transition-all rotate-12 ${
                    theme === 'dark' ? 'border-neutral-600' : 'border-neutral-900'
                  }`} />
                  <span className={`text-[10px] font-bold tracking-widest ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-black'
                  }`}>
                    {t.contact.formConsent} <button type="button" onClick={onOpenPrivacy} className={`transition-colors italic underline underline-offset-4 ${
                      theme === 'dark' ? 'text-neutral-300 hover:text-red-500' : 'text-black hover:text-red-600'
                    }`}>{t.contact.privacyPolicy}</button>
                  </span>
                </label>

                <button 
                  className="px-14 py-6 bg-red-600 hover:bg-red-500 font-black uppercase text-[12px] tracking-[0.3em] transition-all relative block overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.3)] group border-y border-white/10"
                  style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)' }}
                >
                  <span className="relative z-10 text-white italic drop-shadow-md">{t.contact.send}</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                  {/* Small Shards around button */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500/30 rotate-45" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-red-700/30 rotate-45" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t ${
          theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-black uppercase tracking-[0.5em] italic ${
              theme === 'dark' ? 'text-neutral-700' : 'text-neutral-400'
            }`}>REVIVE. REBEL. REPEAT.</span>
          </div>

          <div className="flex items-center gap-8">
            <button onClick={onOpenPrivacy} className={`text-[10px] font-bold uppercase tracking-widest hover:text-red-500 transition-colors ${
              theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
            }`}>
              {t.privacy.title}
            </button>
            <span className={`text-[10px] font-bold tracking-widest ${
              theme === 'dark' ? 'text-neutral-800' : 'text-neutral-300'
            }`}>
              © {currentYear} REVIVE THE SPARK STUDIO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
