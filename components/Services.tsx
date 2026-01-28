"use client";

import { useTranslations } from "next-intl";
import { Globe, MessageSquare, Cpu, LucideIcon, Code } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  message: MessageSquare,
  cpu: Cpu,
};

const serviceItems = [{ icon: "globe" }, { icon: "message" }, { icon: "cpu" }];

export function Services() {
  const t = useTranslations("Services");

  return (
    <section className="container mx-auto px-4 py-24"> {/* 👈 Consistent py-24 padding */}
      
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold tracking-tight text-black mb-6">
          {t("title", { fallback: "Our Architecture" })} 
        </h2>
        {/* Section Description: 20px */}
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {t("description", { fallback: "Built for scale." })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {serviceItems.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;

          return (
            <div 
              key={index} 
              className="p-10 rounded-3xl border border-slate-200 bg-white hover:border-black transition-colors group"
            >
              <div className="h-14 w-14 bg-slate-100 rounded-2xl flex items-center justify-center text-black mb-8 transition-colors group-hover:bg-black group-hover:text-white">
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-black mb-4">
                {t(`items.${index}.title`)}
              </h3>
              
              {/* Card Text: 20px (text-xl) */}
              <p className="text-xl text-slate-600 leading-relaxed">
                {t(`items.${index}.description`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}