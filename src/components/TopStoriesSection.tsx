import React from 'react';
import { Article } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

interface TopStoriesSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const TopStoriesSection: React.FC<TopStoriesSectionProps> = ({ articles, onSelectArticle }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-900 dark:border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 dark:text-white tracking-tight">
            Top Stories
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Key developments curated by our international editorial desk
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {articles.slice(0, 6).map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group flex flex-col justify-between cursor-pointer rounded-lg bg-transparent transition-all"
          >
            <div>
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900 mb-3.5">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Zero-Pill Unboxed Metadata */}
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1.5">
                <span>{article.category}</span>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal normal-case flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.publishedAt.split('·')[0]}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Read More button */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">{article.readTime}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectArticle(article);
                }}
                className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400 flex items-center gap-1"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
