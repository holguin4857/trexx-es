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
        
        {/* BRAND LOGO */}
        <div 
          className={`
            flex 
            items-center 
            gap-2 
            font-bold 
            text-xl 
            tracking-tight 
            text-black 
          `}
        >
          <div 
            className={`
              h-6 
              w-6 
              bg-black 
              rounded-md
            `} 
          />
          <Link href="/">{siteConfig.name}</Link>
        </div>

        {/* DESKTOP NAV */}
        <nav 
          className={`
            hidden 
            md:flex 
            items-center 
            gap-2           /* 👈 Reduced gap slightly since items are wider now */
          `}
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                text-sm 
                font-bold 
                px-4 py-2          /* 👈 CHANGED: Added padding for the pill shape */
                rounded-full       /* 👈 CHANGED: Makes it a "Pill" */
                transition-all 
                
                /* 👇 HOVER STATE: The "Revolut" Grey Button Effect */
                hover:bg-slate-100 
                hover:text-black

                ${pathname === item.href 
                  ? "bg-slate-100 text-black" /* Optional: Keep active link highlighted? */ 
                  : "text-black"
                }
              `}
            >
              {t(item.label)} 
            </Link>
          ))}
        </nav>

        {/* LANGUAGE & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLanguageChange(locale === "en" ? "es" : "en")}
            className={`
              flex 
              items-center 
              gap-1 
              text-xs 
              font-bold 
              uppercase 
              
              /* 👇 Also applied the Pill effect here for consistency */
              px-3 
              py-2 
              rounded-full
              text-slate-500 
              hover:bg-slate-100 
              hover:text-black
              transition-all
            `}
          >
            <Globe size={14} />
            {locale}
          </button>

          <button 
            className="md:hidden text-black" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
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
          <nav className="flex flex-col space-y-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block
                  text-base 
                  font-bold 
                  px-4 py-3        /* Larger touch targets on mobile */
                  rounded-lg       /* Rounded corners for mobile list items */
                  text-black 
                  hover:bg-slate-50 
                  hover:text-black
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