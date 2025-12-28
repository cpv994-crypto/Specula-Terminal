import Link from 'next/link';
import { GlassPanel } from '../../../../components/ui/GlassPanel';
import { Tag } from '../../../../components/ui/Tag';

export default function PortfolioHistoryPage() {
  return (
    <GlassPanel title="Portfolio history" subtitle="Records will land here" corner={<Tag tone="muted">Archive</Tag>}>
      <p className="text-sm text-[color:var(--text-muted)]">
        This placeholder will host downloadable portfolio history once the terminal is wired to data. Return to the{' '}
        <Link href="/model-portfolio" className="text-[color:var(--accent)]">
          model portfolio
        </Link>{' '}
        view.
      </p>
    </GlassPanel>
  );
}
