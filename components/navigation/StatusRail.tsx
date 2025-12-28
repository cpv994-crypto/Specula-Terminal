'use client';

import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

function StatusDot({ tone = 'ok' }: { tone?: 'ok' | 'danger' | 'muted' }) {
  const toneMap = {
    ok: 'bg-[color:var(--ok)] shadow-[0_0_0_6px_rgba(46,229,157,0.1)]',
    danger: 'bg-[color:var(--danger)] shadow-[0_0_0_6px_rgba(255,77,109,0.1)]',
    muted: 'bg-[color:var(--text-dim)]'
  };
  return <span className={cn('h-2.5 w-2.5 rounded-full', toneMap[tone])} />;
}

export function StatusRail() {
  const [now, setNow] = useState<string>('');

  useEffect(() => {
    const update = () => setNow(new Date().toLocaleString('en-US', { hour12: false }));
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <aside className="sticky top-0 z-20 hidden h-screen w-64 border-r border-[color:var(--border-weak)]/70 bg-[rgba(7,12,20,0.82)] px-4 py-6 backdrop-blur-xl lg:block">
      <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)]">
        <span>Status</span>
        <span>Terminal</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] px-3 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">System</p>
            <p className="text-sm font-semibold text-[color:var(--text)]">ONLINE</p>
          </div>
          <StatusDot />
        </div>
        <div className="space-y-2 rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">Timestamp</p>
          <p className="text-sm font-semibold text-[color:var(--text)]">{now || 'Synchronizing...'}</p>
        </div>
        <div className="space-y-2 rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">Signal Level</p>
            <StatusDot tone="muted" />
          </div>
          <p className="text-sm text-[color:var(--text-muted)]">Awaiting live feed. Placeholder indicators active.</p>
        </div>
        <div className="space-y-2 rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">Liquidity Regime</p>
            <StatusDot tone="muted" />
          </div>
          <p className="text-sm text-[color:var(--text-muted)]">Calibrated to neutral. Awaiting market data.</p>
        </div>
      </div>
    </aside>
  );
}
