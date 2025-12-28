import { TerminalShell } from '../../../components/layout/TerminalShell';

export default function FrameworkPage() {
  return (
    <div className="space-y-6">
      <TerminalShell title="Specula Framework" description="Socio-Economic Framework + Investment Method">
        <div className="space-y-8 text-sm leading-relaxed text-[color:var(--text-muted)]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[color:var(--text)]">Socio-Economic Framework</h2>
            <p>
              Humanism is the dominant religion of our era: a belief that human agency and dignity are worth defending, even as
              technology expands the reachable set of actions. The rise of a techno-civilization accelerates this tension — progress
              promises a transhumanist “heaven on earth” while also amplifying fragility. Institutions mediate this contradiction.
            </p>
            <p>
              Specula treats narratives, art, and philosophy as instruments to reason about that mediation. We look for evidence of
              how incentives, governance, and culture shape outcomes. The aim is not spectacle but clarity: seeing the transition in
              slow motion so that decisions are anchored in responsibility rather than hype.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[color:var(--text)]">Investment Method</h2>
            <p>
              Start from irreducible uncertainty: the Austrian insight that the future cannot be fully modeled, only bounded. Capital
              is “will + institutions” — the capacity to act paired with the rules that constrain action. With that footing, Specula
              uses discounted cash flow discipline to size intrinsic value ranges, and then layers liquidity-aware hedging on top.
            </p>
            <p>
              The method prefers calm iteration. Seek asymmetric outcomes but demand transparency in assumptions. When liquidity turns,
              hedge aggressively; when signals are thin, pause. Execution matters as much as thesis formation, and the portfolio is a
              living argument updated with each observation.
            </p>
          </section>
        </div>
      </TerminalShell>
    </div>
  );
}
