"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const t = useTranslations("Faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Matches the q1, q2, q3, q4 keys in your JSON
  const faqIds = [1, 2, 3, 4];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className={`
        py-20 
        bg-white
      `}
    >
      <div 
        className={`
          container 
          mx-auto 
          px-4 
          max-w-3xl
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
            {t("title")}
          </h2>
          <p className="text-black mt-2">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {faqIds.map((id, index) => (
            <div 
              key={id}
              className={`
                border 
                border-slate-200 
                rounded-xl 
                overflow-hidden 
                transition-all 
                ${openIndex === index ? "bg-slate-50 ring-1 ring-slate-200" : "bg-white"}
              `}
            >
              <button
                onClick={() => toggle(index)}
                className={`
                  flex 
                  items-center 
                  justify-between 
                  w-full 
                  p-6 
                  text-left 
                  focus:outline-none
                `}
              >
                <span 
                  className={`
                    font-semibold 
                    text-slate-900
                  `}
                >
                  {/* Dynamic Lookup: q1, q2... */}
                  {t(`items.q${id}`)}
                </span>
                <ChevronDown 
                  className={`
                    h-5 
                    w-5 
                    text-slate-500 
                    transition-transform 
                    duration-200 
                    ${openIndex === index ? "rotate-180 text-blue-600" : ""}
                  `}
                />
              </button>

              {openIndex === index && (
                <div 
                  className={`
                    px-6 
                    pb-6 
                    text-black 
                    leading-relaxed
                  `}
                >
                  {/* Dynamic Lookup: a1, a2... */}
                  {t(`items.a${id}`)}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}