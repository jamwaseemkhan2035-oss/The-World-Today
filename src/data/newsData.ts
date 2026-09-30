import heroSummitImg from '../assets/images/hero_summit_geopolitics_1790757099776.jpg';
import aiLabImg from '../assets/images/ai_quantum_supercomputer_1790757112994.jpg';
import climateGlacierImg from '../assets/images/climate_arctic_glacier_1790757124597.jpg';
import deepSpaceImg from '../assets/images/james_webb_deep_space_1790757136242.jpg';
import marketFloorImg from '../assets/images/market_trading_floor_1790757147302.jpg';
import { Article, BreakingHeadline, MarketData, ShortExplainer, VideoItem } from '../types';

export const BREAKING_HEADLINES: BreakingHeadline[] = [
  {
    id: 'b-1',
    text: 'Global summit opens in Geneva with 64 nations signing multilateral framework on ethical AI safety standards',
    category: 'Geopolitics',
    timestamp: '14 min ago',
    articleId: 'art-hero-1'
  },
  {
    id: 'b-2',
    text: 'Central banks in Europe and Asia signal coordinated policy stability as global headline inflation moderates to 2.4%',
    category: 'Economy',
    timestamp: '32 min ago',
    articleId: 'art-econ-1'
  },
  {
    id: 'b-3',
    text: 'International scientific consortium publishes comprehensive deep-space galactic survey from orbital telescope array',
    category: 'Science',
    timestamp: '1 hour ago',
    articleId: 'art-sci-1'
  },
  {
    id: 'b-4',
    text: 'Arctic environmental mission completes baseline sea-ice core sample analysis across Norwegian archipelago',
    category: 'Climate',
    timestamp: '2 hours ago',
    articleId: 'art-clim-1'
  },
  {
    id: 'b-5',
    text: 'New trans-continental green energy grid interconnect approved across North Sea and Mediterranean corridors',
    category: 'Energy',
    timestamp: '3 hours ago',
    articleId: 'art-world-3'
  }
];

