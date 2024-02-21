import { NextResponse } from 'next/server';
import { isPathStartsWithBackSlash } from './libs/checkUrlTypes'

export function middleware(request) {
  const pathName = request.nextUrl.pathname

  // Check if the requested URL matches a protected route
  if (isPathStartsWithBackSlash(pathName)) {
    // Check if the cookie exists in the request headers
    const cookies = request.headers.get('cookie');
    const hasCookie = cookies && cookies.includes('IncomeController');
    if (!hasCookie) {
      // If the cookie is not present, redirect to the unauthorized page
      return NextResponse.redirect(new URL('/404', request.url));
    }
  }
  // If the request doesn't match a protected route or the user is authenticated, continue with the default behavior
  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
