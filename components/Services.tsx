"use client";

import { useTranslations } from "next-intl";
// We don't need siteConfig for the loop anymore
import { Globe, MessageSquare, Cpu, LucideIcon, Code } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  message: MessageSquare,
  cpu: Cpu,
};

// 👇 WE DEFINE THE STRUCTURE HERE NOW
// This keeps your config/site.ts clean.
const serviceItems = [
  { icon: "globe" },   // Index 0 -> Digital Ecosystems
  { icon: "message" }, // Index 1 -> Unified Communications
  { icon: "cpu" }      // Index 2 -> Cloud Automation
];

export function Services() {
  const t = useTranslations("Services");

  return (
    <section 
      className={`
        container 
        mx-auto 
        px-4 
        py-20
      `}
    >
      <div 
        className={`
          text-center 
          mb-12
        `}
      >
        <h2 
          className={`
            text-3xl 
            font-bold 
            text-slate-900
          `}
        >
          {t("title", { fallback: "Our Architecture" })} 
        </h2>
        <p className="text-slate-600 mt-2">
          {t("description", { fallback: "Built for scale." })}
        </p>
      </div>

      <div 
        className={`
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-8
        `}
      >
        {/* 👇 CHANGED: We map over our local 'serviceItems' array */}
        {serviceItems.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;

          return (
            <div 
              key={index} 
              className={`
                p-6 
                rounded-2xl 
                border 
                border-slate-100 
                bg-white 
                shadow-sm 
                hover:shadow-md 
                transition-shadow 
                group
              `}
            >
              <div 
                className={`
                  h-10 
                  w-10 
                  bg-blue-50 
                  rounded-lg 
                  flex 
                  items-center 
                  justify-center 
                  text-blue-600 
                  mb-4 
                  transition-colors
                  group-hover:bg-blue-600 
                  group-hover:text-white 
                `}
              >
                <Icon size={20} />
              </div>
              <h3 
                className={`
                  font-semibold 
                  text-slate-900 
                  mb-2
                `}
              >
                {t(`items.${index}.title`)}
              </h3>
              <p className="text-sm text-slate-500">
                {t(`items.${index}.description`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}