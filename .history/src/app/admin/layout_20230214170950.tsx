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
    <Header
      className={css`
        width: 100%;
        height: 50px;
      `}
    >
      Header
    </Header>
      {children}
  );
}
