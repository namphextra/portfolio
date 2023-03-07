"use client";
import { css } from "@emotion/css";

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
        <header
          className={css`
            width: 100vw;
            height: 100px;
          `}
        >
          Header
        </header>
        {children}
      </body>
    </html>
  );
}
