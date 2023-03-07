"use client";
import { css } from "@emotion/css";
import { styled } from "@mui/system";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Header = styled("header")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={css`
          margin: 0;
        `}
      >
        <Header
          className={css`
            width: 100%;
            height: 100px;
          `}
        >
          Header
        </Header>
        {children}
      </body>
    </html>
  );
}
