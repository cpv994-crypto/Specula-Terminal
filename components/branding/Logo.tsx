import Image from 'next/image';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
  showWordmark?: boolean;
}

export function Logo({ showWordmark = true, className = '', ...props }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 text-white transition hover:text-accent ${className}`}
      {...props}
    >
      <Image
        src="/brand/specula-mark.svg"
        alt="Specula mark"
        width={44}
        height={44}
        priority
        className="drop-shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
      />
      {showWordmark && (
        <Image
          src="/brand/specula-wordmark.svg"
          alt="Specula wordmark"
          width={150}
          height={28}
          priority
          className="transition group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
