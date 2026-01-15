"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { sendContactEmail } from "@/actions/contact";

// Initial state for the form
const initialState = {
  success: false,
  message: "",
  errors: {},
};

export function ContactForm() {
  const t = useTranslations("ContactPage.form");
  
  // 🔗 Connect to Server Action
  const [state, action, isPending] = useActionState(sendContactEmail, initialState);

  return (
    <form 
      action={action} 
      className={`
        space-y-6 
        bg-white 
        p-8 
        rounded-2xl 
        border 
        border-slate-200 
        shadow-sm
      `}
    >
      
      {/* Success Message */}
      {state.success && (
        <div className={`
          p-4 
          bg-green-50 
          text-green-700 
          rounded-lg 
          text-sm 
          font-medium 
          border 
          border-green-100
        `}>
          {t("success")}
        </div>
      )}

      {/* Name Input */}
      <div>
        <label 
          htmlFor="name" 
          className={`
            block 
            text-sm 
            font-medium 
            text-slate-700 
            mb-1
          `}
        >
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
            py-2 
            border 
            border-slate-300 
            rounded-lg 
            focus:ring-2 
            focus:ring-blue-600 
            focus:border-transparent 
            outline-none 
            transition-all 
            disabled:opacity-50
          `}
        />
        {/* Error Message */}
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label 
          htmlFor="email" 
          className={`
            block 
            text-sm 
            font-medium 
            text-slate-700 
            mb-1
          `}
        >
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          disabled={isPending || state.success}
          className={`
            w-full 
            px-4 
            py-2 
            border 
            border-slate-300 
            rounded-lg 
            focus:ring-2 
            focus:ring-blue-600 
            focus:border-transparent 
            outline-none 
            transition-all 
            disabled:opacity-50
          `}
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
        )}
      </div>

      {/* Message Input */}
      <div>
        <label 
          htmlFor="message" 
          className={`
            block 
            text-sm 
            font-medium 
            text-slate-700 
            mb-1
          `}
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending || state.success}
          className={`
            w-full 
            px-4 
            py-2 
            border 
            border-slate-300 
            rounded-lg 
            focus:ring-2 
            focus:ring-blue-600 
            focus:border-transparent 
            outline-none 
            transition-all 
            disabled:opacity-50
          `}
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending || state.success}
        className={`
          w-full 
          bg-slate-900 
          text-white 
          font-semibold 
          py-3 
          px-6 
          rounded-lg 
          hover:bg-slate-800 
          transition-colors 
          disabled:opacity-50 
          disabled:cursor-not-allowed
        `}
      >
        {isPending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}