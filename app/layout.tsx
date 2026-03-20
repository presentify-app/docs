import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Presentify Docs',
    default: 'Presentify Docs',
  },
  description: 'Documentation for Presentify — workplace presence and desk booking.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.presentify.org',
  ),
  openGraph: {
    type: 'website',
    siteName: 'Presentify Docs',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
