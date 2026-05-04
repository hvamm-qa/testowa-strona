import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import { Language, translations } from '../i18n';

const projects = [
  {
    id: 'oaths',
    title: 'OATHS & ASHES',
    description: 'Monumentalne RPG skupione na wyborach moralnych i konsekwencjach naszych czynów w świecie, który powoli ginie w popiołach.',
    details: 'W Oaths & Ashes gracz wciela się w postać, która musi zjednoczyć zwaśnione rody w obliczu kataklizmu. Każda decyzja wpływa na stan świata i relacje z towarzyszami, tworząc unikalną narrację dla każdego gracza.',
    color: 'border-red-600',
    image: 'https://revivethespark.studio/wp-content/uploads/2025/06/rts_poziom_negatyw.svg'
  },
  {
    id: 'dual',
    title: 'DUAL',
    description: 'Innowacyjna gra akcji z elementami stealth, gdzie gracze operują w dwóch równoległych rzeczywistościach jednocześnie.',
    details: 'Dual wykorzystuje autorski silnik do renderowania dwóch światów naraz. Gracz musi przełączać się między nimi, aby rozwiązywać zagadki środowiskowe i unikać przeciwników, którzy mogą istnieć tylko w jednym z wymiarów.',
    color: 'border-rose-700',
    image: 'https://revivethespark.studio/wp-content/uploads/2025/06/rts_poziom_negatyw.svg'
  }
];

import { Theme } from '../App';

interface ProjectsProps {
  language: Language;
  theme: Theme;
}

export default function Projects({ language, theme }: ProjectsProps) {
  const t = translations[language];
  const [expanded, setExpanded] = useState<string | null>(null);
  const shardPath = 'polygon(15% 12%, 32% 5%, 55% 18%, 78% 0%, 92% 15%, 100% 48%, 95% 75%, 100% 98%, 82% 100%, 52% 92%, 28% 100%, 12% 95%, 0% 75%, 10% 42%, 2% 18%, 8% 5%)';

  const localizedProjects = [
    {
      id: 'oaths',
      title: 'OATHS & ASHES',
      description: language === 'pl' 
        ? 'Monumentalne RPG skupione na wyborach moralnych i konsekwencjach naszych czynów w świecie, który powoli ginie w popiołach.'
        : 'Monumental RPG focused on moral choices and consequences in a world slowly vanishing into ashes.',
      details: language === 'pl'
        ? 'W Oaths & Ashes gracz wciela się w postać, która musi zjednoczyć zwaśnione rody w obliczu kataklizmu. Każda decyzja wpływa na stan świata i relacje z towarzyszami, tworząc unikalną narrację dla każdego gracza.'
        : 'In Oaths & Ashes, the player takes on the role of a character who must unite feuding clans in the face of a cataclysm. Each decision affects the state of the world and relationships with companions, creating a unique narrative for every player.',
      color: 'border-red-600',
      image: (theme: Theme) => theme === 'dark' ? '/logo_white_text.png' : '/logo_black_text.png'
    },
    {
      id: 'dual',
      title: 'DUAL',
      description: language === 'pl'
        ? 'Innowacyjna gra akcji z elementami stealth, gdzie gracze operują w dwóch równoległych rzeczywistościach jednocześnie.'
        : 'Innovative action game with stealth elements, where players operate in two parallel realities simultaneously.',
      details: language === 'pl'
        ? 'Dual wykorzystuje autorski silnik do renderowania dwóch światów naraz. Gracz musi przełączać się między nimi, aby rozwiązywać zagadki środowiskowe i unikać przeciwników, którzy mogą istnieć tylko w jednym z wymiarów.'
        : 'Dual utilizes a proprietary engine to render two worlds at once. The player must switch between them to solve environmental puzzles and avoid enemies that may only exist in one of the dimensions.',
      color: 'border-rose-700',
      image: (theme: Theme) => theme === 'dark' ? '/logo_white_text.png' : '/logo_black_text.png'
    }
  ];

  return (
    <section id="case-study" className={`py-32 relative overflow-hidden border-t transition-colors duration-500 ${
      theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${
              theme === 'dark' ? 'from-neutral-100 to-neutral-500' : 'from-neutral-900 to-neutral-400'
            }`}
          >
            {t.projects.title}
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {localizedProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className={`p-8 border-r-4 ${project.color} backdrop-blur-sm cursor-pointer transition-all rounded-sm flex flex-col h-full ${
                  theme === 'dark' ? 'bg-neutral-900/50 hover:bg-neutral-800' : 'bg-white hover:bg-neutral-100 shadow-sm border border-neutral-200'
                }`}
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              >
                <div className={`mb-6 overflow-hidden rounded-[2px] aspect-[16/8] flex items-center justify-center p-12 ${
                  theme === 'dark' ? 'bg-black' : 'bg-neutral-50 border border-neutral-100'
                }`}>
                   <img 
                    src={project.image(theme)} 
                    alt={project.title}
                    className={`h-full w-auto transition-all duration-700 object-contain ${
                      theme === 'dark' 
                        ? 'opacity-80 group-hover:opacity-100 group-hover:scale-110' 
                        : 'opacity-80 group-hover:opacity-100 group-hover:scale-110 mix-blend-multiply'
                    }`} 
                  />
                </div>
                
                <h3 className={`text-3xl font-black mb-4 italic tracking-tight ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{project.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-1 tracking-tighter opacity-80 italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{project.description}</p>
                
                <div className="flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest italic">
                  <span>{expanded === project.id ? t.projects.hideDetails : t.projects.showDetails}</span>
                  {expanded === project.id ? <Minus size={14} /> : <Plus size={14} />}
                </div>

                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className={`pt-8 text-sm leading-relaxed border-t mt-6 tracking-tighter ${
                        theme === 'dark' ? 'text-neutral-300 border-neutral-800/50' : 'text-neutral-600 border-neutral-200'
                      }`}>
                        {project.details}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-4 relative">
                        <div className="relative group/badge">
                          <div className="px-5 py-2 bg-red-600 text-[10px] text-white font-bold uppercase italic tracking-widest relative z-10"
                               style={{ clipPath: shardPath }}>
                            {t.projects.status}
                          </div>
                          {/* Shard Debris */}
                          <div className="absolute top-[-4px] right-[-2px] w-3 h-3 bg-red-600/60" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 80%)' }} />
                          <div className="absolute -bottom-2 left-4 w-2 h-2 bg-red-600/40" style={{ clipPath: 'polygon(10% 20%, 90% 0, 100% 100%)' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
