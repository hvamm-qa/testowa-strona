import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Language, translations } from '../i18n';
import { Theme } from '../App';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  theme: Theme;
}

export default function PrivacyModal({ isOpen, onClose, language, theme }: PrivacyModalProps) {
  const t = translations[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`relative w-full max-h-full flex flex-col p-8 md:p-12 overflow-hidden rounded-sm shadow-2xl border transition-colors duration-500 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200'
            }`}
          >
            <button
              onClick={onClose}
              className={`absolute top-6 right-6 p-2 transition-colors ${
                theme === 'dark' ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-neutral-900'
              }`}
              aria-label={t.privacy.close}
            >
              <X size={32} />
            </button>

            <h2 className={`text-3xl font-black uppercase italic mb-8 border-b border-red-600 pb-4 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              {t.privacy.title}
            </h2>

            <div className={`flex-1 overflow-y-auto pr-4 space-y-10 text-sm leading-relaxed custom-scrollbar ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              <section>
                <h4 className={`font-bold uppercase text-xs mb-4 tracking-widest ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>{t.privacy.cookiesTitle}</h4>
                <p>
                  {t.privacy.cookiesDesc}
                </p>
              </section>

              <section>
                <h4 className={`font-bold uppercase text-xs mb-4 tracking-widest ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>{t.privacy.infoTitle}</h4>
                <ol className="space-y-4 list-decimal pl-5">
                  <li>{t.privacy.info1}</li>
                  <li>{t.privacy.info2}</li>
                  <li>{t.privacy.info3}</li>
                  <li>{t.privacy.info4}</li>
                  <li>{t.privacy.info5}</li>
                  <li>{t.privacy.info6}</li>
                </ol>
              </section>

              <section>
                <h4 className={`font-bold uppercase text-xs mb-4 tracking-widest ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>{t.privacy.retentionTitle}</h4>
                <ol className="space-y-4 list-decimal pl-5">
                  <li>{t.privacy.retention1}</li>
                  <li>{t.privacy.retention2}</li>
                  <li>{t.privacy.retention3}</li>
                </ol>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
