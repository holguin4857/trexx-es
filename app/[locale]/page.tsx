import { setRequestLocale, getTranslations } from 'next-intl/server'; // 🟢 Import from server

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  // 1. Await the params (Standard)
  const { locale } = await params;

  // 2. Optimization for static rendering
  setRequestLocale(locale);

  // 3. 🟢 THE FIX: Use 'getTranslations' (Async) instead of 'useTranslations' (Hook)
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
      </div>
      <div className="mt-10">
        <p className="text-xl">{t('subtitle')}</p>
      </div>
    </main>
  );
}