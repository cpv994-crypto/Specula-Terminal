import Link from 'next/link';
import { Logo } from '../branding/Logo';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo className="text-sm font-semibold" />
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 font-medium transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent shadow-glow transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/20"
        >
          Book signal
        </Link>
      </div>
    </header>
  );
}
