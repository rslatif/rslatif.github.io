import type { Service } from "@/types/content";
export const services: Service[] = [
  { id: "it-support", title: "IT Support", description: "Practical help with Windows, software, peripherals, printers, malware cleanup, shared resources, and technical documentation.", points: ["System troubleshooting", "Software installation", "Technical documentation"], featured: true, published: true, order: 1 },
  { id: "security-assessment", title: "Authorised Security Assessment", description: "Security work performed only with explicit written authorisation and within the agreed scope.", points: ["Vulnerability assessment", "Web application security testing", "Security reporting"], featured: true, published: true, order: 2 },
  { id: "cctv-support", title: "CCTV Setup & Support", description: "CCTV installation, DVR/NVR setup, remote-viewing configuration, and camera, cable, and power troubleshooting.", points: ["Installation", "Remote viewing", "Maintenance"], featured: true, published: true, order: 3 }
];
