"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function ServicesCTA() {
  const t = useTranslations("ServicesPage");

  return (
    <section 
      className={`
        py-24 
        bg-black           /* 👈 Pure Black Background */
        text-center 
        text-white         /* 👈 White Text */
      `}
    >
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <h2 
          className={`
            text-3xl 
            font-extrabold 
            tracking-tight 
            mb-6
          `}
        >
          {t("cta.title")}
        </h2>
        
        {/* Description Text */}
        <p 
          className={`
            mb-10 
            text-xl 
            text-slate-300     /* 👈 Light Grey for contrast against black */
            max-w-2xl 
            mx-auto
          `}
        >
          {t("cta.text")}
        </p>

        {/* The Missing Button (Added for functionality) */}
        <Link 
          href="/contact" 
          className={`
            inline-flex 
            items-center 
            justify-center 
            min-w-[200px]
            bg-white           /* 👈 White Button */
            text-black         /* 👈 Black Text */
            px-8 
            py-4 
            rounded-full       /* 👈 Pill Shape */
            font-bold 
            text-lg
            hover:bg-slate-200 
            transition-all
            hover:scale-105
          `}
        >
          {/* You might need to add a "button" key to your translation file later, 
              or reuse one like t("cta.button") if it exists */}
          {t("cta.button", { fallback: "Get Started" })}
        </Link>
      </div>
    </section>
  );
}