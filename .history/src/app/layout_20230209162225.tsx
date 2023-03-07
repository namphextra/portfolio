"use client";

import { SessionProvider } from "next-auth/react";
import { injectGlobal } from "@emotion/css";

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
