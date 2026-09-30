import React from 'react';
import { Article } from '../types';
import { Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  leadStory: Article;
  secondaryStories: Article[];
  onSelectArticle: (article: Article) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  leadStory,
  secondaryStories,
  onSelectArticle,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 border-b border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Side: Large Featured Lead Story (8 cols) */}
        <div className="lg:col-span-8 flex flex-col group cursor-pointer" onClick={() => onSelectArticle(leadStory)}>
          {/* Main Hero Visual with scrim overlay protection */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-900 shadow-md">
            <img
              src={leadStory.image}
              alt={leadStory.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              loading="eager"
            />
            {/* Subtle editorial gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* In-image caption pill badge avoided, clean bottom caption */}
            {leadStory.imageCaption && (
              <div className="absolute bottom-3 left-4 right-4 text-[11px] text-slate-300 font-sans line-clamp-1 opacity-90 drop-shadow">
                {leadStory.imageCaption}
              </div>
            )}
          </div>

          {/* Lead Story Editorial Metadata & Text (Strictly Zero-Pill) */}
          <div className="mt-4 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              <span>{leadStory.category}</span>
              <span className="text-slate-400 dark:text-slate-600 font-normal">·</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium normal-case flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {leadStory.publishedAt}
              </span>
              <span className="text-slate-400 dark:text-slate-600 font-normal">·</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium normal-case">
                {leadStory.readTime}
              </span>
            </div>

            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 dark:text-white leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {leadStory.title}
            </h2>

            <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
              {leadStory.summary}
            </p>

            <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-850">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Verified by {leadStory.author} · {leadStory.sources.length} Primary Sources</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectArticle(leadStory);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 hover:underline transition-colors"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: 3 Stacked Secondary Featured Stories (4 cols) */}
        <div className="lg:col-span-4 flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
          <div className="pb-3 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Featured Analysis & Reports
            </h3>
            <span className="text-[11px] font-mono text-slate-400">Updated Hourly</span>
          </div>

          {secondaryStories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => onSelectArticle(story)}
              className="py-4 first:pt-3 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <span className="text-red-600 dark:text-red-400">{story.category}</span>
                  <span>·</span>
                  <span className="font-normal normal-case">{story.publishedAt.split('·')[0]}</span>
                </div>

                <h4 className="mt-1.5 text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {story.title}
                </h4>

                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono text-[11px]">{story.readTime}</span>
                <span className="font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-slate-700 dark:text-slate-300">
                  Read <ArrowRight className="w-3 h-3 inline" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
