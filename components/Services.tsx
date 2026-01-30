"use client";

import { useTranslations } from "next-intl";
import { Globe, MessageSquare, Cpu, LucideIcon, Code, CheckCircle2, ArrowDown } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  message: MessageSquare,
  cpu: Cpu,
};

const serviceItems = [{ icon: "globe" }, { icon: "message" }, { icon: "cpu" }];

export function Services() {
  const t = useTranslations("Services");

  // Function to smooth scroll to the detail section
  const scrollToDetail = (index: number) => {
    const element = document.getElementById(`service-detail-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* 1. HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-black mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* 2. SUMMARY GRID (The Menu) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {serviceItems.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;

            return (
              <div 
                key={index} 
                onClick={() => scrollToDetail(index)}
                className={`
                  group 
                  cursor-pointer
                  p-10 
                  rounded-3xl 
                  border 
                  border-slate-200 
                  bg-white 
                  hover:border-black 
                  transition-all 
                  duration-300
                  hover:shadow-lg
                `}
              >
                <div className="h-14 w-14 bg-slate-100 rounded-2xl flex items-center justify-center text-black mb-8 transition-colors group-hover:bg-black group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">
                  {t(`items.${index}.title`)}
                </h3>
                
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  {t(`items.${index}.description`)}
                </p>

                <div className="flex items-center text-sm font-bold text-black group-hover:underline decoration-2 underline-offset-4">
                  Learn More <ArrowDown className="ml-2 h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. DEEP DIVE SECTIONS (Master-Detail View) */}
      <div className="flex flex-col">
        {serviceItems.map((service, index) => {
          // Zebra Striping: Even = White, Odd = Grey
          const bgClass = index % 2 === 0 ? "bg-white" : "bg-slate-50"; 
          
          return (
            <div 
              id={`service-detail-${index}`} 
              key={index}
              className={`py-24 border-t border-slate-100 ${bgClass}`}
            >
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  
                  {/* LEFT: Business Value (The CEO Pitch) */}
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-slate-200 text-xs font-bold uppercase tracking-wider text-black mb-6">
                      {t(`items.${index}.title`)}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-8 leading-tight">
                      {t(`items.${index}.details.tagline`)}
                    </h3>
                    
                    <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                      <p>
                        {t(`items.${index}.details.problem`)}
                      </p>
                      <p className="font-medium text-black">
                        {t(`items.${index}.details.result`)}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: Technical Engine (The CTO Card) */}
                  <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-6">
                      <Cpu className="text-slate-300" />
                      <h4 className="text-xl font-bold text-white">
                        {t(`items.${index}.details.tech_title`)}
                      </h4>
                    </div>

                    <ul className="space-y-6">
                      {[0, 1, 2, 3].map((i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-lg text-slate-300">
                            {t(`items.${index}.details.tech_list.${i}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}