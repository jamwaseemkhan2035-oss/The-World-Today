import React from 'react';
import { Article } from '../types';
import { Telescope, ArrowRight, Atom } from 'lucide-react';

interface ScienceSpaceSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const ScienceSpaceSection: React.FC<ScienceSpaceSectionProps> = ({ articles, onSelectArticle }) => {
  const sciArticles = articles.filter(
    (a) => a.category === 'Science' || a.tags.includes('Astronomy') || a.tags.includes('Biotechnology')
  );

  return (
    <section id="science-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-slate-900 dark:border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">
            <Telescope className="w-3.5 h-3.5" />
            <span>Discoveries & Fundamental Inquiry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
            Science & Space
          </h2>
        </div>

        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>Astrophysics</span>
          <span>·</span>
          <span>Biomedicine</span>
          <span>·</span>
          <span>Cosmology</span>
          <span>·</span>
          <span>Theoretical Physics</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sciArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-950 mb-3 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-3 text-[10px] font-mono text-slate-300">
                  Spectroscopic Archive
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                <span>{article.category}</span>
                <span>·</span>
                <span className="text-slate-500 font-normal font-mono">{article.publishedAt.split('·')[0]}</span>
              </div>

              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono text-[11px]">{article.readTime}</span>
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 flex items-center gap-1">
                Examine Findings <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}

        {/* Science Dispatch Note */}
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-5 bg-gradient-to-br from-indigo-950/20 to-slate-900/10 dark:from-indigo-950/40 dark:to-slate-900/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2">
              <Atom className="w-3.5 h-3.5" />
              <span>Peer-Review Standard</span>
            </div>
            <h4 className="text-base font-serif font-bold text-slate-900 dark:text-white leading-snug">
              Rigorous Empirical Attribution
            </h4>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Every scientific report on The World Today is linked directly to published pre-prints or peer-reviewed literature in journals including Nature, Science, and Astrophysical Journal Letters.
            </p>
          </div>
          <div className="mt-4 text-[11px] font-mono text-slate-400">
            Editorial Protocol § 4.2 · Science Division
          </div>
        </div>
      </div>
    </section>
  );
};
