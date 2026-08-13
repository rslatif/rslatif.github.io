# Content editing guide

All portfolio data is edited without component changes:

- Profile, headline, roles, photo, and CV: `src/data/profile.ts`
- Public email, WhatsApp, Messenger, LinkedIn, GitHub, phone, and response time: `src/data/contact.ts`
- Theme, Services, floating contact, canonical URL, and localisation foundation: `src/data/siteSettings.ts`
- Navigation: `src/data/navigation.ts`
- Skills: `src/data/skills.ts`
- Experience: `src/data/experience.ts`
- Projects: `src/data/projects.ts`
- UMVAF research: `src/data/research.ts`
- Education: `src/data/education.ts`
- Certifications: `src/data/certifications.ts`
- Achievements, services, and testimonials: their matching files in `src/data/`
- Blog: Markdown files in `src/content/blog/`

Set `published: true` only after verifying a record. Set `featured: true` to allow it on featured surfaces. Lower `order` values appear first. Missing URLs should be empty strings; the interface hides their buttons.

Images belong under the matching `public/images/` subfolder and are referenced with root paths such as `/images/projects/example.webp`. Add the verified CV as `public/documents/cv.pdf`. Do not place private documents in `public/`.

Blog front matter supports `title`, `slug`, `excerpt`, `date`, `updatedDate`, `category`, comma-separated `tags`, `coverImage`, `featured`, `published`, `seoTitle`, and `seoDescription`.
