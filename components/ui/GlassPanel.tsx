import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface GlassPanelProps {
  title?: string;
  subtitle?: string;
  corner?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ title, subtitle, corner, children, className }: GlassPanelProps) {
  return (
    <section className={cn('glass relative overflow-hidden border border-[color:var(--border-mid)]', className)}>
      {(title || subtitle || corner) && (
        <div className="flex items-center justify-between gap-3 border-b border-[color:var(--border-weak)] px-5 py-4">
          <div className="space-y-1">
            {title && <h2 className="text-base font-semibold text-[color:var(--text)]">{title}</h2>}
            {subtitle && <p className="text-sm text-[color:var(--text-muted)]">{subtitle}</p>}
          </div>
          {corner}
        </div>
      )}
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}
