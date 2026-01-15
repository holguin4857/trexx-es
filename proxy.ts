import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// ⚠️ Next.js 16 Standard: Export the middleware logic as the default export
// The 'createMiddleware' function returns a handler compatible with the Proxy API
export default createMiddleware(routing);

export const config = {
  // Matcher ignoring `/_next/`, `/api/` and static files
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match all pathnames within specific routes if needed
    '/([\\w-]+)?/users/(.+)'
  ]
};