import { TerminalPanel } from '../../../components/terminal/TerminalPanel';

const deployments = [
  {
    name: 'Constellation UI',
    stack: 'Next.js · TypeScript · Tailwind',
    status: 'Live',
    summary: 'Design system and story-driven component docs powering multiple product lines.'
  },
  {
    name: 'Signal Relay',
    stack: 'Edge Functions · WebSockets',
    status: 'Beta',
    summary: 'Real-time collaboration layer for product reviews and incident response runbooks.'
  },
  {
    name: 'Waypoint',
    stack: 'Node · GraphQL · Postgres',
    status: 'Complete',
    summary: 'Delivery workflow with feature flags, release audits, and SLO-aware deployments.'
  },
  {
    name: 'Echo Notes',
    stack: 'React · MDX · Content Layer',
    status: 'Alpha',
    summary: 'Knowledge base that pairs architecture decision records with interactive prototypes.'
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <TerminalPanel title="Deployments" subtitle="Selected builds and prototypes" accent="Shipping">
        <div className="grid gap-4 md:grid-cols-2">
          {deployments.map((deployment) => (
            <div key={deployment.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                <span>{deployment.stack}</span>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-[0.7rem] font-semibold text-accent">{deployment.status}</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-white">{deployment.name}</p>
              <p className="mt-2 text-sm text-muted">{deployment.summary}</p>
            </div>
          ))}
        </div>
      </TerminalPanel>

      <TerminalPanel title="Delivery rituals" subtitle="How the work ships" accent="Method">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Workshop the map',
              detail: 'Story mapping, system diagrams, and expectation setting with stakeholders before the first commit.'
            },
            {
              title: 'Ship in daylight',
              detail: 'Small PRs, preview deployments, and pairing sessions keep the team confident and aligned.'
            },
            {
              title: 'Document the trail',
              detail: 'Release notes, ADRs, and terminal logs capture decisions so future teams can move quickly.'
            }
          ].map((ritual) => (
            <div key={ritual.title} className="rounded-xl border border-white/10 bg-terminal/60 p-4 text-sm text-muted">
              <p className="text-base font-semibold text-white">{ritual.title}</p>
              <p className="mt-2 text-muted">{ritual.detail}</p>
            </div>
          ))}
        </div>
      </TerminalPanel>
    </div>
  );
}
