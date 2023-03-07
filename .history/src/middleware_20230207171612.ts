import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({req})
  console.log(3433333, token);
  if (!token) {
    return NextResponse.redirect("/admin/login");
  }
}

export const config = {
  matcher: '/admin/:path*',
}