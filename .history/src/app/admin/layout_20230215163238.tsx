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
      <Header className="w-3/6 h-12	">
        <p
          className={css`
            fontfamily: Dancing Script, cursive;
          `}
        >
          NOMNOM
        </p>
      </Header>
      {children}
    </>
  );
}
