import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === '/quiz') {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/image|_next/static|favicon.ico).*)', '/quiz'],
};
