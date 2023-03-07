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
    <>
      <Header className="w-full h-12">
        <p
          className={css`
            font-family: Dancing Script, cursive;
          `}
        >
          NOMNOM
        </p>
      </Header>
      {children}
    </>
  );
}
