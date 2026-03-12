export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  gallery?: string[];
  technologies: string[];
  features: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: {
    start: string;
    end: string;
  };
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  logo?: string;
  images?: string[];
  credentialUrl?: string;
  skills?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
