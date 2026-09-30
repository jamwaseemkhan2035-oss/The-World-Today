import React from 'react';
import { Article } from '../types';
import { Scale, ArrowRight, ShieldCheck } from 'lucide-react';

interface GeopoliticsSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const GeopoliticsSection: React.FC<GeopoliticsSectionProps> = ({ articles, onSelectArticle }) => {
  const geoArticles = articles.filter(
    (a) => a.category === 'Geopolitics' || a.category === 'Politics' || a.tags.includes('Diplomacy')
  );

  const mainStory = geoArticles[0];
  const sideStories = geoArticles.slice(1, 4);

  return (
    <section id="geopolitics-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-900 dark:border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
            <Scale className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            <span>Diplomatic & Strategic Affairs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
            Geopolitics
          </h2>
        </div>
        <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden sm:inline">
          Neutral Informational Reporting
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Strategic Dossier */}
        {mainStory && (
          <div
            onClick={() => onSelectArticle(mainStory)}
            className="lg:col-span-7 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-900 mb-4">
                <img
                  src={mainStory.image}
                  alt={mainStory.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                <span className="text-red-600 dark:text-red-400 uppercase tracking-wider">
                  International Accord
                </span>
                <span>·</span>
                <span className="font-normal font-mono text-[11px]">{mainStory.publishedAt}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-tight">
                {mainStory.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                {mainStory.summary}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Multilateral Documentation
              </span>
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 flex items-center gap-1">
                Full Briefing <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        )}

        {/* Side Geopolitical Briefs */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
          {sideStories.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectArticle(story)}
              className="py-3.5 first:pt-0 group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                <span className="text-red-600 dark:text-red-400">{story.category}</span>
                <span>·</span>
                <span className="font-normal normal-case">{story.publishedAt.split('·')[0]}</span>
              </div>

              <h4 className="text-base font-serif font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                {story.title}
              </h4>

              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {story.summary}
              </p>

              <div className="mt-2 text-xs font-medium text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white flex items-center gap-1">
                <span>Examine dossier</span>
                <ArrowRight className="w-3 h-3 inline" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
