import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import {getServerSession} from 'next-auth/next'
import { authOptions } from "./pages/api/auth/[...nextauth]";

export async function middleware(req: NextRequest) {
  const token = getToken({req})
  console.log(3433333, token);
  
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return NextResponse.redirect("/login");
  }
}

export const config = {
  matcher: '/admin/:path*',
}