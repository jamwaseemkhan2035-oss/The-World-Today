import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BreakingNewsTicker } from './components/BreakingNewsTicker';
import { MarketBar } from './components/MarketBar';
import { HeroSection } from './components/HeroSection';
import { TopStoriesSection } from './components/TopStoriesSection';
import { WorldNewsSection } from './components/WorldNewsSection';
import { GeopoliticsSection } from './components/GeopoliticsSection';
import { EconomySection } from './components/EconomySection';
import { TechnologyAISection } from './components/TechnologyAISection';
import { ScienceSpaceSection } from './components/ScienceSpaceSection';
import { ClimateSection } from './components/ClimateSection';
import { VideoSection } from './components/VideoSection';
import { SixtySecondExplainer } from './components/SixtySecondExplainer';
import { TrendingNow } from './components/TrendingNow';
import { AIAssistant } from './components/AIAssistant';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { SearchModal } from './components/SearchModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { AdminDashboard } from './components/AdminDashboard';
import { ARTICLES_DATA, VIDEOS_DATA } from './data/newsData';
import { Article, ShortExplainer, VideoItem } from './types';

export default function App() {
  // Theme State with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('twt_theme');
    if (saved) return saved === 'dark';
    return true; // Default to the sophisticated dark navy international news aesthetic
  });

  // Articles & Content State
  const [articles, setArticles] = useState<Article[]>(ARTICLES_DATA);
  const [activeCategory, setActiveCategory] = useState('Home');

  // Modals & Panels State
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | ShortExplainer | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync Dark Mode class with root document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('twt_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('twt_theme', 'light');
    }
  }, [darkMode]);

  const handleSelectHeadline = (articleId?: string) => {
    if (!articleId) return;
    const found = articles.find((a) => a.id === articleId);
    if (found) {
      setSelectedArticle(found);
    }
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const mapping: Record<string, string> = {
      World: 'world-section',
      Politics: 'geopolitics-section',
      Economy: 'economy-section',
      Technology: 'tech-section',
      AI: 'tech-section',
      Science: 'science-section',
      Climate: 'climate-section',
      Videos: 'videos-section',
      Explainers: 'explainers-section',
    };

    const targetId = mapping[cat];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleAddArticle = (newArticle: Article) => {
    setArticles((prev) => [newArticle, ...prev]);
  };

  const leadStory = articles.find((a) => a.id === 'art-hero-1') || articles[0];
  const secondaryStories = articles
    .filter((a) => a.id !== leadStory?.id && a.isTrending)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#070b14] dark:text-slate-100 flex flex-col transition-colors selection:bg-red-600 selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubscribe={() => {
          const el = document.getElementById('newsletter-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 2. Breaking News Bar */}
      <BreakingNewsTicker onSelectHeadline={handleSelectHeadline} />

      {/* 7b. Financial Market Dashboard Bar */}
      <MarketBar />

      {/* Main Editorial Content Container */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection
          leadStory={leadStory}
          secondaryStories={secondaryStories}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 4. Top Stories Section */}
        <TopStoriesSection
          articles={articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* Dual Layout: World News with Sticky Trending Now Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-4">
            {/* World News (8 cols) */}
            <div className="lg:col-span-8">
              <WorldNewsSection
                articles={articles}
                onSelectArticle={(art) => setSelectedArticle(art)}
                onViewAllWorld={() => {
                  const el = document.getElementById('world-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>

            {/* 13. Trending Now Sidebar (4 cols) */}
            <div className="lg:col-span-4 lg:pt-10">
              <div className="sticky top-32">
                <TrendingNow onSelectArticle={(art) => setSelectedArticle(art)} />

                {/* Editorial Trust Badge Card */}
                <div className="mt-6 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-xs text-slate-500">
                  <div className="font-serif font-bold text-slate-900 dark:text-white mb-1">
                    Editorial Standards
                  </div>
                  <p className="leading-relaxed">
                    The World Today is dedicated to non-partisan, fact-based digital journalism. Every assertion is verified with primary multilateral, governmental, or academic documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Geopolitics Section */}
        <GeopoliticsSection
          articles={articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 7. Economy & Business Section */}
        <EconomySection
          articles={articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 8. Technology & AI Section */}
        <TechnologyAISection
          articles={articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 9. Science & Space Section */}
        <ScienceSpaceSection
          articles={articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 10. Climate & Environment Section */}
        <ClimateSection
          articles={articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 11. Video Section */}
        <VideoSection
          videos={VIDEOS_DATA}
          onSelectVideo={(video) => setSelectedVideo(video)}
          onWatchAllVideos={() => {
            const el = document.getElementById('videos-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 12. 60-Second Explainer Feed */}
        <SixtySecondExplainer
          onSelectExplainer={(item) => setSelectedVideo(item)}
        />

        {/* 14. Ask The World AI Assistant */}
        <AIAssistant />

        {/* 18. Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* 21. Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* 16. Article Detail Page Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 15. Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={articles}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 19. About Page Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenContact={() => {
          setIsAboutOpen(false);
          setIsContactOpen(true);
        }}
      />

      {/* 20. Contact Page Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Video Player Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* 26 & 27. Admin Dashboard UI */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        articles={articles}
        onAddArticle={handleAddArticle}
      />
    </div>
  );
}
