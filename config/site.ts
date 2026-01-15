export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Trexx Digital",
  description: "High-performance digital agency based in Spain.",
  navItems: [
    { label: "projects", href: "/projects" },
    { label: "services", href: "/services" },
    { label: "about", href: "/about" },
    { label: "contact", href: "/contact" }
  ],
  links: {
    contact: "/contact",
    projects: "/projects",
    linkedin: "https://linkedin.com", 
    facebook: "https://facebook.com", 
  }
  
};