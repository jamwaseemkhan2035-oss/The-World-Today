import React, { useState } from 'react';
import { Article, RegionType } from '../types';
import { ArrowRight, Globe2, Clock } from 'lucide-react';

interface WorldNewsSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onViewAllWorld: () => void;
}

const REGIONS: (RegionType | 'All')[] = [
  'All',
  'Asia',
  'Europe',
  'Middle East',
  'Africa',
  'North America',
  'South America',
  'Oceania',
];

export const WorldNewsSection: React.FC<WorldNewsSectionProps> = ({
  articles,
  onSelectArticle,
  onViewAllWorld,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionType | 'All'>('All');

  const filteredArticles = articles.filter((art) => {
    if (selectedRegion === 'All') return true;
    return art.region === selectedRegion;
  });

  return (
    <section id="world-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 mb-6 border-b border-slate-900 dark:border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-red-600 dark:text-red-400 mb-1">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Regional Dispatches</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
            World News
          </h2>
        </div>

        {/* Regional Filter Buttons (Segmented interactive controls) */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {REGIONS.map((region) => {
            const isActive = selectedRegion === region;
            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Grid */}
      {filteredArticles.length === 0 ? (
        <div className="py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
          No dispatches currently listed for {selectedRegion}. View all regional news.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.slice(0, 6).map((art) => (
            <article
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900 mb-3">
                  <img
                    src={art.image}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  <span className="text-red-600 dark:text-red-400">{art.region || art.category}</span>
                  <span>·</span>
                  <span className="font-normal normal-case flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.publishedAt.split('·')[0]}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="mt-3 pt-2 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1 group-hover:text-red-600">
                <span>Read Dispatch</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </article>
          ))}
        </div>
      )}

      {/* View All World News Button */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-850 flex justify-center">
        <button
          onClick={onViewAllWorld}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-lg transition-all"
        >
          <span>View All World News</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
