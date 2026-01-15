import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing"; // 👈 Use the Router Link for smooth navigation
import { PageHeader } from "@/components/PageHeader";
import { CaseStudies } from "@/components/CaseStudies";

export const metadata = {
  title: "Projects | Trexx Digital",
  description: "View our portfolio.",
};

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage"); 

  return (
    <div>
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />
      
      {/* The Case Studies Grid (Already Localized) */}
      <CaseStudies />

      {/* Project-specific Call to Action - NOW LOCALIZED 👇 */}
      <section 
        className={`
          py-20 
          bg-slate-50 
          border-t 
          border-slate-200 
          text-center
        `}
      >
        <h2 
          className={`
            text-2xl 
            font-bold 
            text-slate-900 
            mb-4
          `}
        >
          {/* "Want results like these?" */}
          {t("cta.title")}
        </h2>
        
        <Link 
          href="/contact" 
          className={`
            inline-block 
            bg-slate-900 
            text-white 
            px-8 
            py-3 
            rounded-lg 
            font-semibold 
            hover:bg-slate-700 
            transition-colors
          `}
        >
          {/* "Start Your Project" */}
          {t("cta.button")}
        </Link>
      </section>
    </div>
  );
}