export const MARKET_DATA: MarketData[] = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', value: '1.0842', change: '+0.18%', isPositive: true, delayed: true },
  { symbol: 'USD/JPY', name: 'US Dollar / Yen', value: '151.24', change: '-0.32%', isPositive: false, delayed: true },
  { symbol: 'GBP/USD', name: 'British Pound / USD', value: '1.2715', change: '+0.12%', isPositive: true, delayed: true },
  { symbol: 'GOLD', name: 'Spot Gold (t. oz)', value: '$2,418.50', change: '+0.65%', isPositive: true, unit: 'USD', delayed: true },
  { symbol: 'BRENT', name: 'Brent Crude Oil', value: '$82.40', change: '-0.85%', isPositive: false, unit: 'USD/bbl', delayed: true },
  { symbol: 'S&P 500', name: 'S&P 500 Index', value: '5,234.18', change: '+0.44%', isPositive: true, delayed: true }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-hero-1',
    slug: 'global-diplomatic-summit-geneva-multilateral-accord',
    title: 'Historic Geneva Assembly: 64 Nations Sign Landmark Accord on Global Strategic Cooperation',
    subtitle: 'Delegates agree on binding transparency rules for algorithmic oversight and sustainable cross-border supply chains.',
    summary: 'Senior diplomats and economic ministers concluded marathon negotiations in Geneva, delivering a unified charter addressing automated governance, high-seas maritime safety, and strategic supply line resilience.',
    content: [
      'In what delegates termed the most substantive multilateral conference in over a decade, representatives from sixty-four countries concluded five days of intensive negotiations at the Palais des Nations in Geneva, approving a comprehensive strategic pact that sets new baselines for international coordination.',
      'The treaty focuses primarily on three structural pillars: mutual risk assessments for automated decision systems deployed in cross-border logistics, standardized environmental criteria for international maritime corridors, and an emergency liaison mechanism designed to mitigate regional supply disruptions.',
      'Addressing the plenary hall during the final session, the presiding Secretary-General underscored that multilateral frameworks must evolve in tandem with technological velocity. "Agreements crafted for nineteenth-century diplomacy cannot effectively arbitrate twentieth-first century supply networks," the envoy noted, pointing to recent challenges in intercontinental freight and high-bandwidth data transfers.',
      'Economic analysts observe that while compliance relies largely on member states\' domestic regulatory enforcement, the pact establishes an unprecedented mutual verification registry. Signatories will submit biannual transparency filings that undergo independent peer review by technical steering panels.',
      'Public reaction across international trading hubs has been cautiously optimistic. Key industrial associations praised the clarity provided around export compliance, while civic policy groups emphasized the need for robust civic monitoring to ensure implementation adheres to human-rights commitments.'
    ],
    category: 'Geopolitics',
    region: 'Europe',
    image: heroSummitImg,
    imageCaption: 'Delegates convene inside the main assembly hall at the Palais des Nations in Geneva for the final plenary vote.',
    author: 'Editorial Team',
    authorRole: 'Senior International Desk',
    publishedAt: 'March 30, 2026 · 08:30 UTC',
    updatedAt: 'March 30, 2026 · 11:15 UTC',
    readTime: '5 min read',
    tags: ['Diplomacy', 'Multilateralism', 'Geneva Accord', 'Governance', 'Global Policy'],
    sources: [
      {
        name: 'United Nations Office at Geneva Press Briefing',
        type: 'Official Statement',
        url: 'https://www.ungeneva.org',
        publishedDate: 'March 30, 2026',
        notes: 'Official transcript of the closing plenary remarks and finalized declaration text.'
      },
      {
        name: 'International Institute for Strategic Studies (IISS)',
        type: 'Academic Journal',
        url: 'https://www.iiss.org',
        publishedDate: 'March 2026',
        notes: 'Strategic analysis on global supply chain verification protocols.'
      },
      {
        name: 'World Trade Organization Policy Review',
        type: 'Multilateral Agency',
        url: 'https://www.wto.org',
        publishedDate: 'March 2026',
        notes: 'Quarterly trade flow assessment and non-tariff barrier documentation.'
      }
    ],
    isFeatured: true,
    isBreaking: true,
    status: 'published',
    views: 48210
  },
  {
    id: 'art-econ-1',
    slug: 'global-markets-react-economic-developments',
    title: 'Global Markets React as Major Central Banks Signal Extended Policy Horizon and Rate Stability',
    subtitle: 'Sustained disinflation across manufacturing hubs relieves sovereign debt pressure while labor markets show steady resilience.',
    summary: 'Benchmark bond yields tightened across London, Tokyo, and Frankfurt following coordinated releases indicating central bank policy rates will remain stable through the fiscal second half.',
    content: [
      'Financial exchanges recorded measured gains on Monday following synchronized communications from the European Central Bank, Bank of England, and Asian reserve institutions, signaling an era of predictable borrowing costs.',
      'Sustained disinflation across global energy markets has allowed monetary authorities to maintain neutral policy stances without reigniting price volatility. Core headline inflation across the G20 median dropped to 2.4%, marking its lowest variance in five years.',
      'Market participants particularly welcomed clear Forward Guidance regarding commercial paper liquidity facilities, which are designed to support medium-sized enterprises navigating clean-tech capital investments.'
    ],
    category: 'Economy',
    region: 'Europe',
    image: marketFloorImg,
    imageCaption: 'Trading desks in Frankfurt tracking coordinated liquidity statements from international central banks.',
    author: 'Editorial Team',
    authorRole: 'Markets & Global Finance Desk',
    publishedAt: 'March 30, 2026 · 07:15 UTC',
    updatedAt: 'March 30, 2026 · 09:40 UTC',
    readTime: '4 min read',
    tags: ['Central Banks', 'Inflation', 'Currencies', 'Global Economy', 'Bonds'],
    sources: [
      {
        name: 'Bank for International Settlements (BIS) Quarterly Review',
        type: 'Multilateral Agency',
        url: 'https://www.bis.org',
        publishedDate: 'March 2026',
        notes: 'Statistical analysis on cross-border liquidity and sovereign yield spreads.'
      },
      {
        name: 'International Monetary Fund (IMF) World Economic Outlook Update',
        type: 'Multilateral Agency',
        url: 'https://www.imf.org',
        publishedDate: 'March 2026',
        notes: 'Macroeconomic projection model datasets.'
      }
    ],
    isFeatured: false,
    isTrending: true,
    status: 'published',
    views: 31200
  },
  {
    id: 'art-ai-1',
    slug: 'ai-revolution-intelligent-systems-transforming-work',
    title: 'The AI Revolution: How Intelligent Systems Are Changing How People Work Around the World',
    subtitle: 'From automated clinical diagnostic pipelines to decentralized chip architecture, machine intelligence transitions from experimental models to industrial reality.',
    summary: 'A comprehensive global survey of 2,400 enterprises reveals significant productivity gains in specialized domains, accompanied by sweeping national workforce upskilling initiatives.',
    content: [
      'Artificial intelligence has traversed the boundary between speculative software tool and foundational industrial infrastructure. Across six continents, research institutions and industrial conglomerates are deploying domain-tailored reasoning models that operate in conjunction with human specialists.',
      'In medical diagnostics, hospital networks across East Asia and Northern Europe report that multimodal neural networks now pre-screen up to 70% of routine diagnostic imaging, allowing radiologists to dedicate expanded consultation hours to complex clinical interventions.',
      'Simultaneously, engineering firms are utilizing automated formal verification algorithms to audit semiconductor designs and flight control firmware, drastically reducing the revision cycle for mission-critical hardware.',
      'However, economists caution that productivity gains require substantial investment in institutional literacy. Several national labor ministries have launched nationwide technical apprenticeships to ensure workers across administrative and technical sectors develop collaborative fluency with generative toolsets.'
    ],
    category: 'AI',
    region: 'North America',
    image: aiLabImg,
    imageCaption: 'Precision optical computing modules inside an advanced artificial intelligence systems facility.',
    author: 'Editorial Team',
    authorRole: 'Technology & Applied Sciences Desk',
    publishedAt: 'March 30, 2026 · 06:00 UTC',
    updatedAt: 'March 30, 2026 · 10:20 UTC',
    readTime: '6 min read',
    tags: ['Artificial Intelligence', 'Future of Work', 'Automation', 'Robotics', 'Deep Learning'],
    sources: [
      {
        name: 'OECD AI Policy Observatory',
        type: 'Government Report',
        url: 'https://oecd.ai',
        publishedDate: 'March 2026',
        notes: 'Empirical survey on algorithmic adoption across industrial sectors.'
      },
      {
        name: 'IEEE Transactions on Artificial Intelligence',
        type: 'Academic Journal',
        url: 'https://ieeexplore.ieee.org',
        publishedDate: 'February 2026',
        notes: 'Peer-reviewed review of formal verification in deep learning.'
      }
    ],
    isFeatured: true,
    isTrending: true,
    status: 'published',
    views: 52940
  },
  {
    id: 'art-clim-1',
    slug: 'major-climate-developments-watched-globally',
    title: 'Major Climate Developments: Arctic Marine Expedition Completes Critical Baseline Ice Survey',
    subtitle: 'Scientists aboard polar research vessels map structural multi-year ice resilience amidst changing ocean thermohaline currents.',
    summary: 'An international team of oceanographers has completed a 90-day expedition through the high Arctic, providing the most detailed geophysical dataset yet on sub-surface thermal gradients and ice shelf cohesion.',
    content: [
      'Equipped with autonomous underwater gliders and synthetic aperture radar, the international MOSAiC-II expedition docked in Tromsø this weekend following three months of rigorous polar measurements.',
      'The expedition documented that while summer sea-ice extent continues to track historical decadal declines, newly identified deep-water currents are depositing cold saline buffers in select continental shelf trenches, providing localized thermal stabilization.',
      'Climatologists stress that while this localized buffering offers valuable insights for oceanographic climate modeling, it does not diminish the urgent necessity of global emissions reduction milestones mandated under international climate protocols.',
      'Data generated by the mission has been placed into open public repositories, allowing environmental institutes worldwide to calibrate seasonal storm forecasting and sea-level projection algorithms.'
    ],
    category: 'Climate',
    region: 'Europe',
    image: climateGlacierImg,
    imageCaption: 'The polar research vessel navigates through dense sea ice during sub-surface sonar profiling in the Arctic basin.',
    author: 'Editorial Team',
    authorRole: 'Environment & Earth Sciences Desk',
    publishedAt: 'March 29, 2026 · 16:45 UTC',
    updatedAt: 'March 30, 2026 · 05:30 UTC',
    readTime: '5 min read',
    tags: ['Climate Change', 'Arctic Expedition', 'Oceanography', 'Glaciology', 'Ecosystems'],
    sources: [
      {
        name: 'World Meteorological Organization (WMO) Arctic Climate Report',
        type: 'Multilateral Agency',
        url: 'https://wmo.int',
        publishedDate: 'March 2026',
        notes: 'Comprehensive polar climatic observation telemetry.'
      },
      {
        name: 'Intergovernmental Panel on Climate Change (IPCC) Technical Brief',
        type: 'Multilateral Agency',
        url: 'https://www.ipcc.ch',
        publishedDate: '2026',
        notes: 'Guidance on sub-surface ocean heat content calculations.'
      }
    ],
    isFeatured: true,
    isTrending: true,
    status: 'published',
    views: 39800
  },
  {
    id: 'art-sci-1',
    slug: 'deep-space-astronomy-breakthrough-galactic-clusters',
    title: 'Deep-Space Observatory Identifies Early Primordial Spiral Formations Near Cosmic Dawn',
    subtitle: 'Spectroscopic analysis reveals mature spiral arms in galaxies formed within 400 million years of the Big Bang, challenging classic evolutionary timelines.',
    summary: 'Astrophysicists analyzing infrared data from orbital telescope constellations have detected unexpectedly organized disc galaxies in the early universe, prompting revisions to cosmological condensation models.',
    content: [
      'In a discovery that expands our understanding of cosmic infancy, an international astronomical collaboration announced the detection of three fully differentiated spiral galaxies dating to just 380 million years after the Big Bang.',
      'Standard cosmological theory predicted that galaxies formed during this era would appear as chaotic, irregular clumps of gas and unorganized stellar nurseries. However, the high-resolution infrared spectrographs show clear, symmetric spiral structures with stabilized central bulge mass.',
      '"The speed at which primordial matter condensed into structured rotating discs suggests either stellar formation rates were significantly higher than previously estimated, or alternative gravitational seed mechanisms were at play," stated the lead investigator.',
      'Further spectroscopic verification is slated for upcoming observation cycles, with data shared openly across international observatories.'
    ],
    category: 'Science',
    region: 'North America',
    image: deepSpaceImg,
    imageCaption: 'Deep-field composite rendering of high-redshift spiral galaxies captured by orbital infrared instruments.',
    author: 'Editorial Team',
    authorRole: 'Science & Deep Space Desk',
    publishedAt: 'March 29, 2026 · 14:10 UTC',
    updatedAt: 'March 30, 2026 · 02:00 UTC',
    readTime: '4 min read',
    tags: ['Astronomy', 'Cosmology', 'Space Exploration', 'Physics', 'Astrophysics'],
    sources: [
      {
        name: 'Astrophysical Journal Letters',
        type: 'Academic Journal',
        url: 'https://iopscience.iop.org',
        publishedDate: 'March 2026',
        notes: 'Peer-reviewed spectroscopic documentation of early spiral discs.'
      },
      {
        name: 'European Space Agency (ESA) Scientific Bulletin',
        type: 'Multilateral Agency',
        url: 'https://www.esa.int',
        publishedDate: 'March 2026',
        notes: 'Telescope telemetry calibration and filter documentation.'
      }
    ],
    isFeatured: false,
    isTrending: true,
    status: 'published',
    views: 44100
  },
  {
    id: 'art-world-1',
    slug: 'asia-pacific-infrastructure-corridor-clean-energy',
    title: 'Southeast Asia Connectivity Corridor Expands High-Speed Maritime Rail Links',
    subtitle: 'Cross-border transport network enters secondary phase connecting industrial logistics hubs across five ASEAN members.',
    summary: 'Regional transport ministers have ratified expansion schedules for an integrated high-capacity rail and automated port corridor linking major manufacturing centers from Singapore to Bangkok.',
    content: [
      'Logistics efficiency across Southeast Asia is poised for significant acceleration following the formal commissioning of the Northern Maritime Rail Link.',
      'The multi-billion dollar infrastructure partnership integrates automated container transshipment yards with electrified heavy freight corridors, cutting average shipping transit times between regional manufacturing hubs by nearly 35 percent.',
      'Environmental assessments confirm the electrified lines will substitute for over 180,000 diesel truck trips annually, contributing directly to regional decarbonization commitments.'
    ],
    category: 'World',
    region: 'Asia',
    image: heroSummitImg,
    imageCaption: 'Port logistics terminal showing automated rail transfer integration in Southeast Asia.',
    author: 'Editorial Team',
    authorRole: 'Asia-Pacific Regional Desk',
    publishedAt: 'March 30, 2026 · 04:20 UTC',
    updatedAt: 'March 30, 2026 · 07:00 UTC',
    readTime: '4 min read',
    tags: ['Infrastructure', 'ASEAN', 'Logistics', 'Maritime', 'Clean Transit'],
    sources: [
      {
        name: 'Asian Development Bank (ADB) Transport Working Paper',
        type: 'Multilateral Agency',
        url: 'https://www.adb.org',
        publishedDate: 'March 2026',
        notes: 'Feasibility metrics and regional economic multipliers.'
      }
    ],
    isFeatured: false,
    status: 'published',
    views: 22400
  },
  {
    id: 'art-world-2',
    slug: 'african-union-health-initiative-vaccine-manufacturing',
    title: 'African Continental Health Network Inaugurates Four Advanced Bio-Manufacturing Centers',
    subtitle: 'Autonomous regional pharmaceutical hubs in Rwanda, Senegal, and South Africa begin commercial-grade vaccine production.',
    summary: 'A major milestone in global health equity was achieved as four regional biotech facilities commenced operations, capable of supplying critical antigens directly across African Union member nations.',
    content: [
      'Health ministers and global health leaders gathered in Kigali to commemorate the commissioning of state-of-the-art mRNA formulation facilities designed to localize vaccine production.',
      'Funded through a blended coalition of sovereign wealth funds and international development banks, the initiative eliminates historical dependencies on overseas supply chains during public health emergencies.',
      'The centers have already secured World Health Organization pre-qualification audits, ensuring every batch meets international pharmacological benchmarks.'
    ],
    category: 'World',
    region: 'Africa',
    image: aiLabImg,
    imageCaption: 'Cleanroom technicians monitoring formulation bioreactors at the Kigali bio-manufacturing center.',
    author: 'Editorial Team',
    authorRole: 'Africa & Global Health Desk',
    publishedAt: 'March 29, 2026 · 11:30 UTC',
    updatedAt: 'March 29, 2026 · 18:00 UTC',
    readTime: '4 min read',
    tags: ['Public Health', 'African Union', 'Biotechnology', 'Pharmaceuticals', 'Equity'],
    sources: [
      {
        name: 'Africa Centres for Disease Control and Prevention (Africa CDC)',
        type: 'Official Statement',
        url: 'https://africacdc.org',
        publishedDate: 'March 2026',
        notes: 'Inauguration declaration and bio-readiness report.'
      }
    ],
    isFeatured: false,
    status: 'published',
    views: 19800
  },
  {
    id: 'art-world-3',
    slug: 'latin-america-clean-energy-lithium-stewardship',
    title: 'South American Minerals Consortium Establishes Strictest Water-Neutral Extraction Standards',
    subtitle: 'Chile, Argentina, and Bolivia align environmental regulations for high-altitude brine stewardship and community water rights.',
    summary: 'A landmark tri-national agreement sets rigorous ecological benchmarks for lithium and copper processing, incorporating closed-loop direct extraction technologies.',
    content: [
      'In a joint session in Santiago, environment ministers from South America\'s mineral-rich Andean corridor ratified binding ecological criteria for critical mineral concessions.',
      'The new framework mandates direct lithium extraction (DLE) systems that reinject over 95% of purified brine back into underground aquifers, halting the water table depletion that historically impacted indigenous agricultural communities.',
      'Independent hydrologists and civic representatives have been granted perpetual monitoring access to telemetry sensor networks stationed across the salars.'
    ],
    category: 'World',
    region: 'South America',
    image: climateGlacierImg,
    imageCaption: 'High-altitude closed-loop brine reinjection facility operating in the Atacama basin.',
    author: 'Editorial Team',
    authorRole: 'Latin America Environmental Desk',
    publishedAt: 'March 28, 2026 · 18:00 UTC',
    updatedAt: 'March 29, 2026 · 09:15 UTC',
    readTime: '4 min read',
    tags: ['South America', 'Lithium', 'Water Security', 'Energy Transition', 'Mining'],
    sources: [
      {
        name: 'UN Economic Commission for Latin America and the Caribbean (ECLAC)',
        type: 'Multilateral Agency',
        url: 'https://www.cepal.org',
        publishedDate: 'March 2026',
        notes: 'Comparative regulatory study on direct mineral extraction.'
      }
    ],
    isFeatured: false,
    status: 'published',
    views: 17650
  },
  {
    id: 'art-pol-1',
    slug: 'international-maritime-law-cyber-security-protocols',
    title: 'Global Maritime Assembly Enforces Autonomous Vessel Navigation and Anti-Interference Codes',
    subtitle: 'New IMO regulations require encrypted satellite telemetry and mandatory fail-safe manual handoffs for uncrewed merchant vessels.',
    summary: 'The International Maritime Organization adopted strict cybersecurity protocols governing autonomous commercial fleets operating in international waters, mitigating electronic spoofing risks.',
    content: [
      'Meeting in London, the IMO Maritime Safety Committee passed resolution 384, establishing binding cyber-hardening guidelines for automated cargo ships.',
      'With over 400 autonomous test vessels currently traversing Pacific and Atlantic sea lanes, the framework requires redundant quantum-resistant encryption for navigation feeds and standardized collision-avoidance algorithms.',
      'The treaty also establishes an international maritime tribunal to adjudicate algorithmic liability in collisions involving automated vessels.'
    ],
    category: 'Politics',
    region: 'Europe',
    image: marketFloorImg,
    imageCaption: 'Navigation command bridge displaying multi-vessel autonomous routing telemetry.',
    author: 'Editorial Team',
    authorRole: 'International Policy & Maritime Affairs',
    publishedAt: 'March 28, 2026 · 15:20 UTC',
    updatedAt: 'March 29, 2026 · 08:00 UTC',
    readTime: '5 min read',
    tags: ['Maritime Law', 'Cybersecurity', 'Navigation', 'IMO', 'Autonomous Shipping'],
    sources: [
      {
        name: 'International Maritime Organization (IMO) Press Registry',
        type: 'Official Statement',
        url: 'https://www.imo.org',
        publishedDate: 'March 2026',
        notes: 'MSC 108 Resolution text on autonomous surface ships.'
      }
    ],
    isFeatured: false,
    status: 'published',
    views: 24900
  },
  {
    id: 'art-tech-1',
    slug: 'quantum-computing-error-correction-fault-tolerant-milestone',
    title: 'Fault-Tolerant Quantum Processing Reaches 99.98% Fidelity Milestone in Neutral-Atom Arrays',
    subtitle: 'Research laboratories demonstrate real-time topological error correction across 1,000 physical qubits, unlocking stable molecular simulations.',
    summary: 'A consortium of physicists and computer scientists has achieved sustained, fault-tolerant logical qubit operations, executing complex catalyst simulations previously intractable on classical supercomputers.',
    content: [
      'In a paper published in scientific reviews, researchers announced a definitive advance in quantum computing architecture: the sustained operation of 48 logical qubits using neutral-atom optical tweezers.',
      'By implementing real-time syndrome measurements without collapsing the underlying superposition, the system demonstrated physical error rates beneath the threshold necessary for universal computational advantage.',
      'Commercial implications are imminent: pharmaceutical researchers have already run initial simulations evaluating nitrogenase enzymatic catalysts, a calculation that could transform synthetic fertilizer production.'
    ],
    category: 'Technology',
    region: 'North America',
    image: aiLabImg,
    imageCaption: 'Optical lattice laser assembly containing neutral rubidium atoms used for logical qubit processing.',
    author: 'Editorial Team',
    authorRole: 'Advanced Hardware & Computing Desk',
    publishedAt: 'March 27, 2026 · 13:00 UTC',
    updatedAt: 'March 28, 2026 · 11:00 UTC',
    readTime: '5 min read',
    tags: ['Quantum Computing', 'Physics', 'Hardware', 'Neutral Atoms', 'Supercomputing'],
    sources: [
      {
        name: 'Nature Physical Sciences',
        type: 'Academic Journal',
        url: 'https://www.nature.com',
        publishedDate: 'March 2026',
        notes: 'Fault-tolerant quantum error correction benchmarking metrics.'
      }
    ],
    isFeatured: false,
    status: 'published',
    views: 38700
  }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'The Geneva Summit Accord Explained: What 64 Nations Agreed On',
    description: 'An objective breakdown of the diplomatic treaty governing cross-border algorithms and maritime security corridors.',
    thumbnail: heroSummitImg,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // Clean embed placeholder
    category: 'Explainers',
    duration: '04:15',
    publishedAt: 'Today',
    views: '142K'
  },
  {
    id: 'vid-2',
    title: 'Inside the Next-Gen Quantum Computing Facility',
    description: 'A walk-through of the optical tweezer laboratory achieving new logical qubit stability records.',
    thumbnail: aiLabImg,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    category: 'AI & Technology',
    duration: '08:42',
    publishedAt: 'Yesterday',
    views: '280K'
  },
  {
    id: 'vid-3',
    title: 'Arctic Polar Ice Core Drilling: 90 Days at Sea',
    description: 'Documentary footage from the international marine team monitoring deep Arctic thermal ocean layers.',
    thumbnail: climateGlacierImg,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    category: 'Documentaries',
    duration: '14:20',
    publishedAt: '2 days ago',
    views: '95K'
  },
  {
    id: 'vid-4',
    title: 'Global Inflation Moderates: How Central Banks Steered the Curve',
    description: 'Financial analysts explain the coordinated policy shifts across London, Frankfurt, and Tokyo.',
    thumbnail: marketFloorImg,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    category: 'World Events',
    duration: '06:10',
    publishedAt: '3 days ago',
    views: '88K'
  }
];

