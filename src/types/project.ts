// Extended Project Type for Case Studies

export interface ProjectOverview {
  problem: string;
  solution: string;
  role: string;
  timeline: string;
  team?: string[];
}

export interface ProjectChallenge {
  description: string;
  technicalChallenges: string[];
  solutions: string[];
}

export interface ProjectProcess {
  research: string;
  design: string;
  development: string[];
  testing: string;
}

export interface KeyFeature {
  title: string;
  description: string;
  codeSnippet?: string;
}

export interface TechnicalDetails {
  architecture: string;
  keyFeatures: KeyFeature[];
  performanceOptimizations: string[];
}

export interface Metric {
  label: string;
  before: string;
  after: string;
}

export interface ProjectResults {
  metrics: Metric[];
  userFeedback: string[];
  lessonsLearned: string[];
}

export interface GalleryItem {
  type: "image" | "video";
  url: string;
  caption: string;
}

export interface ProjectDetail {
  // Basic Info (existing fields)
  title: string;
  type: string;
  desc: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;

  // NEW fields for case studies
  slug: string;
  featured: boolean;
  heroImage: string;

  // Detailed sections
  overview: ProjectOverview;
  challenge: ProjectChallenge;
  process: ProjectProcess;
  technicalDetails: TechnicalDetails;
  results: ProjectResults;
  gallery: GalleryItem[];
}

// Simplified type for project cards/listings
export interface ProjectCard {
  title: string;
  type: string;
  desc: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  slug: string;
  featured?: boolean;
}
