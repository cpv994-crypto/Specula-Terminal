import Link from 'next/link';
import { Logo } from '../../components/branding/Logo';
import { PromptLine } from '../../components/terminal/PromptLine';
import { TerminalPanel } from '../../components/terminal/TerminalPanel';

const capabilities = [
  'Full-stack TypeScript and React delivery.',
  'Product storytelling that keeps teams aligned.',
  'Developer experience, tooling, and platform care.',
  'Design systems that feel like craft, not config.'
];

const signals = [
  { label: 'Latency Budget', value: '~45ms TTFB across primary endpoints.' },
  { label: 'Operational Posture', value: 'SLOs at 99.9%; progressive delivery toggles live.' },
  { label: 'Discovery', value: 'Narratives and notes captured weekly in living ADRs.' },
  { label: 'Community', value: 'Mentorship hours open each Friday for builders.' }
];

const routes = [
  { href: '/about', label: 'Read the story', description: 'Origin, principles, and the working model.' },
  { href: '/projects', label: 'Scan deployments', description: 'A curated set of shipped work and prototypes.' },
  { href: '/contact', label: 'Book a signal', description: 'Schedule a call or request a readiness audit.' }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <TerminalPanel
        title="Specula Terminal"
        subtitle="Tactical storytelling for people shipping resilient software."
        accent="Live"
        actions={<Logo showWordmark={false} />}
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <PromptLine label="/usr/specula" command="npm run focus" />
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Strategy, narrative, and interfaces for teams that want their tools to feel like magic.
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Specula blends product sense, engineering discipline, and interface craft. The terminal is an always-on status board
              that keeps stakeholders aligned while new capabilities ship.
            </p>
            <div className="flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted shadow-sm"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-4 shadow-glow">
            <div className="flex items-center justify-between text-sm text-muted">
              <span>Telemetry feed</span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">Clean</span>
            </div>
            <div className="divide-y divide-white/5 rounded-lg border border-white/10 bg-terminal/70">
              {signals.map((signal) => (
                <div key={signal.label} className="flex items-center justify-between gap-3 px-4 py-3">
                  <p className="text-sm font-semibold text-white">{signal.label}</p>
                  <p className="text-sm text-muted">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TerminalPanel>

      <div className="grid gap-6 lg:grid-cols-3">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="group relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md transition hover:-translate-y-1 hover:border-accent hover:shadow-glow"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">{route.label}</span>
              <span className="text-accent-strong transition group-hover:translate-x-1">→</span>
            </div>
            <p className="text-lg font-semibold text-white">{route.description}</p>
            <p className="text-sm text-muted">
              Navigate with confidence—each section is fully wired with its own briefing and up-to-date telemetry.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
