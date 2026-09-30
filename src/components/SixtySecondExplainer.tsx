import React from 'react';
import { SIXTY_SECOND_EXPLAINERS } from '../data/newsData';
import { ShortExplainer } from '../types';
import { Zap, Play, Eye } from 'lucide-react';

interface SixtySecondExplainerProps {
  onSelectExplainer: (explainer: ShortExplainer) => void;
}

export const SixtySecondExplainer: React.FC<SixtySecondExplainerProps> = ({ onSelectExplainer }) => {
  return (
    <section id="explainers-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-slate-900 dark:border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-1">
            <Zap className="w-3.5 h-3.5 fill-amber-500" />
            <span>Fast-Form Mobile Vertical Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
            The World in 60 Seconds
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Complex global questions deconstructed in under one minute.
        </p>
      </div>

      {/* Horizontal Scrollable Feed on Mobile, 5-Card Responsive Grid on Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto no-scrollbar py-2">
        {SIXTY_SECOND_EXPLAINERS.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectExplainer(item)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-slate-900 text-white relative aspect-[9/15] flex flex-col justify-between p-3.5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Background Thumbnail with Scrim */}
            <img
              src={item.thumbnail}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

            {/* Top Bar: Category & Duration */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-slate-950/60 backdrop-blur-sm px-2 py-0.5 rounded">
                {item.category}
              </span>
              <span className="text-[10px] font-mono bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-white">
                {item.duration}
              </span>
            </div>

            {/* Center Play Watermark */}
            <div className="relative z-10 self-center my-auto">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10">
              <div className="flex items-center gap-1 text-[10px] text-slate-300 font-mono mb-1">
                <Eye className="w-3 h-3 text-slate-400" />
                <span>{item.views} views</span>
              </div>

              <h4 className="text-xs sm:text-sm font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                {item.title}
              </h4>

              <p className="mt-1 text-[11px] text-slate-300 line-clamp-2 leading-tight">
                {item.shortExplanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
