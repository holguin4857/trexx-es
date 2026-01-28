"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, image: "bg-slate-800" },
  { id: 2, image: "bg-slate-900" },
  { id: 3, image: "bg-black" },
];

export function CaseStudies() {
  const t = useTranslations("CaseStudies");

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-black mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col border border-slate-200 rounded-3xl overflow-hidden transition-colors duration-300 hover:border-black"
            >
              <div className={`h-72 w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <span className="absolute top-6 left-6 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-black rounded-full">
                  {t(`items.${project.id}.category`)}
                </span>
              </div>

              <div className="flex flex-col grow p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-black group-hover:underline decoration-2 underline-offset-4 transition-all">
                    {t(`items.${project.id}.title`)}
                  </h3>
                  <ArrowUpRight className="text-slate-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                </div>

                {/* Project Description: 20px (text-xl) */}
                <p className="text-xl text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                  {t(`items.${project.id}.description`)}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center text-sm font-extrabold text-black uppercase tracking-wider">
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