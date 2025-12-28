import Link from 'next/link';

const links = [
  { href: 'https://github.com/specula', label: 'GitHub' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { href: 'mailto:contact@specula.terminal', label: 'Email' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border-weak)]/80 bg-[rgba(7,12,20,0.82)] px-4 py-6 text-sm text-[color:var(--text-muted)] backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">Specula Terminal</p>
        <div className="flex flex-wrap items-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-[color:var(--text-muted)] transition hover:bg-[rgba(255,255,255,0.05)] hover:text-[color:var(--text)]"
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
