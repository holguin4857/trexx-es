import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact | Trexx Digital",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div>
      <PageHeader 
        title={t("title")} 
        description={t("description")} 
      />

      <div 
        className={`
          container 
          mx-auto 
          px-4 
          py-20
        `}
      >
        <div 
          className={`
            grid 
            md:grid-cols-2 
            gap-16 
            max-w-5xl 
            mx-auto
          `}
        >
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <h2 
              className={`
                text-2xl 
                font-bold 
                text-slate-900
              `}
            >
              {t("title")}
            </h2>
            
            <p 
              className={`
                text-slate-600 
                leading-relaxed
              `}
            >
              {t("intro")}
            </p>
            
            <div 
              className={`
                space-y-6 
                pt-4
              `}
            >
              {/* Email Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {t("info.email")} {/* 👈 Localized */}
                  </h3>
                  <p className="text-slate-600">hello@trexx.digital</p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {t("info.phone")} {/* 👈 Localized */}
                  </h3>
                  <p className="text-slate-600">+34 900 123 456</p>
                </div>
              </div>

              {/* Office Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {t("info.office")} {/* 👈 Localized */}
                  </h3>
                  <p className="text-slate-600">
                    {t("info.address")} {/* 👈 Localized */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}