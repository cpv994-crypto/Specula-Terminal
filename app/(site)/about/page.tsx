import { PromptLine } from '../../../components/terminal/PromptLine';
import { TerminalPanel } from '../../../components/terminal/TerminalPanel';

const milestones = [
  {
    title: 'Antenna raised',
    timeframe: '2012 — 2016',
    detail: 'Built internal developer portals and observability standards for fast-moving product teams.'
  },
  {
    title: 'Narrative practice',
    timeframe: '2017 — 2020',
    detail: 'Led product storytelling workshops for distributed squads, pairing UX writing with delivery rituals.'
  },
  {
    title: 'Platform craft',
    timeframe: '2021 — 2023',
    detail:
      'Shipped TypeScript-first platforms, introduced design tokens, and improved release trains with feature flags and chaos drills.'
  },
  {
    title: 'Specula today',
    timeframe: 'Now',
    detail: 'Partnering with teams to steer strategy, elevate interfaces, and publish living documentation that endures.'
  }
];

const principles = [
  'Default to clarity—name the stakes, share the map, and make decisions legible.',
  'Ship durable primitives before painting gradients; let teams build on rails, not ruts.',
  'Every artifact should teach: PRs, docs, UI strings, dashboards, and demos.',
  'Operational excellence is cultural—incident reviews are about learning, not blame.'
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <TerminalPanel title="About" subtitle="Origin story and operating principles" accent="Up to date">
        <div className="space-y-6">
          <PromptLine label="~/about" command="cat README.md" />
          <p className="max-w-3xl text-lg text-muted">
            Specula is a studio-like terminal operated by a small group of product-minded engineers. The work blends
            experimentation with rigor: measurable outcomes, thoughtful design systems, and empathetic developer experiences.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-muted shadow-sm ring-1 ring-inset ring-white/5"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </TerminalPanel>

      <TerminalPanel title="Timeline" subtitle="Signals from the field" accent="Telemetry">
        <div className="grid gap-4 md:grid-cols-2">
          {milestones.map((milestone) => (
            <div key={milestone.title} className="rounded-2xl border border-white/10 bg-terminal/60 p-5 shadow-glow">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                <span>{milestone.timeframe}</span>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-[0.7rem] font-semibold text-accent">Logged</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-white">{milestone.title}</p>
              <p className="mt-2 text-sm text-muted">{milestone.detail}</p>
            </div>
          ))}
        </div>
      </TerminalPanel>
    </div>
  );
}
