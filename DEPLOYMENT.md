# GitHub Pages deployment

1. Create the GitHub repository named exactly `rslotif.github.io` under the `rslotif` account.
2. Push this project to the `main` branch.
3. In **Settings > Pages**, choose **GitHub Actions** as the source.
4. In **Settings > Secrets and variables > Actions**, add:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_CONTACT_RECEIVER_NAME`
5. Push to `main`. The workflow installs dependencies, runs lint, type-check, tests, builds, and deploys only after all checks pass.
6. Open `https://rslotif.github.io`.
7. Verify CSS, assets, HashRouter navigation, contact links, EmailJS delivery, CV download, and mobile behaviour.

The repository name and root `base: "/"` are intentional. HashRouter prevents direct route refreshes from returning GitHub Pages 404 responses.
