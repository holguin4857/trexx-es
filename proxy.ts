import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';

// Initialize the next-intl middleware handler
const handleRequest = createMiddleware(routing);

/**
 * ⚠️ NEXT.JS 16 STANDARD:
 * "middleware" is deprecated. We must export a function named "proxy".
 */
export function proxy(request: NextRequest) {
  return handleRequest(request);
}

export const config = {
  // Matcher ignores internal Next.js paths and static files
  matcher: ['/', '/(es|en)/:path*']
};