"use client";

/* 1. IMPORTS */
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import Image from "next/image"; // 👈 Added for the logo

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
    /* 2. MAIN HEADER WRAPPER */
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
          max-w-7xl  /* Width Constraint */
          flex 
          items-center 
          justify-between 
          px-4
          h-16 
          xl:h-24    /* Responsive Height */
          transition-all
        `}
      >
        
        {/* 3. BRAND LOGO SECTION */}
        <div 
          className={`
            flex 
            items-center 
            gap-2 
            font-extrabold 
            tracking-tight 
            text-black 
            text-xl 
            xl:text-3xl
          `}
        >
          {/* 👇 THE LOGO IMAGE FIX */}
          <div className="relative h-6 w-6 xl:h-8 xl:w-8">
            <Image 
              src="/logo.svg" 
              alt="Trexx Logo" 
              fill 
              className="object-contain"
              priority // Loads instantly
            />
          </div>
          
          <Link href="/">{siteConfig.name}</Link>
        </div>

        {/* 4. DESKTOP NAVIGATION SECTION */}
        <nav 
          className={`
            hidden 
            md:flex 
            items-center 
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
                text-base 
                xl:text-xl
                px-4 py-2 
                xl:px-6 xl:py-3
                text-black
                hover:bg-slate-100 
                hover:text-slate-500
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

        {/* 5. RIGHT SIDE ACTIONS (Language & Mobile Toggle) */}
        <div className="flex items-center gap-4">
          
          {/* Language Switcher */}
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
              bg-black 
              text-white
              hover:bg-slate-800 
              hover:scale-105
              text-xs px-4 py-2 
              xl:text-sm xl:px-6 xl:py-3
            `}
          >
            <Globe className="h-4 w-4 xl:h-4 xl:w-4" />
            <span>{locale === 'en' ? 'Español' : 'English'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-black" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 6. MOBILE MENU DROPDOWN */}
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