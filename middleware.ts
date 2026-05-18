import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    const isLoggedIn = !!session;
    const { pathname } = request.nextUrl;
    const isPublicPath = pathname === '/login';
    const isProtectedPath = !isPublicPath && !pathname.startsWith('/_next') && pathname !== '/favicon.ico';

    if (!isLoggedIn && isProtectedPath) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (isLoggedIn && isPublicPath) {
        return NextResponse.redirect(new URL('/dashboard/inicio/indicador-general', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};