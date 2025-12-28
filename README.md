# Specula Terminal

This repository contains a minimal static terminal-style UI. Binary assets are intentionally omitted so pull requests stay text-only and friendly to PR review systems.

## Runtime assets

Place brand assets under `public/brand` before building or deploying:

- **Portrait**: Add your production portrait at `/public/brand/portrait.jpg`. The runtime view expects this file; when it is missing, the UI will show a styled placeholder panel that reads: `Portrait asset missing: /public/brand/portrait.jpg`.
- **Mark**: Replace `public/brand/specula-mark.svg` with the official Specula mark (SVG only).
- **Wordmark**: Replace `public/brand/specula-wordmark.svg` with the official Specula wordmark (SVG only).

A placeholder note lives at `public/brand/portrait-placeholder.txt` to keep the repository binary-free.

## Running locally

Serve the repository root with any static file server (for example, `python -m http.server 8000`) and open `http://localhost:8000/public/`. The UI will automatically fall back to the placeholder panel if `portrait.jpg` is not available.
