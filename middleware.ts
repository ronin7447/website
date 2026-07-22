import { type NextRequest, NextResponse } from "next/server";

const publicFile = /\.[^/]+$/;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public assets are case-sensitive files rather than site routes.
    if (pathname.startsWith("/_next/") || publicFile.test(pathname)) {
        return NextResponse.next();
    }

    const lowercasePathname = pathname.toLowerCase();

    if (pathname === lowercasePathname) {
        return NextResponse.next();
    }

    const lowercaseUrl = request.nextUrl.clone();
    lowercaseUrl.pathname = lowercasePathname;

    return NextResponse.redirect(lowercaseUrl, 308);
}

export const config = {
    matcher: "/:path*",
};
