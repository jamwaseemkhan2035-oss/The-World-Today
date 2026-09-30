import React, { useState } from 'react';
import { VideoItem } from '../types';
import { Play, Film, Clock, ArrowRight, Eye } from 'lucide-react';

interface VideoSectionProps {
  videos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
  onWatchAllVideos: () => void;
}

const VIDEO_CATEGORIES = [
  'All Videos',
  'Explainers',
  'AI & Technology',
  'Documentaries',
  'World Events',
  '60 Second News',
];

export const VideoSection: React.FC<VideoSectionProps> = ({
  videos,
  onSelectVideo,
  onWatchAllVideos,
}) => {
  const [selectedFilter, setSelectedFilter] = useState('All Videos');

  const filteredVideos = videos.filter((v) => {
    if (selectedFilter === 'All Videos') return true;
    return v.category === selectedFilter;
  });

  return (
    <section id="videos-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 mb-6 border-b border-slate-900 dark:border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-red-600 dark:text-red-400 mb-1">
            <Film className="w-3.5 h-3.5" />
            <span>Digital Documentaries & Visual Reporting</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
            The World Today — Videos
          </h2>
        </div>

        {/* Video Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {VIDEO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedFilter === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => onSelectVideo(video)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail with prominent play overlay */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-950 mb-3 shadow-sm">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />

                {/* Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Duration indicator */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Unboxed Metadata */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                <span className="font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                  {video.category}
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Eye className="w-3 h-3" />
                  {video.views}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-serif font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                {video.title}
              </h3>

              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {video.description}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>{video.publishedAt}</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-red-600">
                Watch Video →
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={onWatchAllVideos}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-lg transition-all"
        >
          <span>Watch All Videos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
