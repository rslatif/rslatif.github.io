export function PageHero({eyebrow,title,description}:{eyebrow:string;title:string;description:string}){
 return <header className="border-b"><div className="container-shell py-18 sm:py-24"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{description}</p></div></header>;
}
