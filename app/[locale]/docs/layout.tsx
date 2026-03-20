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
          type: 'button' as const,
          text: 'Login',
          url: 'https://presentify.org/login',
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
