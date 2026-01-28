"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { sendContactEmail } from "@/actions/contact";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export function ContactForm() {
  const t = useTranslations("ContactPage.form");
  const [state, action, isPending] = useActionState(sendContactEmail, initialState);

  return (
    <form 
      action={action} 
      className={`
        space-y-6 
        bg-white 
        p-8 
        rounded-3xl       /* 👈 More rounded container */
        border 
        border-slate-200 
        shadow-sm
      `}
    >
      
      {/* Success Message */}
      {state.success && (
        <div className="p-4 bg-slate-100 text-black rounded-lg text-sm font-bold border border-slate-200">
          {t("success")}
        </div>
      )}

      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          disabled={isPending || state.success}
          className={`
            w-full 
            px-4 
            py-3 
            border 
            border-slate-200 
            rounded-xl           /* 👈 Matches container roundedness */
            bg-slate-50          /* 👈 Slight grey background for inputs */
            text-black
            placeholder:text-slate-400
            focus:bg-white
            focus:ring-2 
            focus:ring-black     /* 👈 CHANGED: Blue -> Black */
            focus:border-transparent 
            outline-none 
            transition-all 
            disabled:opacity-50
          `}
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600 font-medium">{state.errors.name[0]}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          disabled={isPending || state.success}
          className={`
            w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-black
            focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all disabled:opacity-50
          `}
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600 font-medium">{state.errors.email[0]}</p>
        )}
      </div>

      {/* Message Input */}
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending || state.success}
          className={`
            w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-black
            focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all disabled:opacity-50
          `}
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600 font-medium">{state.errors.message[0]}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending || state.success}
        className={`
          w-full 
          bg-black             /* 👈 Pure Black */
          text-white 
          font-bold 
          py-4 
          px-6 
          rounded-full         /* 👈 Pill Shape (Consistent with other CTAs) */
          hover:bg-slate-800 
          transition-all 
          hover:scale-[1.02]   /* Subtle pop effect */
          disabled:opacity-50 
          disabled:cursor-not-allowed
        `}
      >
        {isPending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}