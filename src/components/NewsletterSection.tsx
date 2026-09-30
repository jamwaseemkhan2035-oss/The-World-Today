import React, { useState } from 'react';
import { Mail, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 600);
  };

  return (
    <section id="newsletter-section" className="bg-slate-900 text-white border-y border-slate-800 py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle radial backdrop accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-700">
          <Mail className="w-3.5 h-3.5 text-red-500" />
          <span>The Morning Global Briefing</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
          Stay Ahead of the World
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Get the most important global stories, explained simply, delivered to your inbox every morning at 06:00 UTC.
        </p>

        {subscribed ? (
          <div className="mt-8 p-6 rounded-xl bg-slate-800/90 border border-emerald-500/40 max-w-md mx-auto animate-in zoom-in-95 duration-200">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <h4 className="text-base font-serif font-bold text-white">
              Subscription Confirmed
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Thank you. The latest Morning Briefing has been dispatched to <span className="font-mono text-white">{email}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 font-semibold text-xs sm:text-sm text-white transition-all shadow-md flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-50"
              >
                {loading ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>No spam. Unsubscribe at any time with one click. Privacy strictly respected.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
