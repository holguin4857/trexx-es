import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Trexx Digital",
  description: "Learn about our history and mission.",
};

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div>
      {/* 1. The Reusable Header */}
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />

      {/* 2. Custom Content for this page */}
      <section 
        className={`
          py-20 
          bg-white
        `}
      >
        <div 
          className={`
            container 
            mx-auto 
            px-4 
            grid 
            md:grid-cols-2 
            gap-12 
            items-center
          `}
        >
          
          {/* Text Block */}
          <div>
            <h2 
              className={`
                text-3xl 
                font-bold 
                text-slate-900 
                mb-6
              `}
            >
              {t("mission.title")}
            </h2>
            
            {/* Mission Statement (Bold/Main) */}
            <p 
              className={`
                text-lg 
                text-slate-600 
                leading-relaxed 
                mb-6
              `}
            >
              {t("mission.text")}
            </p>
            
            {/* 🔴 FIXED: No more Lorem Ipsum. We use the new translation key. */}
            <p className="text-slate-600">
              {t("mission.detail")}
            </p>
          </div>

          {/* Image / Visual Block */}
          <div 
            className={`
              h-80 
              bg-slate-100 
              rounded-2xl 
              flex 
              items-center 
              justify-center 
              border 
              border-slate-200
            `}
          >
            <span className="text-slate-400 font-medium">
              Agency Office Image
            </span>
          </div>

        </div>
      </section>

      {/* 3. Simple Stats Section */}
      <section 
        className={`
          py-16 
          border-t 
          border-slate-100
        `}
      >
        <div 
          className={`
            container 
            mx-auto 
            px-4 
            grid 
            grid-cols-3 
            gap-8 
            text-center
          `}
        >
          <div>
            <div 
              className={`
                text-4xl 
                font-extrabold 
                text-blue-600
              `}
            >
              150+
            </div>
            <div 
              className={`
                text-sm 
                font-medium 
                text-slate-500 
                mt-2 
                uppercase 
                tracking-wide
              `}
            >
              {t("stats.clients")}
            </div>
          </div>
          
          <div>
            <div 
              className={`
                text-4xl 
                font-extrabold 
                text-blue-600
              `}
            >
              300+
            </div>
            <div 
              className={`
                text-sm 
                font-medium 
                text-slate-500 
                mt-2 
                uppercase 
                tracking-wide
              `}
            >
              {t("stats.projects")}
            </div>
          </div>
          
          <div>
            <div 
              className={`
                text-4xl 
                font-extrabold 
                text-blue-600
              `}
            >
              10+
            </div>
            <div 
              className={`
                text-sm 
                font-medium 
                text-slate-500 
                mt-2 
                uppercase 
                tracking-wide
              `}
            >
              {t("stats.years")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}