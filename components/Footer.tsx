"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/routing";
import { Linkedin, Facebook } from "lucide-react"; // 👈 New Icons

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`
        border-t 
        border-slate-200 
        bg-white 
        pt-16 
        pb-8 
        mt-auto
      `}
    >
      <div className="container mx-auto px-4">
        
        <div 
          className={`
            grid 
            grid-cols-1 
            gap-8 
            md:grid-cols-4 
            mb-12
          `}
        >
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span 
              className={`
                text-xl 
                font-bold 
                text-black 
                tracking-tight
              `}
            >
              {siteConfig.name}
            </span>
            <p 
              className={`
                mt-4 
                text-sm 
                text-black 
                max-w-xs
              `}
            >
              {t("brand_description")}
            </p>
            
            {/* 👇 SOCIAL ICONS (LinkedIn / Facebook) */}
            <div className="flex gap-4 mt-6">
              <a 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className={`
                  text-black
                  hover:text-slate-500 
                  transition-colors
                `}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={siteConfig.links.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className={`
                  text-black
                  hover:text-slate-500 
                  transition-colors
                `}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 
              className={`
                font-semibold 
                text-black 
                mb-4
              `}
            >
              {t("about")}
            </h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`
                      text-black 
                      hover:text-slate-500 
                      transition-colors
                    `}
                  >
                    {tNav(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 
              className={`
                font-semibold 
                text-black 
                mb-4
              `}
            >
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="#" 
                  className={`
                    text-black 
                    hover:text-slate-500 
                    transition-colors
                  `}
                >
                  {t("legal.privacy")}
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className={`
                    text-black 
                    hover:text-slate-500 
                    transition-colors
                  `}
                >
                  {t("legal.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className={`
            border-t 
            border-slate-200 
            pt-8 
            flex 
            flex-col 
            md:flex-row 
            items-center 
            justify-between 
            text-sm 
            text-slate-500
          `}
        >
          <p>© {currentYear} {siteConfig.name}. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}