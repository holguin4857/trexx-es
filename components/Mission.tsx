"use client";

import { useTranslations } from "next-intl";

export function Mission() {
  const t = useTranslations("About");

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
        
        {/* Text Block */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-black mb-8">
            {t("mission.title")}
          </h2>
          
          {/* Main Statement: 24px (text-2xl) for emphasis */}
          <p className="text-2xl font-bold text-black leading-relaxed mb-8">
            {t("mission.text")}
          </p>
          
          {/* Detail Text: 20px (text-xl) */}
          <p className="text-xl text-slate-600 leading-relaxed">
            {t("mission.detail")}
          </p>
        </div>

        {/* Image Block */}
        <div className="h-[500px] bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-200">
          <span className="text-slate-400 font-medium text-xl">Agency Office Image</span>
        </div>

      </div>
    </section>
  );
}