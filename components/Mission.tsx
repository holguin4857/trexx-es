"use client";

import { useTranslations } from "next-intl";

export function Mission() {
  const t = useTranslations("About");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-black mb-6">
            {t("mission.title")}
          </h2>
          <p className="text-xl font-medium text-black leading-relaxed mb-6">
            {t("mission.text")}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {t("mission.detail")}
          </p>
        </div>

        {/* Right: Image Placeholder */}
        <div className="h-96 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200">
          <span className="text-slate-400 font-medium">Agency Office Image</span>
        </div>

      </div>
    </section>
  );
}