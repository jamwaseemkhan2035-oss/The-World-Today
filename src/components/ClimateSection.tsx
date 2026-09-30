import React from 'react';
import { Article } from '../types';
import { Wind, ArrowRight, ShieldCheck, Thermometer } from 'lucide-react';

interface ClimateSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const ClimateSection: React.FC<ClimateSectionProps> = ({ articles, onSelectArticle }) => {
  const climateArticles = articles.filter(
    (a) => a.category === 'Climate' || a.tags.includes('Water Security') || a.tags.includes('Ecosystems')
  );

  const mainClimate = climateArticles[0];
  const secondaryClimate = climateArticles.slice(1, 3);

  return (
    <section id="climate-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-slate-900 dark:border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
            <Wind className="w-3.5 h-3.5" />
            <span>Planetary Systems & Decarbonization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
            Climate & Environment
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Cryosphere</span>
          <span>·</span>
          <span>Oceanic Acidification</span>
          <span>·</span>
          <span>Renewables</span>
          <span>·</span>
          <span>Biodiversity</span>
        </div>
      </div>

      {/* Large Featured Story with Full-Width Editorial Hero Presentation */}
      {mainClimate && (
        <div
          onClick={() => onSelectArticle(mainClimate)}
          className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900 text-white relative shadow-lg mb-8"
        >
          <div className="relative aspect-[21/9] min-h-[360px] w-full overflow-hidden">
            <img
              src={mainClimate.image}
              alt={mainClimate.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                <span>{mainClimate.category} SPECIAL REPORT</span>
                <span>·</span>
                <span className="font-mono text-slate-300 font-normal">{mainClimate.publishedAt}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                {mainClimate.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-200 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                {mainClimate.summary}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
                <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                  <span>{mainClimate.readTime}</span>
                  <span>·</span>
                  <span>Field Telemetry Verified</span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  <span>Read Full Environmental Report</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Secondary Climate Stories */}
      {secondaryClimate.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryClimate.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectArticle(story)}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-400 dark:hover:border-slate-700 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  <span className="text-emerald-600 dark:text-emerald-400">{story.category}</span>
                  <span>·</span>
                  <span className="font-mono text-slate-400">{story.publishedAt.split('·')[0]}</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {story.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[11px]">{story.readTime}</span>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 flex items-center gap-1">
                  Read Report <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
