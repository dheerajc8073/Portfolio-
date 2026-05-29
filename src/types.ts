export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageFallbackType: 'snake-detection' | 'agro-connect' | 'ai-assistant';
  category: 'AI / Machine Learning' | 'Full Stack Web';
  featured: boolean;
  contributionNotes?: string[];
  architectureSummary?: string;
  documentationUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // percentage, e.g., 90
    icon?: string;
  }[];
}

export interface ExperienceTimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'academic' | 'project';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}
