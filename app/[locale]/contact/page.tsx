import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo"; // 👈 New Import

export const metadata = {
  title: "Contact | Trexx Digital",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div className="flex flex-col">
      {/* 1. Header Block */}
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />

      {/* 2. Content Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            
            {/* Left Side: Info */}
            <ContactInfo />
            
            {/* Right Side: Form */}
            <ContactForm />

          </div>
        </div>
      </section>
    </div>
  );
}