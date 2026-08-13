export interface BlogPost { title:string;slug:string;excerpt:string;date:string;updatedDate?:string;category:string;tags:string[];coverImage?:string;featured:boolean;published:boolean;seoTitle?:string;seoDescription?:string;content:string }
function parse(source:string):BlogPost{
 const match=source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/); const meta:Record<string,string>={};
 if(match) for(const line of match[1].split(/\r?\n/)){const i=line.indexOf(":");if(i>0)meta[line.slice(0,i).trim()]=line.slice(i+1).trim().replace(/^["']|["']$/g,"")}
 return {title:meta.title??"Untitled",slug:meta.slug??"",excerpt:meta.excerpt??"",date:meta.date??"",updatedDate:meta.updatedDate,category:meta.category??"General",tags:(meta.tags??"").split(",").map(x=>x.trim()).filter(Boolean),coverImage:meta.coverImage,featured:meta.featured==="true",published:meta.published==="true",seoTitle:meta.seoTitle,seoDescription:meta.seoDescription,content:match?.[2]??source}
}
const sources=import.meta.glob<string>("/src/content/blog/*.md",{query:"?raw",import:"default",eager:true});
export const blogPosts=Object.values(sources).map(parse).filter(x=>x.published).sort((a,b)=>b.date.localeCompare(a.date));
