interface MetricProps {
  label: string;
  value: string;
  hint?: string;
}

export function Metric({ label, value, hint }: MetricProps) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-[color:var(--border-weak)]/70 bg-[rgba(255,255,255,0.02)] p-4">
      <span className="text-xs uppercase tracking-[0.15em] text-[color:var(--text-dim)]">{label}</span>
      <span className="text-lg font-semibold text-[color:var(--text)]">{value}</span>
      {hint && <span className="text-xs text-[color:var(--text-muted)]">{hint}</span>}
    </div>
  );
}
