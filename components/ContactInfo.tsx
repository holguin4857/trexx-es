"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  const t = useTranslations("ContactPage");

  return (
    <div className="space-y-10">
      
      {/* Header Text */}
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-black mb-4">
          {t("title")}
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          {t("intro")}
        </p>
      </div>
      
      {/* Contact Details */}
      <div className="space-y-6">
        
        {/* Email */}
        <div className="flex items-start gap-5">
          <div className="p-4 bg-slate-100 text-black rounded-2xl flex-shrink-0">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-black mb-1">{t("info.email")}</h3>
            <p className="text-slate-600 font-medium">hello@trexx.digital</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-5">
          <div className="p-4 bg-slate-100 text-black rounded-2xl flex-shrink-0">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-black mb-1">{t("info.phone")}</h3>
            <p className="text-slate-600 font-medium">+34 900 123 456</p>
          </div>
        </div>

        {/* Office */}
        <div className="flex items-start gap-5">
          <div className="p-4 bg-slate-100 text-black rounded-2xl flex-shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-black mb-1">{t("info.office")}</h3>
            <p className="text-slate-600 font-medium">{t("info.address")}</p>
          </div>
        </div>

      </div>
    </div>
  );
}