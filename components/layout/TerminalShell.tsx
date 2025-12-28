import type { ReactNode } from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { Tag } from '../ui/Tag';

interface TerminalShellProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function TerminalShell({ title, description, actions, children }: TerminalShellProps) {
  return (
    <GlassPanel
      title={title}
      subtitle={description}
      corner={actions ?? <Tag tone="accent">Active</Tag>}
      className="border border-[color:var(--border-mid)]"
    >
      {children}
    </GlassPanel>
  );
}
