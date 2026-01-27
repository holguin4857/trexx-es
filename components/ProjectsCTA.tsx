"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function ProjectsCTA() {
  const t = useTranslations("ProjectsPage");

  return (
    <section 
      className={`
        py-24            /* Increased padding for a premium feel */
        bg-white         /* Clean White background */
        border-t 
        border-slate-200 
        text-center
      `}
    >
      <div className="container mx-auto px-4">
        
        {/* Headline */}
        <h2 
          className={`
            text-3xl 
            font-extrabold   /* 👈 "Revolut Style" Boldness */
            tracking-tight 
            text-black       /* 👈 Pure Black */
            mb-8
          `}
        >
          {t("cta.title")}
        </h2>
        
        {/* Button */}
        <Link 
          href="/contact" 
          className={`
            inline-flex 
            items-center 
            justify-center 
            min-w-[200px]    /* Ensures substantial width */
            bg-black         /* 👈 Pure Black Button */
            text-white 
            px-8 
            py-4             /* Taller button */
            rounded-full     /* 👈 Fully Rounded Pill Shape */
            font-bold 
            text-lg
            hover:bg-slate-800 
            transition-all
            hover:scale-105  /* Subtle pop effect */
          `}
        >
          {t("cta.button")}
        </Link>
      </div>
    </section>
  );
}