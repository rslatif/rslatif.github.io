import { describe, expect, it } from "vitest";
import { contactSchema } from "@/schemas/contact";

const valid = { from_name: "Test Person", from_email: "test@example.com", company: "", subject: "Research collaboration", enquiry_type: "Research collaboration", message: "This is a sufficiently detailed test enquiry message.", consent: true, website: "" };
describe("contact form validation", () => {
  it("accepts complete legitimate input", () => expect(contactSchema.safeParse(valid).success).toBe(true));
  it("rejects invalid email and short messages", () => expect(contactSchema.safeParse({ ...valid, from_email: "bad", message: "short" }).success).toBe(false));
  it("rejects a filled honeypot", () => expect(contactSchema.safeParse({ ...valid, website: "bot" }).success).toBe(false));
});
