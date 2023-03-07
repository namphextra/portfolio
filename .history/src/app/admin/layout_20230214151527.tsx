"use client";
import { css } from "@emotion/css";
import { styled } from "@mui/system";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const MyThemeComponent = styled("div")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }));
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header
          className={css`
            width: 100vw;
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
