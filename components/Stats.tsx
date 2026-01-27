"use client";

import { useTranslations } from "next-intl";

export function Stats() {
  const t = useTranslations("About");

  return (
    <section className="py-20 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-8 text-center">
        
        {/* Stat 1 */}
        <div>
          <div className="text-5xl font-extrabold text-black tracking-tight">150+</div>
          <div className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">
            {t("stats.clients")}
          </div>
        </div>
        
        {/* Stat 2 */}
        <div>
          <div className="text-5xl font-extrabold text-black tracking-tight">300+</div>
          <div className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">
            {t("stats.projects")}
          </div>
        </div>
        
        {/* Stat 3 */}
        <div>
          <div className="text-5xl font-extrabold text-black tracking-tight">10+</div>
          <div className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">
            {t("stats.years")}
          </div>
        </div>

      </div>
    </section>
  );
}