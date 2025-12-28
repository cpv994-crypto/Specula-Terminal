'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/model-portfolio', label: 'Model Portfolio' },
  { href: '/financial-research', label: 'Research' },
  { href: '/signals', label: 'Signals' },
  { href: '/socio-economic/horizons', label: 'Horizons' },
  { href: '/socio-economic/essays', label: 'Essays' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/resources', label: 'Resources' },
  { href: '/framework', label: 'Framework' },
  { href: '/contact', label: 'Contact' }
];

export function TabNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 border-b border-[color:var(--border-weak)]/80 bg-[rgba(7,12,20,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href || pathname.startsWith(tab.href + '/');
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn('tab-chip px-3 py-2 text-sm', isActive && 'active')}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden text-xs text-[color:var(--text-dim)] sm:block">Specula Terminal</div>
      </div>
    </nav>
  );
}
