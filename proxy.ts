import { NextRequest, NextResponse } from 'next/server';

import { getServerSession } from './lib/server';

const publicRoutes = ['/'];

export default async function proxy(request: NextRequest) {
  const session = await getServerSession(request);

  const { pathname } = request.nextUrl;

  if (session?.user && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!session?.user && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)', '/dashboard/:path*'],
};
