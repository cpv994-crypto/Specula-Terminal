import { GlassPanel } from '../../../components/ui/GlassPanel';
import { Tag } from '../../../components/ui/Tag';

const dispatches = [
  { title: 'Liquidity and Imagination', summary: 'Short brief on why funding cycles change our idea of the possible.', date: '2024-06-18' },
  { title: 'Quiet Signals', summary: 'A look at low-amplitude indicators that often precede consensus.', date: '2024-06-12' },
  { title: 'Execution without Spectacle', summary: 'Dispatch on operating in public while staying disciplined.', date: '2024-06-05' }
];

export default function NewsletterPage() {
  return (
    <div className="space-y-6">
      <GlassPanel
        title="Newsletter"
        subtitle="Curated dispatches — not daily noise"
        corner={<Tag tone="accent">Dispatch</Tag>}
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-3">
            {dispatches.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4 transition hover:border-[color:var(--border-strong)]"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)]">
                  <span>{item.date}</span>
                  <Tag tone="muted">Preview</Tag>
                </div>
                <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
                <p className="text-sm text-[color:var(--text-muted)]">{item.summary}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3 rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">Subscribe</p>
            <p className="text-sm text-[color:var(--text-muted)]">Built for thoughtful cadence. No automation yet — coming soon.</p>
            <input type="email" placeholder="Email address" />
            <button className="w-full rounded-lg border border-[color:var(--border-mid)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--border-strong)]">
              Subscribe (UI only)
            </button>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
