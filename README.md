# Dejvi Dervishi — Portfolio

Personal portfolio at [dejvidervishi.com](https://www.dejvidervishi.com/), built with Next.js, React, and Tailwind CSS.

## Run locally

Use Node.js 22 (`nvm use`), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To check a production build:

```sh
npm run lint
npm run build
npm start
```

## Content and structure

- `src/constants/index.js`: projects, selected experience, and skills.
- `src/app/components`: page sections. Most render on the server; navigation and the contact form use browser interactions.
- `src/app/globals.css`: shared styles, keyboard focus, anchor spacing, and reduced-motion support.
- `src/app/layout.js` and `opengraph-image.js`: page metadata and social preview.

The contact form preserves the existing EmailJS service and template configuration through `NEXT_PUBLIC_SERVICE`, `NEXT_PUBLIC_TEMPLATE`, and `NEXT_PUBLIC_KEY`. Set these in the deployment environment as before. If they are unavailable locally, the form shows a direct-email fallback. No server email endpoint is required.

## Deployment and checks

Vercel’s GitHub integration builds deployments and serves the custom domain. Check the Vercel project settings for the connected repository, production branch, and environment configuration.

The `Check portfolio` GitHub Actions workflow runs installation, lint, and a production build on pull requests and pushes to `main`. It does not publish a deployment. Dependabot’s dependency-update workflow is separate.