export const SIXTY_SECOND_EXPLAINERS: ShortExplainer[] = [
  {
    id: 'short-1',
    title: 'What Is the Geneva AI Governance Accord?',
    shortExplanation: 'The three core commitments made by 64 nations to ensure cross-border algorithmic safety and transparent audit standards.',
    thumbnail: heroSummitImg,
    category: 'Geopolitics',
    duration: '00:58',
    views: '410K'
  },
  {
    id: 'short-2',
    title: 'How Central Banks Decided on Rate Stability',
    shortExplanation: 'Why disinflation in logistics and energy gave monetary authorities room to breathe this quarter.',
    thumbnail: marketFloorImg,
    category: 'Economy',
    duration: '00:54',
    views: '320K'
  },
  {
    id: 'short-3',
    title: 'Quantum Logical Qubits: In Plain English',
    shortExplanation: 'Why moving from physical to fault-tolerant logical qubits makes real-world simulations possible.',
    thumbnail: aiLabImg,
    category: 'Technology',
    duration: '01:00',
    views: '650K'
  },
  {
    id: 'short-4',
    title: 'The Arctic Sea Ice Discovery You Need to Know',
    shortExplanation: 'How deep ocean saline buffers are temporarily insulating coastal trenches in the high North.',
    thumbnail: climateGlacierImg,
    category: 'Climate',
    duration: '00:52',
    views: '290K'
  },
  {
    id: 'short-5',
    title: 'Early Spiral Galaxies Challenge Cosmic Timeline',
    shortExplanation: 'Why finding organized disc galaxies 380M years after the Big Bang is rewriting astrophysics textbooks.',
    thumbnail: deepSpaceImg,
    category: 'Science',
    duration: '00:59',
    views: '510K'
  }
];

export const TRENDING_STORIES = [
  { rank: '01', title: 'Historic Geneva Assembly: 64 Nations Sign Landmark Accord on Global Cooperation', category: 'Geopolitics', id: 'art-hero-1', readTime: '5 min read' },
  { rank: '02', title: 'The AI Revolution: How Intelligent Systems Are Changing How People Work', category: 'AI', id: 'art-ai-1', readTime: '6 min read' },
  { rank: '03', title: 'Deep-Space Observatory Identifies Early Primordial Spiral Formations', category: 'Science', id: 'art-sci-1', readTime: '4 min read' },
  { rank: '04', title: 'Global Markets React as Major Central Banks Signal Extended Policy Stability', category: 'Economy', id: 'art-econ-1', readTime: '4 min read' },
  { rank: '05', title: 'Major Climate Developments: Arctic Marine Expedition Completes Baseline Survey', category: 'Climate', id: 'art-clim-1', readTime: '5 min read' }
];
