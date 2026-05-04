import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Language, translations } from '../i18n';
import { Theme } from '../App';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default function Header({ language, setLanguage, theme, setTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  const ThemeToggle = () => (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`p-2 rounded-sm border transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-red-600' 
          : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-red-500 shadow-sm'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );

  const navItems = [
    { name: t.nav.projects, href: '#case-study' },
    { name: t.nav.investors, href: '#investors' },
    { name: t.nav.creators, href: '#creators' },
    { name: t.nav.contact, href: '#footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
        scrolled 
          ? (theme === 'dark' ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900' : 'bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm')
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-12 h-full flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group h-full py-3">
          <img 
            src={theme === 'dark' ? "/logo_white_text.png" : "/logo_black_text.png"} 
            alt="Revive the Spark" 
            className={`transition-all object-contain h-full w-auto origin-left ${
              theme === 'dark' 
                ? 'scale-[1.8] group-hover:scale-[1.9]' 
                : 'scale-100 group-hover:scale-110 mix-blend-multiply'
            }`}
            style={{ marginLeft: '-4px' }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <ThemeToggle />
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[10px] font-black tracking-widest transition-colors uppercase ${
                theme === 'dark' ? 'text-neutral-400 hover:text-red-500' : 'text-neutral-600 hover:text-red-600'
              }`}
            >
              {item.name}
            </a>
          ))}
          <LanguageToggle language={language} onToggle={setLanguage} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle language={language} onToggle={setLanguage} />
          <button 
            className={`transition-colors ${theme === 'dark' ? 'text-neutral-200 hover:text-red-500' : 'text-neutral-800 hover:text-red-600'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className={`lg:hidden overflow-hidden border-b transition-colors duration-500 ${
          theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-white border-neutral-200'
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-2xl font-black italic tracking-tighter transition-colors uppercase ${
                theme === 'dark' ? 'text-neutral-300 hover:text-red-500' : 'text-neutral-800 hover:text-red-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
