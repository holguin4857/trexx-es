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
        transition-all
      `}
    >
      <div 
        className={`
          container 
          mx-auto 
          
          /* 👇 THE FIX: Constrain width strictly */
          max-w-7xl 
          
          flex 
          items-center 
          justify-between 
          px-4
          
          /* RESPONSIVE HEIGHT */
          h-16 
          xl:h-24
          transition-all
        `}
      >
        
        {/* BRAND LOGO */}
        <div 
          className={`
            flex 
            items-center 
            gap-2 
            font-extrabold 
            tracking-tight 
            text-black 
            
            /* RESPONSIVE LOGO TEXT */
            text-xl 
            xl:text-3xl
          `}
        >
          <div 
            className={`
              bg-black 
              rounded-md
              h-6 w-6 
              xl:h-8 xl:w-8
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
            
            /* RESPONSIVE GAP */
            gap-1 
            xl:gap-2
          `}
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                font-medium 
                rounded-full 
                transition-all 
                
                /* RESPONSIVE TEXT SIZE */
                text-base 
                xl:text-xl
                
                /* RESPONSIVE PADDING */
                px-4 py-2 
                xl:px-6 xl:py-3

                /* Colors */
                text-black
                
                /* Hover State */
                hover:bg-slate-100 
                hover:text-slate-500

                /* Active State */
                ${pathname === item.href 
                  ? "bg-slate-100 text-slate-900" 
                  : ""
                }
              `}
            >
              {t(item.label)} 
            </Link>
          ))}
        </nav>

        {/* LANGUAGE & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          
          {/* THE MODERN LANGUAGE PILL */}
          <button
            onClick={() => onLanguageChange(locale === "en" ? "es" : "en")}
            className={`
              flex 
              items-center 
              gap-2 
              font-medium 
              uppercase 
              rounded-full
              transition-all
              shadow-sm

              /* COLORS */
              bg-black 
              text-white
              hover:bg-slate-800 
              hover:scale-105

              /* RESPONSIVE SIZING */
              text-xs px-4 py-2 
              xl:text-sm xl:px-6 xl:py-3
            `}
          >
            <Globe className="h-4 w-4 xl:h-4 xl:w-4" />
            
            {/* Logic: Show OTHER language */}
            <span>{locale === 'en' ? 'Español' : 'English'}</span>
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
        <div className="md:hidden border-t border-slate-100 bg-white p-4">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block 
                  text-lg 
                  font-medium 
                  px-4 py-3 
                  rounded-lg 
                  text-black 
                  hover:bg-slate-50 
                  hover:text-slate-500
                `}
              >
                {t(item.label)} 
              </Link>
            ))}
            
            <button
              onClick={() => {
                onLanguageChange(locale === "en" ? "es" : "en");
                setIsOpen(false);
              }}
              className="block w-full text-left text-lg font-medium px-4 py-3 rounded-lg text-black hover:bg-slate-50 hover:text-slate-500"
            >
              {locale === 'en' ? 'Switch to Español' : 'Switch to English'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}