'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function PortraitPanel() {
  const [status, setStatus] = useState<'checking' | 'available' | 'missing'>('checking');

  useEffect(() => {
    const probe = new window.Image();
    probe.src = '/brand/portrait.jpg';
    probe.onload = () => setStatus('available');
    probe.onerror = () => setStatus('missing');
  }, []);

  if (status === 'available') {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glow">
        <Image
          src="/brand/portrait.jpg"
          alt="Portrait"
          width={900}
          height={1200}
          className="h-full w-full object-cover"
          onError={() => setStatus('missing')}
          priority
        />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-6 shadow-inner">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Portrait asset missing: /public/brand/portrait.jpg</p>
        <p className="text-sm text-muted">
          Add your production portrait at this path to replace the placeholder. The terminal will pick it up automatically with
          no code changes.
        </p>
      </div>
      <div className="rounded-lg border border-white/10 bg-terminal/60 p-4 text-sm text-muted">
        <p className="font-mono text-xs text-accent">portrait-placeholder.txt</p>
        <p className="mt-2 text-sm text-muted">
          This repository avoids binary assets. The live environment should host <code className="font-mono">portrait.jpg</code>
          ; in development you will see this placeholder panel instead.
        </p>
      </div>
    </div>
  );
}
