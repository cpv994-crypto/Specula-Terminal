import { GlassPanel } from '../../../../components/ui/GlassPanel';
import { Tag } from '../../../../components/ui/Tag';

const horizons = [
  { year: 2030, focus: 'AI agency + energy strain', note: 'Expect policy drag on compute; grid bottlenecks force pricing reform.' },
  { year: 2035, focus: 'Compute regulation + biosecurity', note: 'Licensing, verification regimes, and defensive biological standards.' },
  { year: 2045, focus: 'Orbital industry + synthetic biology', note: 'New supply chains require trust scaffolds and resilient capital.' },
  { year: 2055, focus: 'Post-scarcity myths tested', note: 'Institutions decide whether abundance improves dignity or fragments it.' }
];

export default function HorizonsPage() {
  return (
    <div className="space-y-6">
      <GlassPanel
        title="Horizons"
        subtitle="Future timeline — grounded in evidence, wary of spectacle"
        corner={<Tag tone="accent">Timeline</Tag>}
      >
        <div className="space-y-4">
          {horizons.map((item) => (
            <div
              key={item.year}
              className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-5 transition hover:border-[color:var(--border-strong)]"
            >
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-[color:var(--text-dim)]">
                <span>{item.year}</span>
                <Tag tone="muted">Placeholder</Tag>
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--text)]">{item.focus}</h3>
              <p className="text-sm text-[color:var(--text-muted)]">{item.note}</p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}
