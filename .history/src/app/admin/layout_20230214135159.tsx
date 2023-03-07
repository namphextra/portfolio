"use client";
import { css } from "@emotion/react";

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
      <header css={{ width: "100vw", height: "100px" }}>Header</header>
      <body>{children}</body>
    </html>
  );
}
