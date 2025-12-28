interface PromptLineProps {
  label: string;
  command: string;
}

export function PromptLine({ label, command }: PromptLineProps) {
  return (
    <p className="font-mono text-sm text-muted">
      <span className="text-accent-strong">{label}</span>
      <span className="text-white"> $</span> {command}
      <span className="ml-1 inline-block h-4 w-3 animate-cursor-blink rounded-sm bg-accent-strong align-middle" aria-hidden />
    </p>
  );
}
