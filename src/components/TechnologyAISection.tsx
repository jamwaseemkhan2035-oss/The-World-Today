import React from 'react';
import { Article } from '../types';
import { Cpu, ArrowRight, Sparkles, Terminal, ShieldAlert } from 'lucide-react';

interface TechnologyAISectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const TechnologyAISection: React.FC<TechnologyAISectionProps> = ({ articles, onSelectArticle }) => {
  const techArticles = articles.filter(
    (a) => a.category === 'AI' || a.category === 'Technology'
  );

  const aiFeatured = techArticles.find((a) => a.category === 'AI') || techArticles[0];
  const sideTech = techArticles.filter((a) => a.id !== aiFeatured?.id);

  return (
    <section id="tech-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-8 border-b border-slate-900 dark:border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>Applied Frontier Technologies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
            Technology & AI
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <span>AI Systems</span>
          <span>·</span>
          <span>Robotics</span>
          <span>·</span>
          <span>Quantum Physics</span>
          <span>·</span>
          <span>Cybersecurity</span>
          <span>·</span>
          <span>Semiconductors</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Large AI Featured Card (7 cols) */}
        {aiFeatured && (
          <div
            onClick={() => onSelectArticle(aiFeatured)}
            className="lg:col-span-7 group cursor-pointer rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800"
          >
            {/* Ambient subtle optical radial glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-950 mb-6">
                <img
                  src={aiFeatured.image}
                  alt={aiFeatured.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono tracking-wider text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>SPECIAL DOSSIER: FRONTIER AI</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <span>{aiFeatured.category}</span>
                <span>·</span>
                <span className="font-normal font-mono text-slate-400">{aiFeatured.publishedAt}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {aiFeatured.title}
              </h3>

              <p className="mt-3 text-sm text-slate-300 line-clamp-3 leading-relaxed font-sans">
                {aiFeatured.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">{aiFeatured.readTime}</span>
              <span className="font-semibold text-cyan-300 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                <span>Explore Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        )}

        {/* Smaller Tech Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {sideTech.map((tech) => (
            <div
              key={tech.id}
              onClick={() => onSelectArticle(tech)}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-700 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-500 mb-1.5">
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{tech.category}</span>
                  <span className="font-mono">{tech.readTime}</span>
                </div>
                <h4 className="text-base font-serif font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {tech.title}
                </h4>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {tech.summary}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[10px]">{tech.publishedAt.split('·')[0]}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center gap-1">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}

          {/* Futuristic Curated Tech Wire Box */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-600" />
              <span>Technology Radar · Verification Status</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Our engineering editors independently evaluate whitepapers, benchmark replication sets, and open-weights releases to provide unvarnished technical assessments free from commercial spin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
