"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const onLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header 
      className={`
        sticky 
        top-0 
        z-50 
        w-full 
        border-b 
        border-slate-200 
        bg-white/80 
        backdrop-blur-md
      `}
    >
      <div 
        className={`
          container 
          mx-auto 
          flex 
          h-16 
          items-center 
          justify-between 
          px-4
        `}
      >
        
        <div 
          className={`
            flex 
            items-center 
            gap-2 
            font-bold 
            text-xl 
            tracking-tight 
            text-slate-900
          `}
        >
          <div 
            className={`
              h-6 
              w-6 
              bg-blue-600 
              rounded-md
            `} 
          />
          <Link href="/">{siteConfig.name}</Link>
        </div>

        {/* Desktop Nav */}
        <nav 
          className={`
            hidden 
            md:flex 
            items-center 
            gap-8
          `}
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                text-sm 
                font-medium 
                transition-colors 
                hover:text-blue-600 
                ${pathname === item.href ? "text-blue-600" : "text-slate-600"}
              `}
            >
              {t(item.label)} 
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onLanguageChange(locale === "en" ? "es" : "en")}
            className={`
              flex 
              items-center 
              gap-1 
              text-xs 
              font-semibold 
              text-slate-500 
              hover:text-slate-900 
              uppercase 
              border 
              border-slate-200 
              rounded 
              px-2 
              py-1
            `}
          >
            <Globe size={14} />
            {locale}
          </button>

          <button 
            className="md:hidden text-slate-900" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div 
          className={`
            md:hidden 
            border-t 
            border-slate-100 
            bg-white 
            p-4
          `}
        >
          <nav className="flex flex-col space-y-4">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  text-base 
                  font-medium 
                  text-slate-600 
                  hover:text-blue-600
                `}
              >
                {t(item.label)} 
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}