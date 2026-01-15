# Trexx Digital | Master Template v2.0

> **Architecture:** Next.js 16 (App Router) + Tailwind CSS v4 + next-intl (i18n)
> **Status:** Production Ready

## ⚡ Quick Start

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## 🛠️ Configuration (The "Source of Truth")

This template is designed for **"Config-First"** development. You can rebrand the entire site without touching the UI components.

### 1. Branding & Navigation
Edit `config/site.ts` to update the agency/client details:

```typescript
export const siteConfig = {
  name: "Client Name", // Updates Navbar & Meta titles
  navItems: [ ... ],   // Updates Menu
  links: { ... }       // Updates Social Links
};

2. Localization (i18n)
Routing: Defined in i18n/routing.ts (Default: es).

Content:

messages/en.json (English)

messages/es.json (Spanish)

Important: If you add a new text key in a component (e.g., t('about.title')), you MUST add it to both JSON files, or the build will fail.

3. Styling (Tailwind v4)
We use Tailwind CSS v4. Configuration is no longer in tailwind.config.ts.

Theme Settings: Edited directly in app/globals.css.

CSS Variables: @theme { --color-primary: ... }.

Project Structure

/app
  /[locale]/       # 🟢 Localized Routes (Home, About, etc.)
  globals.css      # 🟢 Global Styles & Tailwind Config
/components        # UI Components (Navbar, Footer)
/config            # Site Configuration (Edit this first!)
/messages          # Translation JSON files
/i18n              # Routing Logic
proxy.ts           # Middleware for Locale Redirection

Maintained by Trexx Digital Architects