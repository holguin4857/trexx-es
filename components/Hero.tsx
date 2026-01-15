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
          bg-slate-50 
          px-3 
          py-1 
          text-sm 
          font-medium 
          text-slate-900
        `}
      >
        <span 
          className={`
            flex 
            h-2 
            w-2 
            rounded-full 
            bg-blue-600 
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
          text-slate-900 
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
          text-slate-600 
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
        <Link
          href={siteConfig.links.projects}
          className={`
            rounded-md 
            bg-slate-900 
            px-8 
            py-3 
            text-sm 
            font-semibold 
            text-white 
            shadow-sm 
            hover:bg-slate-700 
            transition-colors
          `}
        >
          {t("actions.projects")}
        </Link>
        <Link
          href={siteConfig.links.contact}
          className={`
            rounded-md 
            border 
            border-slate-200 
            bg-white 
            px-8 
            py-3 
            text-sm 
            font-semibold 
            text-slate-900 
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