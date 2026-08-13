import { z } from "zod";
export const contactSchema = z.object({
  from_name: z.string().trim().min(2, "Enter your full name.").max(100),
  from_email: z.string().trim().email("Enter a valid email address.").max(254),
  company: z.string().trim().max(120).optional(),
  subject: z.string().trim().min(3).max(150),
  enquiry_type: z.enum(["Job opportunity", "IT support", "Cybersecurity project", "Research collaboration", "Freelance work", "General enquiry"]),
  message: z.string().trim().min(20, "Please provide at least 20 characters.").max(4000),
  consent: z.literal(true, { error: "Consent is required to send this enquiry." }),
  website: z.string().max(0).optional()
});
export type ContactFormValues = z.infer<typeof contactSchema>;
