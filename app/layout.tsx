import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Specula Terminal',
  description: 'An ambient terminal dashboard for Specula—crafted with Next.js and Tailwind CSS.',
  metadataBase: new URL('https://specula.example'),
  openGraph: {
    title: 'Specula Terminal',
    description: 'Operational intelligence, narrative storytelling, and delightful UI craft.',
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
      <body className="min-h-screen bg-background/95 text-white antialiased">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/10 via-background to-background" />
        <SiteHeader />
        <main className="mx-auto max-w-6xl space-y-10 px-4 pb-16 pt-10 sm:px-6">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
