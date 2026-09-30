export type CategoryType =
  | 'World'
  | 'Politics'
  | 'Economy'
  | 'Technology'
  | 'AI'
  | 'Science'
  | 'Climate'
  | 'Videos'
  | 'Explainers'
  | 'Geopolitics';

export type RegionType =
  | 'Asia'
  | 'Europe'
  | 'Middle East'
  | 'Africa'
  | 'North America'
  | 'South America'
  | 'Oceania';

export interface SourceReference {
  name: string;
  type: 'Government Report' | 'Academic Journal' | 'Multilateral Agency' | 'Official Statement' | 'News Wire';
  url: string;
  publishedDate: string;
  notes?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  content: string[];
  category: CategoryType;
  region?: RegionType;
  image: string;
  imageCaption?: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  sources: SourceReference[];
  tags: string[];
  isBreaking?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  status: 'published' | 'draft' | 'scheduled' | 'breaking';
  views: number;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: '60 Second News' | 'Explainers' | 'Documentaries' | 'World Events' | 'AI & Technology';
  duration: string;
  publishedAt: string;
  views: string;
}

export interface ShortExplainer {
  id: string;
  title: string;
  shortExplanation: string;
  thumbnail: string;
  videoUrl?: string;
  category: string;
  duration: string;
  views: string;
}

export interface MarketData {
  symbol: string;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  unit?: string;
  delayed: boolean;
}

export interface BreakingHeadline {
  id: string;
  text: string;
  category: string;
  timestamp: string;
  articleId?: string;
}
