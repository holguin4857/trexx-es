import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing"; // 👈 New Import
import { ServicesCTA } from "@/components/ServicesCTA";

export const metadata = {
  title: "Services | Trexx Digital",
  description: "Enterprise infrastructure solutions.",
};

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  return (
    <div className="flex flex-col">
      {/* 1. Header: "Digital Infrastructure" */}
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />

      {/* 2. The Solution: Grid + Deep Dive Details */}
      <Services />

      {/* 3. The Investment: Pricing Plans */}
      <Pricing />

      {/* 4. The Action: "Start Transformation" */}
      <ServicesCTA />
    </div>
  );
}