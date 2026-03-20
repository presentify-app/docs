import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Presentify Docs',
    default: 'Presentify Docs',
  },
  description: 'Documentation for Presentify — workplace presence and desk booking.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
