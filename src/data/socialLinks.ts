import { contact } from "./contact";
export const socialLinks = [
  { label: "GitHub", url: contact.githubUrl, enabled: Boolean(contact.githubUrl), external: true },
  { label: "LinkedIn", url: contact.linkedinUrl, enabled: Boolean(contact.linkedinUrl), external: true },
  { label: "Facebook", url: contact.facebookUrl, enabled: Boolean(contact.facebookUrl), external: true },
  { label: "Telegram", url: contact.telegramUsername ? `https://t.me/${contact.telegramUsername}` : "", enabled: Boolean(contact.telegramUsername), external: true }
] as const;
