import { contact } from "./contact";
export const socialLinks = [
  { label: "GitHub", url: contact.githubUrl, enabled: Boolean(contact.githubUrl), external: true },
  { label: "LinkedIn", url: contact.linkedinUrl, enabled: Boolean(contact.linkedinUrl), external: true },
  { label: "Instagram", url: contact.instagramUrl, enabled: Boolean(contact.instagramUrl), external: true },
  { label: "Discord", url: contact.discordUrl, enabled: Boolean(contact.discordUrl), external: true },
  { label: "Messenger", url: contact.messengerUsername ? `https://m.me/${contact.messengerUsername}` : "", enabled: Boolean(contact.messengerUsername), external: true },
  { label: "WhatsApp", url: contact.whatsappNumber ? `https://wa.me/${contact.whatsappNumber}` : "", enabled: Boolean(contact.whatsappNumber), external: true },
  { label: "Facebook", url: contact.facebookUrl, enabled: Boolean(contact.facebookUrl), external: true },
  { label: "Telegram", url: contact.telegramUsername ? `https://t.me/${contact.telegramUsername}` : "", enabled: Boolean(contact.telegramUsername), external: true }
] as const;
