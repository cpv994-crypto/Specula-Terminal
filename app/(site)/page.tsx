import Link from 'next/link';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { Tag } from '../../components/ui/Tag';
import { Metric } from '../../components/ui/Metric';

const researchItems = [
  { title: 'Funding Stress Scans', meta: 'Liquidity | Draft', description: 'Mapping roll-over risk and counterparty drift across prime brokers.' },
  { title: 'Energy System Rebuild', meta: 'Transition | Monitoring', description: 'Grid resilience, demand shaping, and long-duration storage narratives.' },
  { title: 'Capital Markets Plumbing', meta: 'Microstructure | Note', description: 'Clearing, collateral chains, and the quiet infrastructure of risk.' }
];

const essayItems = [
  { title: 'Observation over Hype', meta: 'Essay | 8 min', description: 'Calm analysis as the only hedge against exponential storytelling.' },
  { title: 'Fragility Index', meta: 'Memo | 6 min', description: 'Thinking in failure modes when incentives drift and models lag reality.' },
  { title: 'Designing for Dignity', meta: 'Essay | 10 min', description: 'Institutions that treat humans as ends, while scaling through technology.' }
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <GlassPanel className="border border-[color:var(--border-strong)] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-[color:var(--text-muted)]">
              <span className="mono text-[color:var(--accent)]">specula@terminal</span>
              <span className="mono text-[color:var(--text-dim)]">~$</span>
              <span className="mono text-[color:var(--text)]">observation --initiate</span>
              <span className="inline-block h-4 w-[2px] animate-cursor-blink bg-[color:var(--accent)]" />
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--text-dim)]">Specula — Future Observation Terminal</p>
              <h1 className="text-3xl font-semibold leading-tight text-[color:var(--text)] sm:text-4xl">
                look at the right direction
              </h1>
              <p className="max-w-3xl text-lg text-[color:var(--text-muted)]">
                Investment + socio-economic research + philosophy + art. Designed to reduce uncertainty and anticipate the
                civilizational transition.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/model-portfolio"
                className="rounded-xl border border-[color:var(--border-mid)] bg-[rgba(92,200,255,0.12)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] shadow-glow transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)]"
              >
                Enter Terminal
              </Link>
              <Link
                href="/framework"
                className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)]"
              >
                Read the Framework
              </Link>
            </div>
          </div>
          <div className="grid w-full max-w-md gap-3 rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4 text-sm text-[color:var(--text-muted)] lg:w-auto">
            <div className="flex items-center justify-between rounded-lg border border-[color:var(--border-weak)]/60 bg-[rgba(255,255,255,0.02)] px-3 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)]">Operating Mode</p>
                <p className="text-sm font-semibold text-[color:var(--text)]">Observation</p>
              </div>
              <Tag tone="accent">Live</Tag>
            </div>
            <Metric label="Noise filter" value="High discipline" hint="Narratives slowed for clarity." />
            <Metric label="Risk posture" value="Calm / Positioned" hint="Holding optionality; awaiting liquidity shift." />
            <Metric label="Latency" value="Sub-100ms" hint="Interface tuned for signal not spectacle." />
          </div>
        </div>
      </GlassPanel>

      <div className="grid gap-4 lg:grid-cols-3">
        <GlassPanel title="Model Portfolio" subtitle="Allocation view" corner={<Tag tone="muted">Mock</Tag>}>
          <div className="flex items-center gap-4">
            <div className="relative h-32 w-32 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(92,200,255,0.35)_0deg,rgba(92,200,255,0.35)_120deg,rgba(255,255,255,0.08)_120deg,rgba(255,255,255,0.08)_210deg,rgba(255,255,255,0.02)_210deg,rgba(255,255,255,0.02)_360deg)]">
              <div className="absolute inset-5 rounded-full border border-[color:var(--border-weak)] bg-[rgba(7,12,20,0.85)]" />
            </div>
            <div className="space-y-2 text-sm text-[color:var(--text-muted)]">
              <p>Equities / Rate hedges / Optionality sleeves.</p>
              <p className="text-[color:var(--text-dim)]">Ring is illustrative; live data forthcoming.</p>
            </div>
          </div>
        </GlassPanel>
        <GlassPanel title="Signals" subtitle="Watchlist" corner={<Tag tone="muted">Ingest</Tag>}>
          <div className="space-y-3 text-sm text-[color:var(--text-muted)]">
            <div className="flex items-center justify-between rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] px-3 py-2">
              <span>Funding spreads</span>
              <span className="text-[color:var(--text-dim)]">Filter: 3m roll</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] px-3 py-2">
              <span>Vol surfaces</span>
              <span className="text-[color:var(--text-dim)]">Filter: FX + Rates</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] px-3 py-2">
              <span>Microstructure drift</span>
              <span className="text-[color:var(--text-dim)]">Filter: Order book</span>
            </div>
          </div>
        </GlassPanel>
        <GlassPanel title="Horizons" subtitle="Future timeline" corner={<Tag tone="muted">2030 → 2055</Tag>}>
          <div className="space-y-2 text-sm text-[color:var(--text-muted)]">
            <p>Waypoints across the transition.</p>
            <ul className="space-y-2 text-[color:var(--text-dim)]">
              <li>2030 — AI agency + energy strain.</li>
              <li>2035 — Compute regulation + biosecurity norms.</li>
              <li>2045 — Orbital industry + synthetic biology scaling.</li>
            </ul>
          </div>
        </GlassPanel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <GlassPanel title="Latest Financial Research" subtitle="Three most recent briefings" corner={<Tag tone="accent">Research</Tag>}>
          <div className="space-y-3">
            {researchItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4 transition hover:border-[color:var(--border-strong)]"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-dim)]">{item.meta}</p>
                <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
                <p className="text-sm text-[color:var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel title="Latest Essays" subtitle="Narratives + analysis" corner={<Tag tone="accent">Socio-Economic</Tag>}>
          <div className="space-y-3">
            {essayItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4 transition hover:border-[color:var(--border-strong)]"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-dim)]">{item.meta}</p>
                <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
                <p className="text-sm text-[color:var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
