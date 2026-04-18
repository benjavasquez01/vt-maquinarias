import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "@/lib/routing";

const handleI18n = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return handleI18n(request);
}

export const config = {
  matcher: [
    // Match all pathnames except Next.js internals and static files
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
