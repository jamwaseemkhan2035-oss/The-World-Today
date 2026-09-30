import React from 'react';
import { ArrowUp, Globe, Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenAbout,
  onOpenContact,
  onOpenAdmin,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h2 className="text-2xl font-serif font-extrabold text-white tracking-tight">
                THE WORLD TODAY
              </h2>
              <p className="text-xs uppercase tracking-widest text-red-500 font-semibold mt-1">
                Understand the World. Stay Informed.
              </p>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The World Today is an independent global information platform covering important developments, stories, explainers, technology, AI, science, economy, geopolitics, and major events around the world.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-300">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center transition-colors hover:text-white"
              >
                Fb
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center transition-colors hover:text-white"
              >
                Yt
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center transition-colors hover:text-white"
              >
                Ig
              </a>
              <a
                href="#x"
                aria-label="X"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center transition-colors hover:text-white"
              >
                𝕏
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center transition-colors hover:text-white"
              >
                In
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors"
                >
                  Editorial Principles
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="hover:text-white transition-colors flex items-center gap-1 text-slate-500 hover:text-slate-300"
                >
                  <Shield className="w-3 h-3" />
                  <span>Admin CMS</span>
                </button>
              </li>
            </ul>
          </div>

          {/* News Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
              News
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onSelectCategory('World')}
                  className="hover:text-white transition-colors"
                >
                  World
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Politics')}
                  className="hover:text-white transition-colors"
                >
                  Politics & Geopolitics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Economy')}
                  className="hover:text-white transition-colors"
                >
                  Economy & Markets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Technology')}
                  className="hover:text-white transition-colors"
                >
                  Technology
                </button>
              </li>
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
              More
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onSelectCategory('AI')}
                  className="hover:text-white transition-colors"
                >
                  Artificial Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Science')}
                  className="hover:text-white transition-colors"
                >
                  Science & Space
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Climate')}
                  className="hover:text-white transition-colors"
                >
                  Climate & Environment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Videos')}
                  className="hover:text-white transition-colors"
                >
                  Videos & Explainers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© 2026 The World Today. All rights reserved.</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Use</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Policy</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
