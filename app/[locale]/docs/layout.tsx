import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <DocsLayout
      tree={source.getPageTree(locale)}
      nav={{
        title: 'Presentify Docs',
        url: '/',
      }}
      links={[
        { text: 'Website', url: 'https://presentify.org', external: true },
        {
          text: locale === 'de' ? 'Preise' : 'Pricing',
          url: locale === 'de'
            ? 'https://presentify.org/de/preise'
            : 'https://presentify.org/pricing',
          external: true,
        },
        {
          text: 'Login',
          url: 'https://presentify.org/login',
          external: true,
        },
        {
          text: locale === 'de' ? '🇬🇧 English' : '🇩🇪 Deutsch',
          url: locale === 'de' ? '/docs' : '/de/docs',
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
