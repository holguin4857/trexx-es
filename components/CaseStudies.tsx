"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

// Visual Data only (Colors/Images don't need translation)
const projects = [
  { id: 1, image: "bg-slate-800" },
  { id: 2, image: "bg-blue-900" },
  { id: 3, image: "bg-indigo-900" },
];

export function CaseStudies() {
  const t = useTranslations("CaseStudies");

  return (
    <section
      className={`
        py-20 
        bg-white
      `}
    >
      <div className="container mx-auto px-4">
        <div
          className={`
            max-w-3xl 
            mx-auto 
            text-center 
            mb-16
          `}
        >
          <h2
            className={`
              text-3xl 
              font-bold 
              text-slate-900 
              mb-4
            `}
          >
            {t("title")}
          </h2>
          <p className="text-lg text-slate-600">{t("subtitle")}</p>
        </div>

        <div
          className={`
            grid 
            grid-cols-1 
            md:grid-cols-3 
            gap-8
          `}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                group 
                relative 
                flex 
                flex-col 
                border 
                border-slate-200 
                rounded-2xl 
                overflow-hidden 
                hover:shadow-xl 
                transition-all 
                duration-300
              `}
            >
              {/* Image Area */}
              <div
                className={`
                  h-64 
                  w-full 
                  ${project.image} 
                  relative 
                  overflow-hidden
                `}
              >
                <div
                  className={`
                    absolute 
                    inset-0 
                    bg-black/20 
                    group-hover:bg-black/10 
                    transition-colors
                  `}
                />

                <span
                  className={`
                    absolute 
                    top-4 
                    left-4 
                    bg-white/90 
                    backdrop-blur 
                    px-3 
                    py-1 
                    text-xs 
                    font-bold 
                    uppercase 
                    tracking-wide 
                    text-slate-900 
                    rounded-full
                  `}
                >
                  {/* Dynamic Lookup: items.1.category */}
                  {t(`items.${project.id}.category`)}
                </span>
              </div>

              {/* Content Area */}
              <div
                className={`
                  flex 
                  flex-col 
                  grow 
                  p-6
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`
                      text-xl 
                      font-bold 
                      text-slate-900 
                      group-hover:text-blue-600 
                      transition-colors
                    `}
                  >
                    {t(`items.${project.id}.title`)}
                  </h3>
                  <ArrowUpRight
                    className={`
                      text-slate-400 
                      group-hover:text-blue-600 
                      group-hover:translate-x-1 
                      group-hover:-translate-y-1 
                      transition-all
                    `}
                  />
                </div>

                <p
                  className={`
                    text-slate-600 
                    mb-6 
                    line-clamp-3
                  `}
                >
                  {t(`items.${project.id}.description`)}
                </p>

                <div
                  className={`
                    mt-auto 
                    pt-4 
                    border-t 
                    border-slate-100 
                    flex 
                    items-center 
                    text-sm 
                    font-medium 
                    text-blue-600
                  `}
                >
                  {t("result_label")} {t(`items.${project.id}.stat`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
