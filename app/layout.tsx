import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { TabNav } from '../components/navigation/TabNav';
import { StatusRail } from '../components/navigation/StatusRail';
import { SiteFooter } from '../components/layout/SiteFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Specula Terminal',
  description: 'Institutional observation terminal for research and capital allocation.',
  metadataBase: new URL('https://specula.example'),
  openGraph: {
    title: 'Specula Terminal',
    description: 'Institutional observation terminal for research and capital allocation.',
    url: 'https://specula.example',
    siteName: 'Specula Terminal',
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: '/brand/specula-mark.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-grid relative min-h-screen text-[color:var(--text)]">
        <div className="noise-overlay" aria-hidden="true" />
        <div className="relative z-10 flex min-h-screen">
          <StatusRail />
          <div className="flex min-h-screen flex-1 flex-col">
            <TabNav />
            <main className="flex-1 px-4 pb-12 pt-6 sm:px-6">
              <div className="mx-auto max-w-6xl space-y-8">{children}</div>
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
