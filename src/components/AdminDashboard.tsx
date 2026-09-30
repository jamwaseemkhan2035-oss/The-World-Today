import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Video,
  Layers,
  Users,
  Shield,
  Send,
  Bot,
  Settings,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
  TrendingUp,
  X,
  Search,
} from 'lucide-react';
import { Article, CategoryType } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onAddArticle: (newArticle: Article) => void;
}

type TabType =
  | 'Overview'
  | 'Articles'
  | 'Videos'
  | 'Categories'
  | 'Authors'
  | 'Sources'
  | 'Users'
  | 'Newsletter'
  | 'AIAssistant'
  | 'Settings';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  articles,
  onAddArticle,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('Overview');
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<CategoryType>('World');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Editorial Team');
  const [tags, setTags] = useState('Diplomacy, International');
  const [sourceName, setSourceName] = useState('Multilateral Registry');
  const [sourceUrl, setSourceUrl] = useState('https://www.ungeneva.org');
  const [status, setStatus] = useState<'published' | 'draft' | 'scheduled'>('published');
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary || !content) return;

    const newArticle: Article = {
      id: `art-user-${Date.now()}`,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50),
      title,
      summary,
      content: content.split('\n\n').filter((p) => p.trim().length > 0),
      category,
      image: articles[0]?.image || '',
      author,
      authorRole: 'Editorial Desk',
      publishedAt: 'Just now',
      updatedAt: 'Just now',
      readTime: '3 min read',
      tags: tags.split(',').map((t) => t.trim()),
      sources: [
        {
          name: sourceName,
          type: 'Official Statement',
          url: sourceUrl,
          publishedDate: 'March 2026',
        },
      ],
      status: status === 'draft' ? 'draft' : 'published',
      views: 120,
    };

    onAddArticle(newArticle);
    setSuccessMessage(`Article "${title}" successfully registered in editorial system!`);
    setShowAddForm(false);
    // Reset fields
    setTitle('');
    setSummary('');
    setContent('');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#070b14] text-slate-900 dark:text-slate-100 w-full max-w-6xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto flex flex-col h-[92vh]">
        {/* Admin Bar */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-red-400">
                Editorial CMS & Publishing Console
              </div>
              <h2 className="text-base font-serif font-bold text-white">
                The World Today — Control Room
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-block text-[11px] font-mono bg-slate-800 px-2.5 py-1 rounded text-slate-300">
              Role: Managing Editor
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Shell: Sidebar + Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar */}
          <aside className="w-56 bg-slate-50 dark:bg-slate-900/60 border-r border-slate-200 dark:border-slate-800 p-4 hidden md:flex flex-col justify-between shrink-0">
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                Core Systems
              </div>
              {[
                { name: 'Overview', icon: LayoutDashboard },
                { name: 'Articles', icon: FileText },
                { name: 'Videos', icon: Video },
                { name: 'Categories', icon: Layers },
                { name: 'Authors', icon: Users },
                { name: 'Newsletter', icon: Send },
                { name: 'AIAssistant', icon: Bot, label: 'AI Assistant' },
                { name: 'Settings', icon: Settings },
              ].map((item) => {
                const Icon = item.icon;
                const tabKey = item.name as TabType;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveTab(tabKey);
                      setShowAddForm(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                      activeTab === tabKey
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label || item.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 font-mono">
              <div>Version 3.8-PROD</div>
              <div className="text-emerald-500 mt-0.5">● Database Sync: OK</div>
            </div>
          </aside>

          {/* Main Dashboard Panel */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {successMessage && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* OVERVIEW TAB */}
            {activeTab === 'Overview' && !showAddForm && (
              <div className="space-y-8">
                {/* 5 Statistics Cards */}
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                    Editorial KPI Benchmarks
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="text-[11px] text-slate-500 font-medium">Total Articles</div>
                      <div className="text-2xl font-serif font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
                        1,428
                      </div>
                      <div className="text-[10px] text-emerald-600 mt-1 font-mono">+12 this week</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="text-[11px] text-slate-500 font-medium">Published Today</div>
                      <div className="text-2xl font-serif font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
                        14
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 font-mono">Target: 18/day</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="text-[11px] text-slate-500 font-medium">Total Videos</div>
                      <div className="text-2xl font-serif font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
                        320
                      </div>
                      <div className="text-[10px] text-emerald-600 mt-1 font-mono">4K UHD format</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="text-[11px] text-slate-500 font-medium">Subscribers</div>
                      <div className="text-2xl font-serif font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
                        48,920
                      </div>
                      <div className="text-[10px] text-emerald-600 mt-1 font-mono">+8.4% MoM</div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="text-[11px] text-slate-500 font-medium">Most Viewed Story</div>
                      <div className="text-xs font-serif font-bold text-slate-900 dark:text-white mt-1 line-clamp-2">
                        Geneva Strategic Accord
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 font-mono">48.2K readers</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions & Articles List */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                      Recent Content Manifest
                    </h3>
                    <button
                      onClick={() => setShowAddForm(true)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Article</span>
                    </button>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/60">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-mono">
                        <tr>
                          <th className="p-3">Headline / Title</th>
                          <th className="p-3">Category</th>
                          <th className="p-3">Author</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Views</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {articles.map((art) => (
                          <tr key={art.id} className="hover:bg-slate-50 dark:hover:bg-slate-850">
                            <td className="p-3 font-medium text-slate-900 dark:text-slate-100 max-w-xs truncate">
                              {art.title}
                            </td>
                            <td className="p-3 text-slate-500 font-mono">{art.category}</td>
                            <td className="p-3 text-slate-500">{art.author}</td>
                            <td className="p-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                                  art.isBreaking
                                    ? 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400'
                                    : art.status === 'draft'
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400'
                                    : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400'
                                }`}
                              >
                                {art.isBreaking ? 'Breaking' : art.status}
                              </span>
                            </td>
                            <td className="p-3 text-slate-500 font-mono tabular-nums">{art.views.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ADD NEW ARTICLE FORM */}
            {(showAddForm || activeTab === 'Articles') && (
              <div className="max-w-3xl">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      Publish / Dispatch New Article
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Ensure all factual claims cite verifiable multilateral or peer-reviewed documentation.
                    </p>
                  </div>
                  {showAddForm && (
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="text-xs text-slate-500 hover:text-slate-900"
                    >
                      Back to Overview
                    </button>
                  )}
                </div>

                <form onSubmit={handleCreateArticle} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Headline / Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Maritime Alliance Ratifies New Cyber Encryption Standards"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Category *
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as CategoryType)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm focus:outline-none focus:border-red-600"
                      >
                        <option value="World">World</option>
                        <option value="Politics">Politics</option>
                        <option value="Economy">Economy</option>
                        <option value="Technology">Technology</option>
                        <option value="AI">AI</option>
                        <option value="Science">Science</option>
                        <option value="Climate">Climate</option>
                        <option value="Geopolitics">Geopolitics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Author Byline *
                      </label>
                      <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Editorial Team"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Summary (Lead Deck) *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      placeholder="1-2 sentence executive summary of the dispatch..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Full Article Prose * (Separate paragraphs with double enter)
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Enter the complete editorial body text here..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm focus:outline-none focus:border-red-600 font-sans"
                    />
                  </div>

                  {/* Sources Attribution */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                      Primary Verification Source *
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={sourceName}
                          onChange={(e) => setSourceName(e.target.value)}
                          placeholder="Source Name (e.g. UN Geneva, IMF, Nature)"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs"
                        />
                      </div>
                      <div>
                        <input
                          type="url"
                          required
                          value={sourceUrl}
                          onChange={(e) => setSourceUrl(e.target.value)}
                          placeholder="https://..."
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-medium">Status:</span>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as any)}
                        className="px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs"
                      >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="scheduled">Scheduled</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setStatus('draft');
                          handleCreateArticle(new Event('submit') as any);
                        }}
                        className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        Save Draft
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
                      >
                        Publish Dispatch
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Other Tabs Placeholder with Polished Architecture */}
            {activeTab !== 'Overview' && activeTab !== 'Articles' && (
              <div className="p-8 text-center text-slate-500 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
                <Shield className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="text-base font-serif font-bold text-slate-800 dark:text-slate-200">
                  {activeTab} Management Subsystem
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Configured and ready for operational backend synchronization. API schema and role credentials validated.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
