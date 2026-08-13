export type Level = "Beginner" | "Intermediate" | "Advanced" | "Professional";
export type WorkType = "Formal employment" | "Internship" | "Freelance" | "Volunteer" | "Academic" | "Research" | "Independent project" | "Laboratory support";
export interface Publishable { id: string; published: boolean; featured: boolean; order: number; }
export interface LinkItem { label: string; url: string; external?: boolean; enabled: boolean; }
export interface Skill extends Publishable { name: string; category: string; level: Level; description: string; icon?: string; }
export interface Experience extends Publishable { title: string; organisation: string; workType: WorkType; location?: string; startDate?: string; endDate?: string; current: boolean; overview: string; responsibilities: string[]; achievements: string[]; technologies: string[]; logo?: string; url?: string; }
export interface Project extends Publishable { title: string; slug: string; summary: string; description: string; category: string; tags: string[]; technologies: string[]; role?: string; teamMembers: string[]; startDate?: string; completionDate?: string; status?: string; thumbnail?: string; gallery: string[]; features: string[]; challenges: string[]; solutions: string[]; security: string[]; results: string[]; lessons: string[]; githubUrl?: string; demoUrl?: string; reportUrl?: string; presentationUrl?: string; }
export interface Education extends Publishable { qualification: string; degree?: string; institution: string; field?: string; startYear?: string; completionYear?: string; result?: string; description: string; activities: string[]; research?: string; logo?: string; location?: string; documentUrl?: string; }
export interface Certification extends Publishable { title: string; organisation: string; category: string; issueDate?: string; expiryDate?: string; doesNotExpire: boolean; credentialId?: string; verificationUrl?: string; image?: string; pdf?: string; skills: string[]; description: string; }
export interface Achievement extends Publishable { title: string; category: string; description: string; date?: string; evidenceUrl?: string; }
export interface Service extends Publishable { title: string; description: string; points: string[]; }
export interface Testimonial extends Publishable { name: string; role?: string; organisation?: string; photo?: string; text: string; sourceUrl?: string; }
