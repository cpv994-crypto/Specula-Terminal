import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface TagProps {
  children: ReactNode;
  tone?: 'default' | 'accent' | 'muted';
  className?: string;
}

export function Tag({ children, tone = 'default', className }: TagProps) {
  const toneClasses = {
    default: 'bg-[rgba(255,255,255,0.03)] border-[color:var(--border-weak)] text-[color:var(--text-muted)]',
    accent: 'bg-[rgba(92,200,255,0.12)] border-[color:var(--border-strong)] text-[color:var(--text)]',
    muted: 'bg-[rgba(255,255,255,0.02)] border-[color:var(--border-weak)] text-[color:var(--text-dim)]'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.15em]',
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
