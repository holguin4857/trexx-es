import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

// 📍 COMPONENT IMPORTS
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

// 📍 PROPS DEFINITION
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;

  return {
    title: `Trexx Digital | ${locale === "es" ? "Inicio" : "Home"}`,
    description: "High-performance digital agency based in Spain.",
  };
}

export default async function RootLayout(props: Props) {
  const params = await props.params;
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // 👇 THIS IS THE ACTUAL HTML STRUCTURE
  return (
    <html lang={locale}>
      <body
        className={`
          ${inter.className} 
          antialiased 
          min-h-screen 
          bg-white 
          text-black
        `}
      >
        {/* 📍 Provider: Gives translation powers to everything inside */}
        <NextIntlClientProvider messages={messages}>
          
          {/* 📍 The Flex Wrapper: Keeps the Footer at the bottom */}
          <div 
            className={`
              flex 
              flex-col 
              min-h-screen
            `}
          >
            {/* 👇 1. TOP: NAVBAR */}
            <Navbar />

            {/* 👇 2. MIDDLE: THE PAGE SLOT (props.children) */}
            <main className="grow">
              {props.children}
            </main>

            {/* 👇 3. BOTTOM: FOOTER */}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}