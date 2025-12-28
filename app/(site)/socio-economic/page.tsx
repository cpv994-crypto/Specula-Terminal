import Link from 'next/link';
import { GlassPanel } from '../../../components/ui/GlassPanel';
import { Tag } from '../../../components/ui/Tag';

export default function SocioEconomicPage() {
  return (
    <div className="space-y-6">
      <GlassPanel
        title="Socio-Economic"
        subtitle="Frameworks for the civilizational transition"
        corner={<Tag tone="accent">Observation</Tag>}
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Link
            href="/socio-economic/horizons"
            className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-5 transition hover:border-[color:var(--border-strong)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">Horizons</p>
            <h3 className="text-lg font-semibold text-[color:var(--text)]">Timeline of the next decades</h3>
            <p className="text-sm text-[color:var(--text-muted)]">2030 → 2055 waypoints and the evidence required to move between them.</p>
          </Link>
          <Link
            href="/socio-economic/essays"
            className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-5 transition hover:border-[color:var(--border-strong)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">Essays</p>
            <h3 className="text-lg font-semibold text-[color:var(--text)]">Long-form observation</h3>
            <p className="text-sm text-[color:var(--text-muted)]">Polished writing that blends finance, philosophy, and design.</p>
          </Link>
        </div>
      </GlassPanel>
    </div>
  );
}
