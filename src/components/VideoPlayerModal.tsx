import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Share2, Check } from 'lucide-react';
import { VideoItem, ShortExplainer } from '../types';

interface VideoPlayerModalProps {
  video: VideoItem | ShortExplainer | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [copied, setCopied] = useState(false);

  if (!video) return null;

  const title = video.title;
  const description =
    'description' in video ? video.description : video.shortExplanation;
  const duration = video.duration;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-950 text-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-800 overflow-hidden my-auto flex flex-col">
        {/* Top Header */}
        <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-wider text-red-500">
              The World Today Cinema
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 font-mono">{video.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={video.thumbnail}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Playing Simulation Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-white" />
              ) : (
                <Play className="w-7 h-7 fill-white ml-1" />
              )}
            </button>
          </div>

          {/* Custom Video Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
            {/* Scrubber Bar */}
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3 cursor-pointer">
              <div
                className="bg-red-600 h-full rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-red-500 transition-colors"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex items-center gap-1 hover:text-red-500 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isMuted ? 'Muted' : 'Stereo Audio'}</span>
                </button>
                <span className="font-mono text-slate-400">
                  01:14 / {duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Description & Metadata */}
        <div className="p-6 bg-slate-900/60 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span className="font-semibold text-red-400">{video.category}</span>
            <span>·</span>
            <span className="font-mono">{duration}</span>
            <span>·</span>
            <span>{video.views} views</span>
          </div>

          <h3 className="text-xl font-serif font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed font-sans">{description}</p>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>The World Today Verified Video Production</span>
            <span className="font-mono">Format: 4K UHD 60fps</span>
          </div>
        </div>
      </div>
    </div>
  );
};
