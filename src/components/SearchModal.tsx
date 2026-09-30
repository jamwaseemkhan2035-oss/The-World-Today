import React, { useState, useMemo } from 'react';
import { Search, X, Clock, ArrowRight, Filter, AlertCircle } from 'lucide-react';
import { Article, CategoryType } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

const SEARCH_FILTERS = [
  'All',
  'World',
  'Politics',
  'Economy',
  'Technology',
  'AI',
  'Science',
  'Climate',
  'Geopolitics',
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isSearching, setIsSearching] = useState(false);

  const results = useMemo(() => {
    if (!query.trim() && selectedFilter === 'All') return articles;

    const lowerQ = query.toLowerCase().trim();

    return articles.filter((art) => {
      const matchesFilter =
        selectedFilter === 'All' || art.category === selectedFilter;
      if (!matchesFilter) return false;

      if (!lowerQ) return true;

      const matchesText =
        art.title.toLowerCase().includes(lowerQ) ||
        art.summary.toLowerCase().includes(lowerQ) ||
        art.tags.some((t) => t.toLowerCase().includes(lowerQ)) ||
        art.author.toLowerCase().includes(lowerQ);

      return matchesText;
    });
  }, [query, selectedFilter, articles]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#090f1d] w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        {/* Search Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsSearching(true);
                setTimeout(() => setIsSearching(false), 200);
              }}
              placeholder="Search The World Today by keywords, events, policy, or topics..."
              className="w-full pl-11 pr-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors"
            />
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mr-1 shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Filters:
          </span>
          {SEARCH_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
                selectedFilter === cat
                  ? 'bg-red-600 text-white font-medium'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          {isSearching ? (
            <div className="py-12 flex flex-col items-center justify-center text-slate-400">
              <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin mb-2" />
              <span className="text-xs">Searching digital archives...</span>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <AlertCircle className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <h4 className="text-base font-serif font-bold text-slate-800 dark:text-slate-200">
                No matching articles found
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                No dispatches found for &ldquo;{query}&rdquo; in category {selectedFilter}. Try searching for broader terms like &ldquo;Geneva&rdquo;, &ldquo;AI&rdquo;, &ldquo;Inflation&rdquo;, or &ldquo;Climate&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs font-mono text-slate-400 pb-1">
                Showing {results.length} dispatch{results.length === 1 ? '' : 'es'}
              </div>

              {results.map((art) => (
                <div
                  key={art.id}
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="group cursor-pointer p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="aspect-[16/10] w-full sm:w-44 shrink-0 rounded-lg overflow-hidden bg-slate-900">
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      <span className="text-red-600 dark:text-red-400">{art.category}</span>
                      <span>·</span>
                      <span className="font-mono">{art.publishedAt.split('·')[0]}</span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                      {art.title}
                    </h4>

                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {art.summary}
                    </p>

                    <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono">{art.readTime}</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-red-600 flex items-center gap-1">
                        Read Story <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
