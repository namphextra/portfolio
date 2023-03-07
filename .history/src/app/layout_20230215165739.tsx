"use client";

import { SessionProvider } from "next-auth/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Dancing_Script, Poppins } from "@next/font/google";
import "./global.css";

const dancingFont = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dancing",
});
const font = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#A0BCC2",
      light: "#A0BCC2",
    },
    secondary: {
      main: "#A0BCC2",
      light: "#A0BCC2",
    },
  },
});

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
      <body className={`${(font.className, dancingFont.variable)}`}>
        <ThemeProvider theme={theme}>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
