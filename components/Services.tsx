"use client";

import { useTranslations } from "next-intl";
import { Globe, MessageSquare, Cpu, LucideIcon, Code } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  message: MessageSquare,
  cpu: Cpu,
};

// Data Structure
const serviceItems = [
  { icon: "globe" },   // Index 0
  { icon: "message" }, // Index 1
  { icon: "cpu" }      // Index 2
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
      
      {/* 1. SECTION HEADER (The Title & Subtitle) */}
      <div 
        className={`
          text-center 
          mb-16            /* Increased spacing for a cleaner look */
        `}
      >
        <h2 
          className={`
            text-3xl 
            font-extrabold /* 👈 CHANGED: Thicker font for impact */
            tracking-tight /* 👈 CHANGED: Tight spacing (Revolut style) */
            text-black     /* 👈 CHANGED: Was slate-900. Pure Black. */
            mb-4
          `}
        >
          {t("title", { fallback: "Our Architecture" })} 
        </h2>
        <p 
          className={`
            text-xl 
            text-slate-600 /* Keep this dark grey for hierarchy */
            max-w-2xl 
            mx-auto
          `}
        >
          {t("description", { fallback: "Built for scale." })}
        </p>
      </div>

      {/* 2. THE CARD GRID (3 Columns) */}
      <div 
        className={`
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-8
        `}
      >
        {serviceItems.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;

          return (
            /* 3. INDIVIDUAL SERVICE CARD */
            <div 
              key={index} 
              className={`
                p-8              /* Increased padding for "Airy" feel */
                rounded-2xl 
                border 
                border-slate-200 
                bg-white 
                transition-colors   /* Smooth animation */
                group            /* Allows hover effects on child elements */
              `}
            >
              
              {/* 4. THE ICON BOX (Circle/Square) */}
              <div 
                className={`
                  h-12 
                  w-12 
                  bg-slate-100       /* 👈 CHANGED: Was blue-50. Light Grey. */
                  rounded-xl         /* Slightly more square than rounded-lg */
                  flex 
                  items-center 
                  justify-center 
                  text-black         /* 👈 CHANGED: Was blue-600. Icon is Black. */
                  mb-6 
                  transition-colors 
                  duration-300
                  group-hover:bg-black     /* 👈 HOVER: Box turns Black */
                  group-hover:text-white   /* 👈 HOVER: Icon turns White */
                `}
              >
                <Icon size={24} />
              </div>

              {/* 5. CARD CONTENT */}
              <h3 
                className={`
                  text-lg
                  font-bold        /* 👈 CHANGED: Thicker font */
                  text-black       /* 👈 CHANGED: Was slate-900 */
                  mb-3
                `}
              >
                {t(`items.${index}.title`)}
              </h3>
              
              <p 
                className={`
                  text-slate-600   /* Dark grey for readability */
                  leading-relaxed
                `}
              >
                {t(`items.${index}.description`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}