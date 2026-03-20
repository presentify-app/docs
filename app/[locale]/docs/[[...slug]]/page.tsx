import { source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug?: string[]; locale: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const page = source.getPage(slug, locale);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsBody>
        <MDXContent components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const page = source.getPage(slug, locale);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
