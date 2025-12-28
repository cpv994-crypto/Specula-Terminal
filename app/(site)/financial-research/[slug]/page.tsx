import { notFound } from 'next/navigation';
import { GlassPanel } from '../../../../components/ui/GlassPanel';
import { Tag } from '../../../../components/ui/Tag';
import { researchNotes } from '../../../../data/research';

interface ResearchPageProps {
  params: { slug: string };
}

export default function ResearchDetailPage({ params }: ResearchPageProps) {
  const note = researchNotes.find((item) => item.slug === params.slug);

  if (!note) {
    return notFound();
  }

  return (
    <GlassPanel
      title={note.title}
      subtitle={`${note.sector} — ${note.date}`}
      corner={<Tag tone="accent">{note.status}</Tag>}
      className="space-y-4"
    >
      <div className="space-y-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
        <p>
          This placeholder briefing keeps the frame narrow: describe the causal chain, articulate the assumptions, and state the
          observation that would invalidate the thesis. The real write-up will live-linked to models and data.
        </p>
        <p>
          Current stance: track funding spreads, policy impulses, and positioning to judge whether the risk premium being paid is
          adequate. Focus on scenario envelopes rather than point forecasts.
        </p>
        <p className="text-[color:var(--text-dim)]">
          You are reading a mock entry. Production research will be versioned, sourced, and tagged with confidence intervals.
        </p>
      </div>
    </GlassPanel>
  );
}
