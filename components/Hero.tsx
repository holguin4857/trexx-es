"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section 
      className={`
        relative 
        flex 
        flex-col 
        items-center 
        justify-center 
        min-h-[70vh]      /* 👈 Increased height slightly to balance larger text */
        px-4 
        text-center 
        space-y-10        /* 👈 More breathing room between elements */
        bg-white 
        pt-20
      `}
    >
      
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-bold text-black">
        <span className="flex h-2 w-2 rounded-full bg-black mr-2"></span>
        {t("badge")}
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-7xl max-w-5xl">
        {t("title")}
      </h1>

      {/* Description - NOW 20PX (text-xl) */}
      <p 
        className={`
          max-w-3xl 
          text-xl         /* 👈 CHANGED: Was text-lg. Now 20px. */
          text-slate-600 
          leading-relaxed
        `}
      >
        {t("description")}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href={siteConfig.links.projects}
          className="inline-flex items-center justify-center min-w-[200px] rounded-full bg-black px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-slate-800"
        >
          {t("actions.projects")}
        </Link>

        <Link
          href={siteConfig.links.contact}
          className="inline-flex items-center justify-center min-w-[200px] rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:bg-slate-50 hover:border-black"
        >
          {t("actions.contact")}
        </Link>
      </div>
    </section>
  );
}