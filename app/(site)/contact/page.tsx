import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { GlassPanel } from '../../../components/ui/GlassPanel';
import { Tag } from '../../../components/ui/Tag';

function portraitAvailable() {
  const portraitPath = path.join(process.cwd(), 'public', 'brand', 'portrait.jpg');
  return fs.existsSync(portraitPath);
}

export default function ContactPage() {
  const hasPortrait = portraitAvailable();

  return (
    <div className="space-y-6">
      <GlassPanel
        title="Contact"
        subtitle="Professional correspondence only"
        corner={<Tag tone="accent">Direct</Tag>}
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3 text-sm text-[color:var(--text-muted)]">
            <p className="text-[color:var(--text)]">contact@specula.terminal</p>
            <p>
              Specula is a public research terminal and professional portfolio — not a paywalled service. Reach out for dialogue,
              collaboration, or to align on institutional needs.
            </p>
          </div>
          <div className="rounded-xl border border-[color:var(--border-weak)] bg-[rgba(255,255,255,0.02)] p-4">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">Portrait</p>
            {hasPortrait ? (
              <div className="overflow-hidden rounded-lg border border-[color:var(--border-mid)]">
                <Image src="/brand/portrait.jpg" alt="Specula portrait" width={640} height={360} className="h-auto w-full object-cover" />
              </div>
            ) : (
              <div className="glass flex h-48 items-center justify-center rounded-lg border border-[color:var(--border-weak)] text-sm text-[color:var(--text-muted)]">
                <div className="space-y-1 text-center">
                  <p className="font-semibold text-[color:var(--text)]">Portrait pending</p>
                  <p>Add /public/brand/portrait.jpg to replace this placeholder.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
