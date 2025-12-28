import Link from 'next/link';
import { TerminalPanel } from '../components/terminal/TerminalPanel';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <TerminalPanel title="Not Found" subtitle="The requested route is offline" accent="404">
        <div className="space-y-4 text-muted">
          <p className="text-lg text-white">This path is not wired into the terminal.</p>
          <p className="text-sm">
            Return to the main console to continue exploring the Specula story. All primary routes are available through the
            navigation bar.
          </p>
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/20"
          >
            ← Back to console
          </Link>
        </div>
      </TerminalPanel>
    </div>
  );
}
