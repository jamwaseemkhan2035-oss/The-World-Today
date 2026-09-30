import React from 'react';
import { X, Globe, Shield, CheckCircle, Mail, BookOpen } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#070b14] text-slate-900 dark:text-slate-100 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              Institutional Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white mt-0.5">
              About The World Today
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
          {/* Tagline */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
              &ldquo;Understand the World. Stay Informed.&rdquo;
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              The World Today is an independent global information platform established to provide clear, accessible, and factual reporting on the defining transformations of our era.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <Globe className="w-4 h-4 text-red-600" />
              <span>Our Mission</span>
            </div>
            <p>
              In an information landscape frequently fragmented by commercial sensationalism and algorithmic hyperbole, The World Today delivers sober, contextual journalism. We aim to empower a global public—particularly young decision-makers, researchers, and engaged citizens—with verified insights into geopolitics, technological innovation, economic shifts, and planetary stewardship.
            </p>
          </div>

          {/* What We Cover */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <span>What We Cover</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                <span><strong>Geopolitics & Treaties:</strong> Multilateral diplomacy, maritime accords, and strategic security.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                <span><strong>Frontier Technology & AI:</strong> Neural architectures, quantum processing, and ethical governance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                <span><strong>Global Economy:</strong> Central bank policies, currency dynamics, trade corridors, and labor markets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                <span><strong>Earth & Space Sciences:</strong> Astrophysics discoveries, polar research, and renewable transitions.</span>
              </li>
            </ul>
          </div>

          {/* Editorial Principles */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <Shield className="w-4 h-4 text-red-600" />
              <span>Editorial Principles</span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <strong className="text-slate-900 dark:text-white">1. Strict Primary Attribution:</strong> Every factual claim, statistic, and quote is verified against primary documentary evidence or peer-reviewed records.
              </div>
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <strong className="text-slate-900 dark:text-white">2. Neutral Informational Presentation:</strong> We prohibit partisan political endorsement and maintain deliberate neutrality across international coverage.
              </div>
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <strong className="text-slate-900 dark:text-white">3. Clear Category Separation:</strong> Breaking news, factual dispatches, explainers, and structural analyses are explicitly labeled to avoid reader ambiguity.
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Have editorial feedback or a research inquiry?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Editorial Desk</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
