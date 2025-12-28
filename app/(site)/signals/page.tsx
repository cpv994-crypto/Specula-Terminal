import { GlassPanel } from '../../../components/ui/GlassPanel';
import { Tag } from '../../../components/ui/Tag';

const watchlist = [
  { label: 'Liquidity impulse', note: 'Treasury cash balance + RRP dynamics.' },
  { label: 'Dealer balance sheet', note: 'Capacity for inventory absorption.' },
  { label: 'Cross-asset vol', note: 'FX ↔ Rates correlation drift.' }
];

const triggers = [
  { label: 'Credit widening', value: 'IG > +20bps weekly' },
  { label: 'Curve steepening', value: '2s10s +35bps in 30d' },
  { label: 'Funding cracks', value: 'SOFR-OIS > 30bps' }
];

export default function SignalsPage() {
  return (
    <div className="space-y-6">
      <GlassPanel
        title="Signals"
        subtitle="Terminal board for watchlist, triggers, and logging"
        corner={<Tag tone="accent">Signals</Tag>}
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-3 rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)]">
              <span>Watchlist</span>
              <Tag tone="muted">Placeholder</Tag>
            </div>
            <div className="space-y-2 text-sm text-[color:var(--text-muted)]">
              {watchlist.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] px-3 py-2"
                >
                  <span>{item.label}</span>
                  <span className="text-[color:var(--text-dim)]">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3 rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)]">
              <span>Triggers</span>
              <Tag tone="muted">Thresholds</Tag>
            </div>
            <div className="space-y-2 text-sm text-[color:var(--text-muted)]">
              {triggers.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] px-3 py-2"
                >
                  <span>{item.label}</span>
                  <span className="text-[color:var(--text-dim)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)]">
            <span>Log Signal</span>
            <Tag tone="muted">Journal</Tag>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <input placeholder="Narrative or signal" />
            <input placeholder="Source / feed" />
            <textarea placeholder="Detail" className="sm:col-span-2" rows={3} />
          </div>
          <div className="mt-3 flex justify-end">
            <button className="rounded-lg border border-[color:var(--border-mid)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--border-strong)]">
              Store entry (placeholder)
            </button>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
