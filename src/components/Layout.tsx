import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUp, Github, Mail, Menu, MessageCircle, Moon, Search, ShieldCheck, Sun, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { contact } from "@/data/contact";
import { siteSettings } from "@/data/siteSettings";
import { profile } from "@/data/profile";

export function Layout() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(true);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const label = navigation.find(([, path]) => path === location.pathname)?.[0] ?? (location.pathname === "/" ? "Home" : "Portfolio");
    document.title = `${label === "Home" ? "MD. Abdul Lotif" : label + " | MD. Abdul Lotif"}${label === "Home" ? " | IT & Cybersecurity Professional" : ""}`;
    const canonical = `${siteSettings.siteUrl}/#${location.pathname}`;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonical);
  }, [location.pathname]);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; localStorage.setItem("theme", dark ? "dark" : "light"); }, [dark]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [location.pathname]);
  useEffect(() => {
    const update = () => setProgress(Math.min(100, window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight) * 100));
    update(); addEventListener("scroll", update, { passive: true }); return () => removeEventListener("scroll", update);
  }, []);
  const whatsapp = contact.whatsappNumber ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}` : "";
  const email = contact.email ? `mailto:${contact.email}?subject=Portfolio%20Contact` : "";
  const messenger = contact.messengerUsername ? `https://m.me/${contact.messengerUsername}` : "";
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="no-print fixed left-0 top-0 z-[70] h-1 bg-brand" style={{ width: `${progress}%` }} aria-hidden />
    <header className="no-print sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 font-semibold"><span className="grid size-9 place-items-center overflow-hidden rounded-xl bg-brand text-white">{profile.profilePhoto?<img src={profile.profilePhoto} alt="MD Abdul Lotif" className="size-full object-cover"/>:<ShieldCheck size={20}/>}</span><span className="text-sm tracking-wide sm:text-base">MD ABDUL LOTIF</span><span className="text-brand">.</span></NavLink>
        <nav className="hidden items-center gap-4 text-sm text-muted xl:flex" aria-label="Primary">{navigation.map(([label,path])=><NavLink key={path} to={path} className={({isActive})=>`py-2 transition hover:text-brand ${isActive?"text-brand":" "}`}>{label}</NavLink>)}<NavLink to="/search" aria-label="Search"><Search size={17}/></NavLink></nav>
        <div className="flex gap-2"><button className="grid size-10 place-items-center rounded-full border bg-surface" onClick={()=>setDark(!dark)} aria-label={`Switch to ${dark?"light":"dark"} theme`}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button><button className="grid size-10 place-items-center rounded-full border bg-surface xl:hidden" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label="Toggle menu">{menu?<X size={18}/>:<Menu size={18}/>}</button></div>
      </div>
      {menu&&<nav className="container-shell grid gap-1 border-t py-4 xl:hidden">{navigation.map(([label,path])=><NavLink onClick={()=>setMenu(false)} className="rounded-lg px-3 py-2 text-muted hover:bg-surface" key={path} to={path}>{label}</NavLink>)}</nav>}
    </header>
    <main id="main-content"><Outlet/></main>
    <Footer/>
    <button onClick={()=>scrollTo({top:0,behavior:"smooth"})} className="no-print fixed bottom-22 right-4 grid size-11 place-items-center rounded-full border bg-surface shadow-lg md:bottom-5" aria-label="Back to top"><ArrowUp size={18}/></button>
    {siteSettings.floatingContactEnabled&&<div className="no-print fixed bottom-0 left-0 right-0 z-40 flex justify-center gap-2 border-t bg-surface/95 p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] md:bottom-5 md:left-auto md:right-18 md:flex-col md:rounded-full md:border md:p-2">
      {email&&<a className="grid size-11 place-items-center rounded-full hover:bg-background" href={email} aria-label="Email"><Mail size={19}/></a>}
      {whatsapp&&<a className="grid size-11 place-items-center rounded-full hover:bg-background" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={19}/></a>}
      {messenger&&<a className="grid size-11 place-items-center rounded-full hover:bg-background" href={messenger} target="_blank" rel="noopener noreferrer" aria-label="Messenger"><MessageCircle size={19}/></a>}
    </div>}
  </>;
}
function Footer(){
  return <footer className="no-print mt-24 border-t bg-surface/60"><div className="container-shell grid gap-8 py-10 md:grid-cols-2"><div><p className="font-semibold">MD. Abdul Lotif</p><p className="mt-3 max-w-xl text-sm leading-6 text-muted">IT and cybersecurity professional focused on secure, reliable, and research-driven digital systems.</p></div><div className="flex flex-wrap items-start gap-4 text-sm text-muted md:justify-end"><a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2"><Github size={16}/> GitHub</a><NavLink to="/responsible-disclosure">Responsible disclosure</NavLink><NavLink to="/accessibility">Accessibility</NavLink></div></div><div className="container-shell border-t py-5 text-xs text-muted">© {new Date().getFullYear()} MD. Abdul Lotif. All rights reserved.</div></footer>
}
