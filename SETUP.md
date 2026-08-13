# Local setup

1. Install a current Node.js LTS release and Git.
2. Clone the repository as `rslotif.github.io`.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Edit files in `src/data/` and keep unverified items unpublished.
6. Run `npm run dev`.
7. Before pushing, run lint, type-check, tests, and build.

Vite environment values beginning with `VITE_` are public in the browser bundle. Never put SMTP credentials or private secrets in them.
