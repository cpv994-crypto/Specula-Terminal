import Link from 'next/link';
import { GlassPanel } from '../../../../../components/ui/GlassPanel';
import { Tag } from '../../../../../components/ui/Tag';
import { essays } from '../../../../../data/essays';

export default function EssaysPage() {
  return (
    <div className="space-y-6">
      <GlassPanel title="Essays" subtitle="Long-form reflections" corner={<Tag tone="accent">Essays</Tag>}>
        <div className="space-y-3">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/socio-economic/essays/${essay.slug}`}
              className="block rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-5 transition hover:border-[color:var(--border-strong)]"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)]">
                <span>{essay.date}</span>
                <span>{essay.length}</span>
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--text)]">{essay.title}</h3>
              <p className="text-sm text-[color:var(--text-muted)]">{essay.teaser}</p>
            </Link>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}
