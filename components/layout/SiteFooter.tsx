import Link from 'next/link';

const links = [
  { href: 'https://github.com/specula', label: 'GitHub' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { href: 'mailto:hello@specula.example', label: 'Email' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background/80 py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-white">Specula Terminal</p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2 py-1 transition hover:bg-white/5 hover:text-white"
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
