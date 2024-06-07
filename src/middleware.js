//middleware.ts
import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ["en", "mm", "jp"],

  // Default locale if no match
  defaultLocale: "mm",
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(mm|jp|en)/:path*"],
};
