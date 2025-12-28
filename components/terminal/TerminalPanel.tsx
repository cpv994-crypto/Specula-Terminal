import type { ReactNode } from 'react';

interface TerminalPanelProps {
  title: string;
  subtitle?: string;
  accent?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function TerminalPanel({ title, subtitle, accent = 'Operational', actions, children }: TerminalPanelProps) {
  return (
    <section className="card-sheen relative overflow-hidden rounded-2xl border border-white/10 bg-terminal/80 shadow-xl backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/5 bg-chrome/70 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-rose-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">{accent}</span>
          {actions}
        </div>
      </div>
      <div className="terminal-grid relative h-full space-y-4 px-6 py-6">
        {children}
      </div>
    </section>
  );
}
