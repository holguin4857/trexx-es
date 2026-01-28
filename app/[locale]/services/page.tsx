import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { ServicesCTA } from "@/components/ServicesCTA"; // 👈 Your new Dark CTA

export const metadata = {
  title: "Services | Trexx Digital",
  description: "Explore our digital services.",
};

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  return (
    <div className="flex flex-col">
      {/* 1. Header Block (Top of page) */}
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />

      {/* 2. The Services Grid (Middle of page) */}
      {/* Note: The Services component has its own internal padding/container */}
      <Services />

      {/* 3. The Call to Action (Bottom of page) */}
      <ServicesCTA />
    </div>
  );
}