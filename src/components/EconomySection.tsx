import React from 'react';
import { Article } from '../types';
import { TrendingUp, BarChart3, ArrowRight, DollarSign } from 'lucide-react';

interface EconomySectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const EconomySection: React.FC<EconomySectionProps> = ({ articles, onSelectArticle }) => {
  const econArticles = articles.filter(
    (a) => a.category === 'Economy' || a.tags.includes('Central Banks') || a.tags.includes('Inflation')
  );

  return (
    <section id="economy-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-slate-900 dark:border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Macroeconomics, Trade & Fiscal Trends</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
            Economy & Business
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span>Equities · Fixed Income · Commodities · Currencies</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {econArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group cursor-pointer flex flex-col justify-between border-t border-slate-200 dark:border-slate-800 pt-4"
          >
            <div>
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900 mb-3">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                <span className="text-emerald-600 dark:text-emerald-400">Global Markets</span>
                <span>·</span>
                <span className="font-normal font-mono">{article.publishedAt.split('·')[0]}</span>
              </div>

              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono text-[11px]">{article.readTime}</span>
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 flex items-center gap-1">
                Read Analysis <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}

        {/* Informational Market Focus Card */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-slate-50/50 dark:bg-slate-900/40 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-slate-500" />
              <span>Monetary Policy Briefing</span>
            </div>
            <h4 className="text-base font-serif font-bold text-slate-900 dark:text-white">
              Global Central Bank Digest: Sovereign Spread Compendium
            </h4>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Synthesized monthly analysis of benchmark borrowing rates, reserve ratios, and trade-weighted currency fluctuations across 24 leading economies.
            </p>

            <div className="mt-4 space-y-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">G20 Median Headline Inflation:</span>
                <span className="font-semibold text-slate-900 dark:text-white">2.4%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">Global Shipping Container Index:</span>
                <span className="font-semibold text-slate-900 dark:text-white">-4.2% MoM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Clean Energy Capital Flows:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">+$310B YTD</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-[10px] text-slate-400 italic">
            *All financial figures are provided for educational and analytical purposes only.
          </div>
        </div>
      </div>
    </section>
  );
};
