import React from 'react';
import { TRENDING_STORIES, ARTICLES_DATA } from '../data/newsData';
import { Article } from '../types';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface TrendingNowProps {
  onSelectArticle: (article: Article) => void;
}

export const TrendingNow: React.FC<TrendingNowProps> = ({ onSelectArticle }) => {
  const handleClick = (id: string) => {
    const art = ARTICLES_DATA.find((a) => a.id === id);
    if (art) onSelectArticle(art);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-red-600 dark:text-red-500" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Trending Now
          </h3>
        </div>
        <span className="text-[10px] font-mono text-slate-400">Past 24 Hours</span>
      </div>

      <div className="space-y-4">
        {TRENDING_STORIES.map((item) => (
          <div
            key={item.rank}
            onClick={() => handleClick(item.id)}
            className="group cursor-pointer flex items-start gap-4 transition-colors"
          >
            {/* Editorial Numbering */}
            <span className="text-2xl sm:text-3xl font-serif font-bold text-slate-300 dark:text-slate-700 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors shrink-0 tabular-nums leading-none pt-0.5">
              {item.rank}
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[10px] uppercase font-semibold text-slate-400 mb-0.5">
                <span className="text-red-600 dark:text-red-400">{item.category}</span>
                <span>·</span>
                <span className="font-mono">{item.readTime}</span>
              </div>

              <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-800 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
