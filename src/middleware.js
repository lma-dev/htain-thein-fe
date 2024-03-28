import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookiesString = request.headers.get("cookie");

  if (cookiesString) {
    const cookies = {};

    cookiesString.split(";").forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      cookies[name] = decodeURIComponent(value);
    });

    const appCookie = cookies["accessToken"];
    if (!appCookie) {
      // If the cookie is not present, redirect to the unauthorized page
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  } else {
    // If no cookies are present, redirect to the unauthorized page
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  // If the request doesn't match a protected route or the user is authenticated, continue with the default behavior
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/about/:path*",
    "/dashboard/:path*",
    "/settings/:path*",
    "/reports/:path*",
    "/users/:path*",
    "/regular-costs/:path*",
    "/chat-room/:path*",
  ],
};
