import React, { useState } from 'react';
import { Search, Moon, Sun, Menu, X, Globe, Shield, ChevronDown } from 'lucide-react';
import { CategoryType } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
  onOpenAdmin: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

const CATEGORIES: { label: string; value: string }[] = [
  { label: 'Home', value: 'Home' },
  { label: 'World', value: 'World' },
  { label: 'Politics', value: 'Politics' },
  { label: 'Economy', value: 'Economy' },
  { label: 'Technology', value: 'Technology' },
  { label: 'AI', value: 'AI' },
  { label: 'Science', value: 'Science' },
  { label: 'Climate', value: 'Climate' },
  { label: 'Videos', value: 'Videos' },
  { label: 'Explainers', value: 'Explainers' },
];

const LANGUAGES = [
  { code: 'EN', name: 'English (Global)' },
  { code: 'FR', name: 'Français' },
  { code: 'ES', name: 'Español' },
  { code: 'DE', name: 'Deutsch' },
  { code: 'AR', name: 'العربية' },
  { code: 'JA', name: '日本語' },
];

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenSubscribe,
  onOpenAdmin,
  onOpenAbout,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  const currentDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  const handleCategoryClick = (cat: string) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      {/* Top Utility Ribbon */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/60 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-mono tabular-nums text-slate-600 dark:text-slate-300">{currentDate}</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Global Digital Edition
          </span>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={onOpenAbout}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            About Us
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Contact & Tips
          </button>
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
          >
            <Shield className="w-3.5 h-3.5 text-slate-500" />
            <span>Editorial CMS</span>
          </button>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Mobile Hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Wordmark Logo */}
          <button
            onClick={() => handleCategoryClick('Home')}
            className="text-left group focus:outline-none"
          >
            <h1 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight text-slate-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
              THE WORLD TODAY
            </h1>
            <p className="hidden sm:block text-[11px] tracking-widest uppercase font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
              Understand the World. Stay Informed.
            </p>
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
            aria-label="Search articles"
          >
            <Search className="w-4 h-4" />
            <span className="hidden md:inline text-xs font-medium">Search</span>
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
              aria-label="Select language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{selectedLang}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Select Edition
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800/60 ${
                      selectedLang === lang.code
                        ? 'text-red-600 font-semibold dark:text-red-400'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>{lang.name}</span>
                    <span className="font-mono text-[10px] text-slate-400">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Subscribe CTA */}
          <button
            onClick={onOpenSubscribe}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Editorial Horizontal Category Navigation */}
      <nav className="border-t border-slate-100 dark:border-slate-800/70 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 sm:gap-2 py-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => handleCategoryClick(cat.value)}
                className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors relative ${
                  isActive
                    ? 'text-red-600 dark:text-red-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {cat.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 dark:bg-red-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[108px] z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#090f1d] w-4/5 max-w-sm h-full shadow-2xl p-6 overflow-y-auto border-r border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-1 pb-6 border-b border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Sections
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryClick(cat.value)}
                  className={`text-left py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === cat.value
                      ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-semibold'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                The World Today
              </span>
              <button
                onClick={() => {
                  onOpenAbout();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 py-1"
              >
                About Our Mission
              </button>
              <button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 py-1"
              >
                Editorial Inquiries & Contact
              </button>
              <button
                onClick={() => {
                  onOpenAdmin();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 py-1 flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-slate-500" />
                Editorial Admin CMS
              </button>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    onOpenSubscribe();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm"
                >
                  Subscribe to Daily Briefing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
