import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader";
import { CaseStudies } from "@/components/CaseStudies";
import { ProjectsCTA } from "@/components/ProjectsCTA"; // 👈 New Import

export const metadata = {
  title: "Projects | Trexx Digital",
  description: "View our portfolio.",
};

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage"); 

  return (
    <div className="flex flex-col">
      {/* 1. Header Block */}
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />
      
      {/* 2. Portfolio Grid Block */}
      <CaseStudies />

      {/* 3. CTA Block */}
      <ProjectsCTA />
    </div>
  );
}