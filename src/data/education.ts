import type { Education } from "@/types/content";
export const education: Education[] = [
  { id: "bsc", qualification: "BSc", institution: "Uttara University", description: "Add the official degree title, field, dates, result, and supporting information.", activities: [], featured: true, published: true, order: 1 },
  { id: "hsc", qualification: "HSC", institution: "Tista Degree College", field: "Science", completionYear: "2018", description: "Result and location not yet provided.", activities: [], featured: false, published: true, order: 2 },
  { id: "ssc", qualification: "SSC", institution: "Doani High School", field: "Science", completionYear: "2016", description: "Result and location not yet provided.", activities: [], featured: false, published: true, order: 3 }
];
