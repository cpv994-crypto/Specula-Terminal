# Specula Terminal

An institutional observation terminal built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. The interface trades
marketing gloss for a calm, glassy workspace inspired by Palantir Gotham and Reuters Eikon.

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

- **Mark**: `public/brand/specula-mark.svg` (SVG only).
- **Wordmark**: `public/brand/specula-wordmark.svg` (SVG only).
- **Portrait**: Optional `public/brand/portrait.jpg`. When absent, the Contact view renders a glass placeholder and reminders on
  how to supply the portrait locally.

A placeholder note lives at `public/brand/portrait-placeholder.txt` to keep the repository binary-free.

## Adding images

The repository must remain binary-free. To use a portrait later, place a JPEG at `/public/brand/portrait.jpg` in your local
environment; it is intentionally gitignored. All other brand assets must stay as text-only SVGs under `/public/brand`. Avoid
adding PNG/JPG/WebP/ICO files elsewhere in the repo.
