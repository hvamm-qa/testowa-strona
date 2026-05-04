/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Investors from './components/Investors';
import Creators from './components/Creators';
import Contact from './components/Contact';
import PrivacyModal from './components/PrivacyModal';
import CookieBanner from './components/CookieBanner';
import { Language, translations } from './i18n';

export type Theme = 'dark' | 'light';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('pl');
  const [theme, setTheme] = useState<Theme>('dark');

  // Set document title and update meta
  useEffect(() => {
    document.title = "Revive the Spark";
  }, []);

  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL without jump
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className={`font-sans selection:bg-red-600 selection:text-white transition-colors duration-500 ${
      theme === 'dark' ? 'bg-neutral-950 text-slate-200' : 'bg-neutral-50 text-neutral-900'
    }`}>
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        theme={theme} 
        setTheme={setTheme} 
      />
      
      <main>
        <Hero language={language} theme={theme} />
        
        {/* Banner Image Section with Slanted Transition */}
        <section className={`${theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-50'} py-0 px-0 transition-colors duration-500 relative z-10 -mt-20`}>
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className={`relative aspect-[21/9] overflow-hidden shadow-2xl ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}
              style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' }}
            >
              <img 
                src="/regenerated_image_1777464380713.webp" 
                alt="Revive. Rebel. Repeat." 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${
                theme === 'dark' ? 'from-neutral-950/80 via-transparent to-neutral-950/80' : 'from-white/80 via-transparent to-white/80'
              }`} />
            </motion.div>
          </div>
        </section>

        <Projects language={language} theme={theme} />
        <Investors language={language} theme={theme} />
        <Creators language={language} theme={theme} />
      </main>

      <Contact language={language} theme={theme} onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      <PrivacyModal 
        language={language}
        theme={theme}
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
      
      <CookieBanner language={language} theme={theme} />
    </div>
  );
}

