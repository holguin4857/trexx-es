import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader"; 
import { Mission } from "@/components/Mission"; // 👈 New Import
import { Stats } from "@/components/Stats";     // 👈 New Import
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Trexx Digital",
  description: "Learn about our history and mission.",
};

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col">
      {/* 1. The Header */}
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />

      {/* 2. The Mission Block (Reusable!) */}
      <Mission />

      {/* 3. The Stats Block (Reusable!) */}
      <Stats />
    </div>
  );
}