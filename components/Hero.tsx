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
        min-h-[60vh] 
        px-4 
        text-center 
        space-y-8 
        bg-white 
        pt-20
      `}
    >
      
      {/* Badge */}
      <div 
        className={`
          inline-flex 
          items-center 
          rounded-full 
          border 
          border-slate-200 
          bg-slate-100      /* 👈 CHANGED: Was slate-50. Slightly darker grey. */
          px-3 
          py-1 
          text-sm 
          font-medium         /* 👈 CHANGED: Was font-medium. Thicker text. */
          text-black        /* 👈 CHANGED: Was slate-900. Pure Black. */
        `}
      >
        <span 
          className={`
            flex 
            h-2 
            w-2 
            rounded-full 
            bg-black        /* 👈 CHANGED: Was blue-600. The "Dot" is now Black. */
            mr-2
          `}
        ></span>
        {t("badge")}
      </div>

      {/* Title */}
      <h1 
        className={`
          text-4xl 
          font-extrabold 
          tracking-tight 
          text-black        /* 👈 CHANGED: Was slate-900. Pure Black. */
          sm:text-6xl 
          max-w-4xl
        `}
      >
        {t("title")}
      </h1>

      {/* Description */}
      <p 
        className={`
          max-w-2xl 
          text-lg 
          text-slate-600    /* Keep this Dark Grey for hierarchy vs Title */
          leading-relaxed
        `}
      >
        {t("description")}
      </p>

      {/* Buttons */}
      <div 
        className={`
          flex 
          flex-wrap 
          items-center 
          justify-center 
          gap-4
        `}
      >
        {/* Primary Button */}
        <Link
          href={siteConfig.links.projects}
          className={`
            inline-flex        /* 👈 CHANGED */
            items-center       /* 👈 CHANGED */
            justify-center     /* 👈 CHANGED */
            min-w-[200px]      /* 👈 CHANGED */
            rounded-full 
            bg-black          /* 👈 CHANGED: Was slate-900. Pure Black button. */
            px-8 
            py-3 
            text-sm 
            font-bold         /* 👈 CHANGED: Thicker font. */
            text-white 
            shadow-sm 
            hover:bg-slate-800 /* Slightly lighter on hover */
            transition-colors
          `}
        >
          {t("actions.projects")}
        </Link>

        {/* Secondary Button */}
        <Link
          href={siteConfig.links.contact}
          className={`
            inline-flex        /* 👈 CHANGED: Ensures width works */
            items-center       /* 👈 CHANGED: Vertical Center */
            justify-center     /* 👈 CHANGED: Horizontal Center */
            min-w-[200px]      /* 👈 CHANGED: Enforces equal width */
            rounded-full 
            border 
            border-slate-200 
            bg-white 
            px-8 
            py-3 
            text-sm 
            font-bold         /* 👈 CHANGED: Thicker font. */
            text-black        /* 👈 CHANGED: Was slate-900. */
            shadow-sm 
            hover:bg-slate-50 
            transition-colors
          `}
        >
          {t("actions.contact")}
        </Link>
      </div>
    </section>
  );
}