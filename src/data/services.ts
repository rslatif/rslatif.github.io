import type { Service } from "@/types/content";
export const services: Service[] = [
  { id: "it-support", title: "IT Support", description: "Add the exact support scope you offer.", points: ["System troubleshooting", "Software installation", "Technical documentation"], featured: true, published: false, order: 1 },
  { id: "security-assessment", title: "Authorised Security Assessment", description: "Security work performed only with explicit written authorisation.", points: ["Vulnerability assessment", "Web application security testing", "Security reporting"], featured: true, published: false, order: 2 },
  { id: "lab-setup", title: "Cybersecurity Laboratory Setup", description: "Add verified virtualisation, tooling, networking, and maintenance capabilities.", points: ["Virtual machines", "Practice applications", "Research tooling"], featured: false, published: false, order: 3 }
];
