"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

// 1. VISUAL DATA (Monochrome backgrounds for the placeholders)
const projects = [
  { id: 1, image: "bg-slate-800" },
  { id: 2, image: "bg-slate-900" },
  { id: 3, image: "bg-black" },
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
        
        {/* 2. SECTION HEADER (Title & Subtitle) */}
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
              font-extrabold 
              tracking-tight 
              text-black 
              mb-4
            `}
          >
            {t("title")}
          </h2>
          <p className="text-lg text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        {/* 3. PROJECTS GRID (Layout Wrapper) */}
        <div
          className={`
            grid 
            grid-cols-1 
            md:grid-cols-3 
            gap-8
          `}
        >
          {projects.map((project) => (
            
            /* 4. INDIVIDUAL PROJECT CARD */
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
                transition-colors   /* 👈 Only transition colors now */
                duration-300
                
                /* 👇 INTERACTION: No Shadow. Border turns Black on hover. */
                hover:border-black
              `}
            >
              
              {/* 5. IMAGE AREA (Top half) */}
              <div
                className={`
                  h-64 
                  w-full 
                  ${project.image} 
                  relative 
                  overflow-hidden
                `}
              >
                {/* Overlay that darkens slightly on hover */}
                <div
                  className={`
                    absolute 
                    inset-0 
                    bg-black/20 
                    group-hover:bg-black/10 
                    transition-colors
                  `}
                />

                {/* Category Pill (Top Left) */}
                <span
                  className={`
                    absolute 
                    top-4 
                    left-4 
                    bg-white 
                    px-3 
                    py-1 
                    text-xs 
                    font-bold 
                    uppercase 
                    tracking-wide 
                    text-black 
                    rounded-full
                  `}
                >
                  {t(`items.${project.id}.category`)}
                </span>
              </div>

              {/* 6. CONTENT AREA (Bottom half) */}
              <div
                className={`
                  flex 
                  flex-col 
                  grow 
                  p-6
                `}
              >
                {/* Title & Arrow Row */}
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`
                      text-xl 
                      font-bold 
                      text-black 
                      group-hover:underline 
                      decoration-2
                      underline-offset-4
                      transition-all
                    `}
                  >
                    {t(`items.${project.id}.title`)}
                  </h3>
                  
                  {/* The Arrow Icon */}
                  <ArrowUpRight
                    className={`
                      text-slate-400 
                      group-hover:text-black 
                      group-hover:translate-x-1 
                      group-hover:-translate-y-1 
                      transition-all
                    `}
                  />
                </div>

                {/* Description Text */}
                <p
                  className={`
                    text-slate-600 
                    mb-6 
                    line-clamp-3
                  `}
                >
                  {t(`items.${project.id}.description`)}
                </p>

                {/* Bottom Metric (The Footer of the card) */}
                <div
                  className={`
                    mt-auto 
                    pt-4 
                    border-t 
                    border-slate-100 
                    flex 
                    items-center 
                    text-sm 
                    font-extrabold 
                    text-black
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