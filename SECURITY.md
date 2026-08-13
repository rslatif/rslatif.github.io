# Security

This static site contains no backend, database, server authentication, permanent uploads, or direct SMTP connection.

- Never commit secrets or private documents.
- Treat every `VITE_` value as public.
- Markdown is rendered without unsafe HTML and passed through sanitisation.
- External URLs must use trusted HTTPS destinations.
- Contact input is validated and protected with a honeypot, cooldown, and duplicate-submit guard; EmailJS account-side limits remain essential.
- Run `npm audit` and apply supported package updates.

GitHub Pages has limited custom-header control. For stronger policies, place a compatible Content Security Policy in `index.html` after confirming EmailJS domains, or front the site with a provider that supports response headers. Recommended policies include `Referrer-Policy: strict-origin-when-cross-origin`, restrictive `Permissions-Policy`, and `X-Content-Type-Options: nosniff`.

Responsible-disclosure guidance is available at `#/responsible-disclosure`; it does not authorise testing.
