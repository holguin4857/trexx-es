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
        bg-slate-50 
        border-b 
        border-slate-200 
        py-20
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
        <h1 
          className={`
            text-3xl 
            font-extrabold 
            text-slate-900 
            sm:text-5xl 
            mb-4
          `}
        >
          {title}
        </h1>
        <p 
          className={`
            max-w-2xl 
            mx-auto 
            text-lg 
            text-slate-600
          `}
        >
          {description}
        </p>
      </div>
    </section>
  );
}