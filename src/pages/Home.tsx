import { ArrowDown, ArrowUpRight, Binary, Cpu, Github, Network, Radar, ShieldCheck, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { contact } from "@/data/contact";
import { skills } from "@/data/skills";

const capabilities: [string, string, string, LucideIcon][] = [
  ["01", "Network Engineering", "MikroTik RouterOS, routing, NAT, firewall rules and connectivity troubleshooting.", Network],
  ["02", "Cybersecurity", "Security-first thinking, web security practice, vulnerability analysis and responsible research.", ShieldCheck],
  ["03", "Systems & Labs", "Windows, Linux, virtualisation and controlled environments for practical learning.", Cpu],
];

export default function Home() {
 return <>
  <section className="cyber-hero relative isolate overflow-hidden border-b">
   <div className="cyber-grid absolute inset-0"/><div className="orb orb-one"/><div className="orb orb-two"/>
   <div className="container-shell relative grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
    <div>
     <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="signal-pill"><span/>SYSTEM ONLINE · {profile.availability}</motion.div>
     <p className="eyebrow mt-7">IT / NETWORKING / CYBERSECURITY</p>
     <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[.94] tracking-[-.065em] sm:text-7xl lg:text-8xl">Secure the<br/><span className="cyber-gradient">connection.</span></h1>
     <p className="mt-7 max-w-xl text-lg leading-8 text-muted">I’m <strong className="text-foreground">{profile.fullName}</strong> — an IT & cybersecurity professional building dependable systems and learning security from the network outward.</p>
     <div className="mt-9 flex flex-wrap gap-3"><Link to="/projects" className="cyber-button">Explore my work <ArrowUpRight size={18}/></Link><Link to="/contact" className="cyber-button-secondary">Let’s connect</Link></div>
     <button onClick={()=>document.getElementById("capabilities")?.scrollIntoView({behavior:"smooth"})} className="mt-14 inline-flex items-center gap-2 text-xs font-semibold tracking-[.16em] text-muted hover:text-brand">SCROLL TO EXPLORE <ArrowDown size={16}/></button>
    </div>
    <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{delay:.15}} className="network-orbit mx-auto" aria-label="Digital network visualisation">
      <div className="orbit-ring ring-a"/><div className="orbit-ring ring-b"/><div className="orbit-ring ring-c"/>
      <div className="orbit-node node-a"/><div className="orbit-node node-b"/><div className="orbit-node node-c"/>
      <div className="core-node"><ShieldCheck size={44}/><span className="core-label">SECURE<br/>BY DESIGN</span></div>
      <div className="data-chip chip-a"><Terminal size={15}/> ROUTEROS</div><div className="data-chip chip-b"><Binary size={15}/> 0101</div>
      <motion.div initial={{opacity:0,x:22,y:12}} animate={{opacity:1,x:0,y:0}} transition={{delay:.4}} className="hero-profile-card"><div className="hero-profile-image">{profile.profilePhoto?<img src={profile.profilePhoto} alt={`Portrait of ${profile.fullName}`}/>:<ShieldCheck size={46}/>}</div><div><p className="text-[10px] font-bold tracking-[.16em] text-brand">IT / CYBERSECURITY</p><p className="mt-1 text-sm font-semibold text-white">MD ABDUL LOTIF</p><p className="mt-1 text-xs text-slate-300">Building secure systems</p></div><span className="hero-profile-dot"/></motion.div>
    </motion.div>
   </div>
  </section>

  <section id="capabilities" className="container-shell py-24">
   <div className="mb-11 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Core capabilities</p><h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Built in the lab.<br/>Ready for the real world.</h2></div><p className="max-w-xs text-sm leading-6 text-muted">A growing, hands-on toolkit for reliable IT operations and safer networks.</p></div>
   <div className="grid gap-4 lg:grid-cols-3">{capabilities.map(([num,title,body,Icon])=><article key={title} className="capability-card"><span className="font-mono text-xs text-brand">{num}</span><Icon className="mt-12 text-brand" size={29}/><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{body}</p><ArrowUpRight className="mt-9 text-brand" size={19}/></article>)}</div>
  </section>

  <section className="border-y bg-surface/50"><div className="container-shell grid gap-10 py-20 lg:grid-cols-[.9fr_1.1fr]">
   <div><p className="eyebrow">Featured environment</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">MikroTik<br/><span className="text-brand">Home Lab.</span></h2><p className="mt-5 max-w-md leading-7 text-muted">A practical, controlled space for building real networking skills: RouterOS setup, DHCP, NAT, firewall concepts, routing and systematic troubleshooting.</p><Link to="/laboratory" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand">View lab environment <ArrowUpRight size={17}/></Link></div>
   <div className="router-console"><div className="console-top"><span/><span/><span/><p>routeros@homelab:~</p></div><div className="font-mono text-sm leading-8 text-cyan-100"><p><span className="text-brand">$</span> /ip address print</p><p className="text-slate-400"># network interfaces active</p><p><span className="text-emerald-400">LAN</span> &nbsp; 192.168.88.1/24</p><p><span className="text-emerald-400">WAN</span> &nbsp; connected</p><p><span className="text-brand">$</span> firewall status <span className="cursor-blink">_</span></p></div><div className="mt-7 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-muted"><div className="rounded border border-emerald-400/20 bg-emerald-400/5 p-2 text-emerald-300">ROUTING: ON</div><div className="rounded border border-cyan-400/20 bg-cyan-400/5 p-2 text-cyan-300">NAT: ON</div><div className="rounded border border-brand/20 bg-brand/5 p-2 text-brand">LAB: SAFE</div></div></div>
  </div></section>

  <section className="container-shell py-24"><div className="flex items-end justify-between"><div><p className="eyebrow">Skill stack</p><h2 className="mt-3 text-4xl font-semibold">Tools I work with.</h2></div><Link to="/skills" className="hidden text-sm font-semibold text-brand sm:block">All capabilities →</Link></div><div className="mt-9 flex flex-wrap gap-3">{skills.map(skill=><Link key={skill.id} to="/skills" className="skill-pill">{skill.name}<span>↗</span></Link>)}</div></section>

  <section className="container-shell pb-24"><div className="contact-cta relative overflow-hidden"><Radar className="absolute -right-5 -top-6 size-52 text-brand/15"/><p className="eyebrow">Open channel</p><h2 className="relative mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">Have a project, role, or technical challenge?</h2><p className="relative mt-5 max-w-xl leading-7 text-slate-300">Let’s talk about IT support, networking, security, or a new opportunity.</p><div className="relative mt-8 flex flex-wrap gap-3"><Link to="/contact" className="contact-message-button">Send a message <ArrowUpRight className="inline" size={17}/></Link><a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white"><Github size={17}/> GitHub</a></div></div></section>
 </>;
}
