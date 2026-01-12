export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  // 1. Brand Identity
  name: "Trexx Architects",
  description: "High-performance digital architecture and design.",
  
  // 2. Navigation (Bilingual Safe)
  // We use keys that match your messages/en.json files
  navItems: [
    { label: "nav.home", href: "/" },
    { label: "nav.projects", href: "/projects" },
    { label: "nav.studio", href: "/studio" },
    { label: "nav.contact", href: "/contact" },
  ],

  // 3. Socials & Contacts
  links: {
    github: "https://github.com/trexx-digital",
    twitter: "https://twitter.com/trexx",
    email: "hello@trexx.com",
    address: "Valencia, Spain"
  },

  // 4. Theme Configuration (Optional Future Proofing)
  theme: {
    primaryColor: "black", // Tailwind utility: 'bg-black'
    radius: "0.5rem",
  }
};