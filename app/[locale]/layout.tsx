import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>; // ⚠️ Strict Next.js 16 Type
};

export default async function LocaleLayout({ children, params }: Props) {
  // 1. Await the params (CRITICAL STEP)
  const { locale } = await params;

  // 2. Validate incoming locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 3. Load messages for the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}