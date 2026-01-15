import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq"; // 👈 Import the new component

export default function Home() {
  return (
    <div 
      className={`
        flex 
        flex-col 
        gap-8 
        pb-10
      `}
    >
      {/* 1. The Hook */}
      <Hero />
      
      {/* 2. The Solution */}
      <Services />
      
      {/* 3. The Offer */}
      <Pricing />
      
      {/* 4. The Objection Handling (Closes the deal) */}
      <Faq />
    </div>
  );
}