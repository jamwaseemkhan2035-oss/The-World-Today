import React, { useEffect, useState } from 'react';
import { Article } from '../types';
import {
  X,
  Clock,
  Calendar,
  Share2,
  Copy,
  Check,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  ShieldCheck,
  Bookmark,
  Printer,
  ChevronRight,
} from 'lucide-react';
import { ARTICLES_DATA } from '../data/newsData';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onSelectArticle,
}) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    // Scroll to top when article changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article]);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedArticles = ARTICLES_DATA.filter(
    (a) => a.id !== article.id && (a.category === article.category || a.region === article.region)
  ).slice(0, 3);

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    image: [article.image],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: [
      {
        '@type': 'Organization',
        name: 'The World Today Editorial Team',
        url: 'https://theworldtoday.org',
      },
    ],
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'The World Today',
      logo: {
        '@type': 'ImageObject',
        url: 'https://theworldtoday.org/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://theworldtoday.org/${article.category.toLowerCase()}/${article.slug}`,
    },
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      {/* JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white dark:bg-[#070b14] text-slate-900 dark:text-slate-100 max-w-5xl mx-auto shadow-2xl border-x border-slate-200 dark:border-slate-800">
        {/* Sticky Top Reading Bar */}
        <div className="sticky top-0 z-30 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 overflow-hidden truncate">
            <button
              onClick={onClose}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors truncate">
              {article.category}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-slate-800 dark:text-slate-300 font-medium truncate">
              Dispatch
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-lg transition-colors ${
                bookmarked
                  ? 'text-red-600 bg-red-50 dark:bg-red-950/40'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="Bookmark story"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block"
              title="Print article"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Container */}
        <article className="px-4 sm:px-8 lg:px-12 py-8">
          {/* Header Metadata */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
              <span>{article.category}</span>
              {article.region && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <span>{article.region}</span>
                </>
              )}
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="font-mono text-slate-500 font-normal">{article.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 dark:text-white leading-tight tracking-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                {article.subtitle}
              </p>
            )}

            {/* Author & Publication Timestamps (Zero-Pill) */}
            <div className="mt-6 py-4 border-y border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  Reported by {article.author}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {article.authorRole} · The World Today
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Published: {article.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>Updated: {article.updatedAt}</span>
                </div>
              </div>
            </div>

            {/* Social Share Strip */}
            <div className="my-4 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Share Dispatch</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent('https://theworldtoday.org')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Share on X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://theworldtoday.org')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(article.summary)}`}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Share by Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="my-6 max-w-4xl mx-auto">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-900 shadow-md">
              <img
                src={article.image}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {article.imageCaption && (
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic font-serif">
                {article.imageCaption}
              </p>
            )}
          </div>

          {/* Longform Editorial Prose with Drop Cap */}
          <div className="max-w-3xl mx-auto space-y-5 text-base sm:text-lg leading-relaxed font-sans text-slate-800 dark:text-slate-200">
            {article.content.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-slate-950 dark:first-letter:text-white'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}

            {/* Pull Quote Editorial Element */}
            <blockquote className="my-8 py-4 px-6 border-l-4 border-red-600 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg font-serif italic text-lg sm:text-xl text-slate-900 dark:text-white leading-relaxed">
              &ldquo;{article.summary}&rdquo;
            </blockquote>

            {/* Topic Tags */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider mr-2">
                Filed Under:
              </span>
              <div className="inline-flex flex-wrap gap-2 mt-1">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* MANDATORY SECTION: Sources & References */}
            <div className="mt-10 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                  Primary Sources & Factual Attribution
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                In adherence to The World Today editorial standards, all statistics, treaties, and institutional claims are cross-checked against primary archival and regulatory registries.
              </p>

              <div className="space-y-3">
                {article.sources.map((src, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        {src.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {src.type} · {src.publishedDate}
                      </span>
                    </div>
                    {src.notes && (
                      <p className="mt-1.5 text-slate-600 dark:text-slate-400 leading-normal pl-3">
                        {src.notes}
                      </p>
                    )}
                    <div className="mt-2 pl-3">
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-red-600 dark:text-red-400 hover:underline"
                      >
                        <span>Official Source Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Stories */}
            {relatedArticles.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-6">
                  Related Coverage & Dispatches
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectArticle(rel)}
                      className="group cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900 mb-2.5">
                          <img
                            src={rel.image}
                            alt={rel.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-[10px] uppercase font-bold text-red-600 dark:text-red-400">
                          {rel.category}
                        </span>
                        <h4 className="text-sm font-serif font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug mt-1">
                          {rel.title}
                        </h4>
                      </div>
                      <span className="mt-2 text-[11px] font-mono text-slate-400">{rel.readTime}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};
