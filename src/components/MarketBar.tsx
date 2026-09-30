import React from 'react';
import { MARKET_DATA } from '../data/newsData';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';

export const MarketBar: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0b1220] border-b border-slate-200/80 dark:border-slate-800/80 py-2 px-4 sm:px-6 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2">
        {/* Market Strip */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-0.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 shrink-0">
            MARKETS
          </div>
          {MARKET_DATA.map((item) => (
            <div key={item.symbol} className="flex items-center gap-2 shrink-0 text-xs">
              <span className="font-semibold text-slate-800 dark:text-slate-200">{item.symbol}</span>
              <span className="font-mono tabular-nums text-slate-600 dark:text-slate-400">{item.value}</span>
              <span
                className={`font-mono text-[11px] flex items-center tabular-nums font-medium ${
                  item.isPositive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="w-3 h-3 mr-0.5 inline" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-0.5 inline" />
                )}
                {item.change}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-500 shrink-0">
          <Info className="w-3 h-3" />
          <span>Informational only · Data may be delayed up to 15 min</span>
        </div>
      </div>
    </div>
  );
};
