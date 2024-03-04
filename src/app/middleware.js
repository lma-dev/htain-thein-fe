import { NextResponse } from 'next/server';
import { isPathStartsWithBackSlash } from './libs/checkUrlTypes'

export function middleware(request) {

}

export const config = {
  matcher: ['/:path*'],
};
