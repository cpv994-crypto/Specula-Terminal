import { notFound } from 'next/navigation';
import { GlassPanel } from '../../../../../../components/ui/GlassPanel';
import { Tag } from '../../../../../../components/ui/Tag';
import { essays } from '../../../../../../data/essays';

interface EssayPageProps {
  params: { slug: string };
}

export default function EssayPage({ params }: EssayPageProps) {
  const essay = essays.find((item) => item.slug === params.slug);

  if (!essay) {
    return notFound();
  }

  return (
    <GlassPanel title={essay.title} subtitle={`${essay.date} • ${essay.length}`} corner={<Tag tone="accent">Preview</Tag>}>
      <div className="space-y-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
        <p>
          This long-form slot is reserved for essays on humanism, institutions, and the technological horizon. Each piece will be
          edited like an investment memo: crisp stakes, evidence, and a disciplined reluctance to speculate.
        </p>
        <p>
          Until full drafts ship, treat this as scaffolding. The narrative spine will connect financial architecture, socio-economic
          design, and the philosophy guiding both.
        </p>
      </div>
    </GlassPanel>
  );
}
