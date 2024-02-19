import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const res = NextResponse.next();

    // Create a Supabase client configured to use cookies
    const supabase = createMiddlewareClient({ req, res });

    // if we have a session which means someone has loggedIn 
    const { data } = await supabase.auth.getSession();

    if (data?.session && req.nextUrl.pathname.startsWith("/auth")) {
        // we dont want them to go there
        return NextResponse.redirect(new URL('/', req.url))
    };

    if (!data?.session && (
        req.nextUrl.pathname.startsWith('/checkout') ||
        req.nextUrl.pathname.startsWith('/success') ||
        req.nextUrl.pathname.startsWith('/orders') ||
        req.nextUrl.pathname.startsWith('/address')
    )) {
        return NextResponse.redirect(new URL("/auth", req.url))
    };

    return res;

}

