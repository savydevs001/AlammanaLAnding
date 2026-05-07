export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  image: string;
  specialization: string;
  email: string;
  education: string;
  experience: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Development' | 'Marketing';
  location: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  features: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
  completionDate?: string;
  client?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}
