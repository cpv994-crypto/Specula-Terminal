import Link from 'next/link';
import { GlassPanel } from '../../../components/ui/GlassPanel';
import { Tag } from '../../../components/ui/Tag';

const holdings = [
  { ticker: 'SPX', weight: '42%', thesis: 'US large-cap earnings durability; optionality via calls.', intrinsic: 'Long-term ROIC drift', target: 'Quality tilt', status: 'Core' },
  { ticker: 'UST', weight: '18%', thesis: 'Convexity in disinflation windows; carry neutral.', intrinsic: 'Rate hedge', target: 'Duration bands', status: 'Active' },
  { ticker: 'GLD', weight: '7%', thesis: 'Monetary debasement hedge; geopolitical convexity.', intrinsic: 'Store of trust', target: 'Hold', status: 'Satellite' },
  { ticker: 'SMH', weight: '15%', thesis: 'Compute + energy leverage; disciplined sizing.', intrinsic: 'Secular stack', target: 'Tranche', status: 'Tactical' },
  { ticker: 'CASH', weight: '18%', thesis: 'Dry powder while volatility signal calibrates.', intrinsic: 'Option on clarity', target: 'Deployed when spreads widen', status: 'Reserve' }
];

export default function ModelPortfolioPage() {
  return (
    <div className="space-y-6">
      <GlassPanel
        title="Model Portfolio"
        subtitle="Allocation scaffold — disciplined, calm, and liquid-aware"
        corner={<Tag tone="accent">Observation</Tag>}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-6">
            <div className="relative h-56 w-56 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(92,200,255,0.34)_0deg,rgba(92,200,255,0.34)_150deg,rgba(255,255,255,0.08)_150deg,rgba(255,255,255,0.08)_230deg,rgba(255,255,255,0.02)_230deg,rgba(255,255,255,0.02)_360deg)]">
              <div className="absolute inset-10 rounded-full border border-[color:var(--border-mid)] bg-[rgba(7,12,20,0.82)]" />
              <div className="absolute inset-14 flex items-center justify-center rounded-full border border-[color:var(--border-weak)] bg-[rgba(92,200,255,0.08)] text-sm font-semibold text-[color:var(--text)]">
                Allocation
              </div>
            </div>
            <p className="text-center text-sm text-[color:var(--text-muted)]">
              Conic gradient is illustrative only. Live allocation will route to data feeds and scenario flags.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-[color:var(--text-muted)]">
              <span>Holdings table</span>
              <Link
                href="/model-portfolio/history"
                className="rounded-lg border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)]"
              >
                Portfolio history
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl border border-[color:var(--border-weak)]">
              <div className="grid grid-cols-6 bg-[rgba(255,255,255,0.02)] px-4 py-3 text-xs uppercase tracking-[0.12em] text-[color:var(--text-dim)]">
                <span>Ticker</span>
                <span>Weight</span>
                <span className="col-span-2">Thesis</span>
                <span>Intrinsic</span>
                <span>Status</span>
              </div>
              <div className="divide-y divide-[color:var(--border-weak)]/80">
                {holdings.map((row) => (
                  <div key={row.ticker} className="grid grid-cols-6 items-start gap-3 px-4 py-3 text-sm text-[color:var(--text-muted)]">
                    <span className="font-semibold text-[color:var(--text)]">{row.ticker}</span>
                    <span>{row.weight}</span>
                    <span className="col-span-2">{row.thesis}</span>
                    <span>{row.intrinsic}</span>
                    <span className="text-[color:var(--text-dim)]">{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
