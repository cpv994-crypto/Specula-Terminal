import Image from 'next/image';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
  showWordmark?: boolean;
}

export function Logo({ showWordmark = true, className = '', ...props }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-3 text-[color:var(--text)] transition hover:text-[color:var(--accent)]',
        className
      )}
      {...props}
    >
      <Image src="/brand/specula-mark.svg" alt="Specula mark" width={36} height={36} priority className="opacity-90" />
      {showWordmark && (
        <Image
          src="/brand/specula-wordmark.svg"
          alt="Specula wordmark"
          width={132}
          height={22}
          priority
          className="opacity-90 transition group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
