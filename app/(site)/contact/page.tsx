import Link from 'next/link';
import { PromptLine } from '../../../components/terminal/PromptLine';
import { PortraitPanel } from '../../../components/terminal/PortraitPanel';
import { TerminalPanel } from '../../../components/terminal/TerminalPanel';

const contactMethods = [
  {
    label: 'Email',
    value: 'hello@specula.example',
    href: 'mailto:hello@specula.example'
  },
  {
    label: 'Calendly',
    value: 'Schedule a 25-minute intake call',
    href: 'https://calendly.com'
  },
  {
    label: 'Status',
    value: 'Lead time: 2 weeks · Remote friendly · US/EU time zones',
    href: '/projects'
  }
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <TerminalPanel title="Contact" subtitle="Let’s ship the next release together" accent="Available">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <PromptLine label="~/contact" command="open channels" />
            <p className="text-lg text-muted">
              Drop a line to start a project, request a readiness review, or book mentoring time for your team. Replies arrive
              within one business day and always include next steps.
            </p>
            <div className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-white/5">
              {contactMethods.map((method) => (
                <div key={method.label} className="flex items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{method.label}</p>
                    <p className="text-base font-semibold text-white">{method.value}</p>
                  </div>
                  <Link
                    href={method.href}
                    className="rounded-full border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/20"
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                  >
                    Open
                  </Link>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-dashed border-white/20 bg-terminal/60 p-4 text-sm text-muted">
              <p className="text-xs uppercase tracking-[0.2em] text-white">What to expect</p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Lightweight intake to frame your goals, constraints, and current stack.</li>
                <li>Shared notes after each call—no surprises, no hidden scope.</li>
                <li>Clear next steps: prototype, sprint partnership, or async advisory.</li>
              </ul>
            </div>
          </div>
          <PortraitPanel />
        </div>
      </TerminalPanel>
    </div>
  );
}
