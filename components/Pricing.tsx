"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export function Pricing() {
  const t = useTranslations("Pricing");

  // We define the structure here, but the TEXT comes from 't(...)'
  const plans = [
    {
      key: "starter",
      price: "€999",
      popular: false,
      featureCount: 3 // Matches the 0, 1, 2 keys in your JSON
    },
    {
      key: "business",
      price: "€2,499",
      popular: true,
      featureCount: 4 // Matches 0, 1, 2, 3
    },
    {
      key: "enterprise",
      price: t("plans.enterprise.price"), // "Custom" / "A medida"
      popular: false,
      featureCount: 4
    }
  ];

  return (
    <section 
      className={`
        py-20 
        bg-slate-50
      `}
    >
      <div className="container mx-auto px-4">
        
        <div 
          className={`
            text-center 
            max-w-2xl 
            mx-auto 
            mb-16
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
          <p className="text-slate-600 mt-4">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.key}
              className={`
                relative 
                p-8 
                bg-white 
                rounded-2xl 
                border 
                ${plan.popular 
                  ? "border-blue-600 shadow-xl" 
                  : "border-slate-200 shadow-sm"
                }
              `}
            >
              {plan.popular && (
                <span 
                  className={`
                    absolute 
                    -top-4 
                    left-1/2 
                    -translate-x-1/2 
                    bg-blue-600 
                    text-white 
                    px-3 
                    py-1 
                    rounded-full 
                    text-xs 
                    font-bold 
                    uppercase 
                    tracking-wide
                  `}
                >
                  {t("popular")}
                </span>
              )}
              
              <h3 className="font-bold text-lg text-slate-900">
                {t(`plans.${plan.key}.name`)}
              </h3>
              
              <div className="my-4">
                <span className="text-4xl font-extrabold text-slate-900">
                  {plan.price}
                </span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {/* Loop based on featureCount to grab keys 0, 1, 2... */}
                {Array.from({ length: plan.featureCount }).map((_, index) => (
                  <li 
                    key={index} 
                    className={`
                      flex 
                      items-center 
                      text-slate-600 
                      text-sm
                    `}
                  >
                    <Check 
                      className={`
                        h-4 
                        w-4 
                        text-blue-600 
                        mr-3 
                        flex-shrink-0
                      `} 
                    />
                    {/* Dynamic Key Lookup: plans.starter.features.0 */}
                    {t(`plans.${plan.key}.features.${index}`)}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`
                  w-full 
                  py-3 
                  px-4 
                  rounded-lg 
                  font-semibold 
                  transition-colors 
                  ${plan.popular 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }
                `}
              >
                {t("button")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}