export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  stackRationale?: string;
  stack: string[];
  metrics?: string;
  liveUrl?: string;
  docsUrl?: string;
  githubUrl: string;
  linkedinUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  status?: string;
  date?: string;
  description?: string;
  verifyUrl?: string;
  certificateUrl?: string;
  subCertifications?: {
    id: string;
    title: string;
    verifyUrl?: string;
    certificateUrl?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  date?: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description?: string;
  bullets: string[];
  type: 'role' | 'hackathon' | 'virtual' | 'ambassadorship';
  badgeLabel?: string;
  verifyUrl?: string;
}

export interface Setback {
  id: string;
  title: string;
  date: string;
  description: string;
  lessons: string[];
  proofUrl?: string;
}
