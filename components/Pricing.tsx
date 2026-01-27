"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Check } from "lucide-react";

export function Pricing() {
  const t = useTranslations("Pricing");

  const plans = [
    {
      key: "starter",
      price: "€999",
      popular: false,
      featureCount: 4,
      href: "/contact?plan=starter"
    },
    {
      key: "business",
      price: "€2,499",
      popular: true, 
      featureCount: 4,
      href: "/contact?plan=business"
    },
    {
      key: "enterprise",
      price: t("plans.enterprise.price"),
      popular: false,
      featureCount: 4,
      href: "/contact?plan=enterprise"
    }
  ];

  return (
    <section 
      className={`
        py-20 
        bg-slate-50 /* Light grey background to make white cards pop */
      `}
    >
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-black mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            
            <Link 
              key={plan.key}
              href={plan.href}
              className={`
                relative 
                flex 
                flex-col 
                p-8 
                rounded-3xl 
                bg-white             /* Default: White */
                transition-all 
                duration-300
                group                /* For hover effects */
                
                /* BORDER LOGIC: Popular gets Black border, others get Grey */
                border
                ${plan.popular 
                  ? "border-black shadow-xl scale-105 z-10" 
                  : "border-slate-200 shadow-sm hover:border-black"
                }

                /* 👈 THE "CLICK/HOVER" EFFECT: Invert colors on hover */
                hover:bg-black 
              `}
            >
              
              {/* POPULAR BADGE */}
              {plan.popular && (
                <span 
                  className={`
                    absolute 
                    -top-4 
                    left-1/2 
                    -translate-x-1/2 
                    bg-black        /* Default: Black Badge */
                    text-white 
                    px-4 
                    py-1 
                    rounded-full 
                    text-xs 
                    font-bold 
                    uppercase 
                    tracking-wide
                    
                    /* Badge turns White on Hover */
                    group-hover:bg-white
                    group-hover:text-black
                    transition-colors
                  `}
                >
                  {t("popular")}
                </span>
              )}
              
              {/* PLAN NAME */}
              <h3 
                className={`
                  font-bold 
                  text-xl 
                  mb-2
                  text-black               /* Default: Black */
                  group-hover:text-white   /* Hover: White */
                  transition-colors
                `}
              >
                {t(`plans.${plan.key}.name`)}
              </h3>
              
              {/* PRICE */}
              <div className="mb-6">
                <span 
                  className={`
                    text-4xl 
                    font-extrabold 
                    tracking-tight
                    text-black             /* Default: Black */
                    group-hover:text-white /* Hover: White */
                    transition-colors
                  `}
                >
                  {plan.price}
                </span>
              </div>
              
              {/* FEATURES */}
              <ul className="space-y-4 mb-8 flex-1">
                {Array.from({ length: plan.featureCount }).map((_, index) => (
                  <li 
                    key={index} 
                    className={`
                      flex 
                      items-center 
                      text-sm
                      font-medium
                      text-slate-600          /* Default: Grey */
                      group-hover:text-slate-300 /* Hover: Light Grey */
                      transition-colors
                    `}
                  >
                    <Check 
                      className={`
                        h-5 
                        w-5 
                        mr-3 
                        flex-shrink-0
                        text-black            /* Default: Black Check */
                        group-hover:text-white /* Hover: White Check */
                        transition-colors
                      `} 
                    />
                    {t(`plans.${plan.key}.features.${index}`)}
                  </li>
                ))}
              </ul>
              
              {/* BUTTON */}
              <div 
                className={`
                  w-full 
                  py-4 
                  px-6 
                  rounded-full 
                  font-bold 
                  text-center 
                  transition-all
                  
                  /* BUTTON COLORS */
                  ${plan.popular 
                    ? "bg-black text-white"  // Popular Button: Black
                    : "bg-slate-100 text-black" // Standard Button: Grey
                  }

                  /* HOVER STATE: Button Inverts against the black card */
                  group-hover:bg-white 
                  group-hover:text-black
                `}
              >
                {t("button")}
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}