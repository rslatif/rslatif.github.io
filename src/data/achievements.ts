import type { Achievement } from "@/types/content";
export const achievements: Achievement[] = [
  { id: "codeforces", title: "200+ Codeforces Problems Solved", category: "Competitive programming", description: "Solved more than 200 programming problems on Codeforces, strengthening algorithmic thinking, debugging, and problem-solving skills.", featured: true, published: true, order: 1 },
  { id: "security-platforms", title: "Hands-on Security Learning Platforms", category: "Cybersecurity practice", description: "Completed practice rooms and labs on TryHackMe and PortSwigger Web Security Academy, alongside controlled and intentionally vulnerable environments.", featured: true, published: true, order: 2 },
  { id: "research-lab", title: "Cybersecurity Research Lab Deployment", category: "Technical contribution", description: "Contributed to the setup and standardisation of 10+ Windows 11 research workstations with VMware-based Kali Linux and Ubuntu environments.", featured: true, published: true, order: 3 }
];
