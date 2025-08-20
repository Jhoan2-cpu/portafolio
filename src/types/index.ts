export interface MousePosition {
  x: number;
  y: number;
}

export interface SectionRef {
  (id: string, element: HTMLElement | null): void;
}

export interface ScrollToSection {
  (sectionId: string): void;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}