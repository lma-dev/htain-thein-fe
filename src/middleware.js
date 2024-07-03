import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./app/config/config";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { cookies } from "next/headers";

export default function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken") || "";

  function getLocale(request) {
    const acceptedLanguage =
      request.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptedLanguage };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
  }

  const { pathname } = request.nextUrl;

  // Validate and sanitize pathname for locale handling
  const sanitizedPathname = pathname.replace(/\/$/, ""); // Remove trailing slashes
  // Handle missing locale prefix
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !sanitizedPathname.startsWith(`/${locale}/`) &&
      sanitizedPathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    // Validate and sanitize locale before redirection
    const sanitizedLocale = locale.replace(/\/$/, ""); // Remove trailing slashes
    return NextResponse.redirect(
      new URL(`/${sanitizedLocale}/${sanitizedPathname}`, request.url)
    );
  }

  // Redirect to login if token is missing and not on login or API routes
  if (
    !token &&
    !locales.some((loc) => sanitizedPathname.startsWith(`/${loc}/login`)) &&
    !sanitizedPathname.startsWith("/api") &&
    !locales.some((loc) => sanitizedPathname === `/${loc}`)
  ) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  // Initialize i18n middleware for further routing
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};
