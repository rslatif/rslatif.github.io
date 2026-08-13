# EmailJS setup

1. Create an EmailJS account.
2. Add an email service and connect Gmail, Outlook, or another supported provider. Keep Gmail app passwords and SMTP credentials only inside EmailJS.
3. Create a template with: `from_name`, `from_email`, `company`, `subject`, `enquiry_type`, `message`, `page_url`, `submission_time`, and `to_name`.
4. Set **Reply-To** to `{{from_email}}`. Fix the recipient address inside the template or service; never accept a recipient field from the visitor.
5. Copy the public key, service ID, and template ID into `.env.local` using `.env.example`.
6. In EmailJS security settings, restrict allowed origins to local development and `https://rslotif.github.io`.
7. Add the same browser-facing identifiers as GitHub Actions secrets for the deployment workflow.
8. Submit a test and verify delivery and Reply-To behaviour in the configured inbox.
9. Monitor EmailJS request limits. Enable EmailJS-supported CAPTCHA if abuse occurs.
10. To rotate or disconnect, replace/revoke the EmailJS service or keys and update local/GitHub values.

Never put SMTP username/password, Gmail app password, or a private provider API key in the repository, GitHub build secrets, or `VITE_` variables; static builds expose bundled values.
