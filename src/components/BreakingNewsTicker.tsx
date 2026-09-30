import React, { useState } from 'react';
import { BREAKING_HEADLINES } from '../data/newsData';
import { ChevronRight, ChevronLeft, Pause, Play } from 'lucide-react';

interface BreakingNewsTickerProps {
  onSelectHeadline: (articleId?: string) => void;
}

export const BreakingNewsTicker: React.FC<BreakingNewsTickerProps> = ({ onSelectHeadline }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const headlines = BREAKING_HEADLINES;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % headlines.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + headlines.length) % headlines.length);
  };

  return (
    <div className="bg-slate-900 text-white border-b border-slate-800 py-2 px-4 sm:px-6 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Indicator & Ticker Stream */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="flex items-center gap-1.5 shrink-0 bg-red-600/90 text-white text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>BREAKING</span>
          </div>

          {/* Single active marquee headline for mobile + desktop */}
          <div className="min-w-0 flex-1 flex items-center gap-2 overflow-hidden">
            <button
              onClick={() => onSelectHeadline(headlines[currentIndex].articleId)}
              className="text-left text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:underline truncate transition-colors"
            >
              <span className="font-semibold text-slate-400 mr-2">[{headlines[currentIndex].category}]</span>
              <span>{headlines[currentIndex].text}</span>
            </button>
            <span className="hidden md:inline-block text-[11px] font-mono text-slate-400 shrink-0 tabular-nums">
              · {headlines[currentIndex].timestamp}
            </span>
          </div>
        </div>

        {/* Ticker Controls */}
        <div className="flex items-center gap-1 shrink-0 text-slate-400">
          <span className="text-[11px] font-mono tabular-nums mr-1 hidden sm:inline text-slate-500">
            {currentIndex + 1}/{headlines.length}
          </span>
          <button
            onClick={handlePrev}
            className="p-1 hover:text-white hover:bg-slate-800 rounded transition-colors"
            aria-label="Previous breaking headline"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 hover:text-white hover:bg-slate-800 rounded transition-colors"
            aria-label="Next breaking headline"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
