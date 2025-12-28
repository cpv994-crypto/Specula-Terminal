import Link from 'next/link';
import { TerminalShell } from '../../../components/layout/TerminalShell';
import { Tag } from '../../../components/ui/Tag';
import { researchNotes } from '../../../data/research';

export default function FinancialResearchPage() {
  return (
    <div className="space-y-6">
      <TerminalShell title="Financial Research" description="Calm, disciplined notes across sectors and liquidity regimes">
        <div className="mb-4 grid gap-3 sm:grid-cols-3">
          <input placeholder="Search research" className="sm:col-span-1" />
          <select>
            <option>Sector</option>
            <option>Macro Liquidity</option>
            <option>Real Assets</option>
            <option>Semiconductors</option>
          </select>
          <select>
            <option>Status</option>
            <option>Draft</option>
            <option>Monitoring</option>
            <option>In Review</option>
          </select>
          <select>
            <option>Date</option>
            <option>Recent</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="grid gap-4">
          {researchNotes.map((note) => (
            <div
              key={note.slug}
              className="flex flex-col gap-3 rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4 transition hover:border-[color:var(--border-strong)] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)]">
                  <Tag tone="muted">{note.sector}</Tag>
                  <span>{note.status}</span>
                  <span>{note.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-[color:var(--text)]">{note.title}</h3>
                <p className="text-sm text-[color:var(--text-muted)]">{note.summary}</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <Link
                  href={`/financial-research/${note.slug}`}
                  className="rounded-lg border border-[color:var(--border-mid)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--border-strong)]"
                >
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      </TerminalShell>
    </div>
  );
}
