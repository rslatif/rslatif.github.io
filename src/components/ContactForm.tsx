import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormValues } from "@/schemas/contact";
import { contact } from "@/data/contact";

const timestamp=()=>Date.now();
const isoTimestamp=()=>new Date().toISOString();
export function ContactForm(){
 const [notice,setNotice]=useState<{ok:boolean;text:string}|null>(null); const [lastSent,setLastSent]=useState(0);
 const form=useForm<ContactFormValues>({resolver:zodResolver(contactSchema),defaultValues:{from_name:"",from_email:"",company:"",subject:"",enquiry_type:"General enquiry",message:"",consent:false as true,website:""}});
 async function submit(values:ContactFormValues){
  if(values.website)return; if(lastSent&&timestamp()-lastSent<60_000){setNotice({ok:false,text:"Please wait before sending another message."});return}
  const service=import.meta.env.VITE_EMAILJS_SERVICE_ID; const template=import.meta.env.VITE_EMAILJS_TEMPLATE_ID; const key=import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if(!service||!template||!key){
   const body=`Name: ${values.from_name}\nEmail: ${values.from_email}\nCompany: ${values.company || "Not provided"}\nEnquiry: ${values.enquiry_type}\n\n${values.message}`;
   window.open(`mailto:${contact.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`, "_self");
   setLastSent(timestamp()); form.reset(); setNotice({ok:true,text:"Your email app has been opened with the message ready to send."}); return;
  }
  setNotice(null);
  try{await emailjs.send(service,template,{...values,to_name:import.meta.env.VITE_CONTACT_RECEIVER_NAME,page_url:location.href,submission_time:isoTimestamp()},key);setLastSent(timestamp());form.reset();setNotice({ok:true,text:"Thanks. Your message was sent successfully."})}
  catch{setNotice({ok:false,text:"The message could not be sent. Please try again later."})}
 }
 const field="h-11 w-full rounded-xl border bg-background px-3 text-sm";
 return <form onSubmit={form.handleSubmit(submit)} className="card grid gap-5 p-6 sm:p-8" noValidate>
  <div className="grid gap-5 sm:grid-cols-2"><Field label="Full name" error={form.formState.errors.from_name?.message}><input className={field} autoComplete="name" {...form.register("from_name")}/></Field><Field label="Email" error={form.formState.errors.from_email?.message}><input className={field} type="email" autoComplete="email" {...form.register("from_email")}/></Field></div>
  <div className="grid gap-5 sm:grid-cols-2"><Field label="Company (optional)"><input className={field} {...form.register("company")}/></Field><Field label="Enquiry type"><select className={field} {...form.register("enquiry_type")}>{["Job opportunity","IT support","Cybersecurity project","Research collaboration","Freelance work","General enquiry"].map(x=><option key={x}>{x}</option>)}</select></Field></div>
  <Field label="Subject" error={form.formState.errors.subject?.message}><input className={field} {...form.register("subject")}/></Field>
  <Field label="Message" error={form.formState.errors.message?.message}><textarea className="min-h-40 rounded-xl border bg-background p-3" maxLength={4000} {...form.register("message")}/></Field>
  <label className="hidden">Website<input tabIndex={-1} autoComplete="off" {...form.register("website")}/></label>
  <label className="flex items-start gap-3 text-sm text-muted"><input className="mt-1" type="checkbox" {...form.register("consent")}/>I consent to this information being used to respond to my enquiry.</label>
  {form.formState.errors.consent&&<p className="text-sm text-red-500">{form.formState.errors.consent.message}</p>}
  {notice&&<p role="status" className={`rounded-xl p-3 text-sm ${notice.ok?"bg-emerald-500/10 text-emerald-600":"bg-red-500/10 text-red-500"}`}>{notice.text}</p>}
  <button disabled={form.formState.isSubmitting} className="h-12 rounded-full bg-brand font-medium text-white disabled:opacity-60">{form.formState.isSubmitting?"Sending…":"Send message"}</button>
 </form>
}
function Field({label,error,children}:{label:string;error?:string;children:React.ReactNode}){return <label className="grid gap-2 text-sm font-medium">{label}{children}{error&&<span className="font-normal text-red-500">{error}</span>}</label>}
