# Direct contact setup

Edit `src/data/contact.ts`:

- Add a public email to enable `mailto:`.
- Add WhatsApp digits in international format without `+`; the prefilled message is URL encoded automatically.
- Add the Messenger username to enable `https://m.me/...`.
- Add LinkedIn, Facebook, GitHub, and Telegram details.
- Add a phone only if you want a public call link.

Empty methods are hidden. External links use a new tab with `noopener noreferrer`.
