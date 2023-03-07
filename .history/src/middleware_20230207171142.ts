import { NextRequest, NextResponse } from "next/server";
import {getServerSession} from 'next-auth/next'
import { authOptions } from "./pages/api/auth/[...nextauth]";

export async function middleware(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return NextResponse.redirect("/login");
  }
}