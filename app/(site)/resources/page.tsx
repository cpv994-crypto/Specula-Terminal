import { GlassPanel } from '../../../components/ui/GlassPanel';
import { Tag } from '../../../components/ui/Tag';

const groups = [
  {
    title: 'Finance',
    links: ['Damodaran valuation archives', 'Liquidity research (placeholder)', 'Microstructure primers']
  },
  {
    title: 'Biology / Neuroscience',
    links: ['Sapolsky lectures', 'Systems biology references', 'Biosecurity playbooks']
  },
  {
    title: 'Philosophy',
    links: ['Ethics of technology — notes', 'Institutional design essays', 'Pragmatism & humanism reader']
  },
  {
    title: 'Great Books',
    links: ['Stoic and virtue ethics selections', 'Political economy canon', 'Classics for orientation']
  }
];

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <GlassPanel title="Resources" subtitle="Curated links — disciplined and finite" corner={<Tag tone="accent">Curation</Tag>}>
        <div className="grid gap-4 lg:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[color:var(--text)]">{group.title}</h3>
                <Tag tone="muted">List</Tag>
              </div>
              <ul className="space-y-2 text-sm text-[color:var(--text-muted)]">
                {group.links.map((link) => (
                  <li key={link} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}
