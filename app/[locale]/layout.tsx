import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <RootProvider
            theme={{
              defaultTheme: 'system',
              attribute: 'class',
            }}
          >
            {children}
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
