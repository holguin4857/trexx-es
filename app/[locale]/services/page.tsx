import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";

export const metadata = {
  title: "Services | Trexx Digital",
  description: "Explore our digital services.",
};

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  return (
    <div>
      {/* 1. The Header (Localized) */}
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />

      {/* 2. The Content (Recycled) */}
      <div 
        className={`
          bg-white 
          min-h-[50vh]
        `}
      >
        <Services />
      </div>

      {/* 3. Call to Action - NOW LOCALIZED 👇 */}
      <section 
        className={`
          py-20 
          bg-slate-900 
          text-center 
          text-white
        `}
      >
        <h2 
          className={`
            text-2xl 
            font-bold 
            mb-4
          `}
        >
          {t("cta.title")}
        </h2>
        <p 
          className={`
            mb-8 
            text-slate-300
          `}
        >
          {t("cta.text")}
        </p>
      </section>
    </div>
  );
}