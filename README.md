# Specula Terminal

A Next.js 14 (App Router) + Tailwind CSS + TypeScript experience that renders a terminal-inspired site for Specula. The
application is fully routable with pages for the story, recent deployments, and contact signals—all driven by text-only assets
so PRs stay lightweight.

## Project structure

- `app/` – App Router pages and layouts.
- `components/` – Shared UI like the terminal chrome, navigation, and branding.
- `public/` – Runtime assets (SVG-only for marks and the optional portrait asset).
- `styles/` – Styling notes and supporting documentation.
- `tailwind.config.ts` – Theme tokens for the terminal aesthetic.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app uses typed routes and strict TypeScript settings. Run linting with:

```bash
npm run lint
```

## Runtime assets

Place brand assets under `public/brand` before building or deploying:

- **Portrait**: Add your production portrait at `/public/brand/portrait.jpg`. The Contact page attempts to load this file; when
  it is missing, the UI renders a styled placeholder panel that reads: `Portrait asset missing: /public/brand/portrait.jpg`.
- **Mark**: Replace `public/brand/specula-mark.svg` with the official Specula mark (SVG only).
- **Wordmark**: Replace `public/brand/specula-wordmark.svg` with the official Specula wordmark (SVG only).

A placeholder note lives at `public/brand/portrait-placeholder.txt` to keep the repository binary-free.
