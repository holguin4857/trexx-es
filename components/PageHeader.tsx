"use client";

export function PageHeader({ 
  title, 
  description 
}: { 
  title: string; 
  description: string; 
}) {
  return (
    <section 
      className={`
        bg-white           /* 👈 CHANGED: Was slate-50. Now Clean White. */
        border-b 
        border-slate-200 
        py-24              /* 👈 Increased padding for more "Air" */
      `}
    >
      <div 
        className={`
          container 
          mx-auto 
          px-4 
          text-center
        `}
      >
        {/* The Big Page Title */}
        <h1 
          className={`
            text-4xl 
            font-extrabold    /* 👈 CHANGED: Thicker font */
            tracking-tight    /* 👈 CHANGED: Tighter letters */
            text-black        /* 👈 CHANGED: Was slate-900. Now Pure Black. */
            sm:text-6xl 
            mb-6
          `}
        >
          {title}
        </h1>
        
        {/* The Description below it */}
        <p 
          className={`
            max-w-2xl 
            mx-auto 
            text-xl           /* 👈 Larger text size */
            text-slate-600    /* Dark Grey for readability */
          `}
        >
          {description}
        </p>
      </div>
    </section>
  );
}