import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface CaseStudy {
  id: number;
  client: string;
  category: string; // Service category e.g. "Web Design"
  industry: string; // e.g. "SaaS / Fintech"
  image: string;
  gallery: string[]; // NEW: Array of additional mockup images
  
  // Header Hook
  resultHook: string; // e.g. "+140% Conversion Rate"
  summary: string; // Supporting line

  // The Narrative
  problem: string; 
  painPoints: string[];
  
  strategy: string;
  strategyBullets: string[];

  // Execution breakdown
  execution: string[]; // Primary execution
  technical: string[]; // Tech stack / details

  // Results
  results: {
    label: string;
    value: string;
    subLabel?: string;
  }[];
  resultContext?: string; // Narrative outcome
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}