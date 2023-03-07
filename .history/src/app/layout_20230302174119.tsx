"use client";

import "./global.css";
import { SessionProvider } from "next-auth/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Pacifico, Poppins } from "@next/font/google";

const pacificoFont = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});
const font = Poppins({
  weight: "300",
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
      main: "#FEFBE7",
      light: "#FEFBE7",
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
      <body className={`${font.className} ${pacificoFont.variable}`}>
        <header className="w-full h-16 bg-secondary flex justify-center items-center shadow-md">
          <p className="font-pacifico text-4xl text-primary">NomNom</p>
        </header>
        <ThemeProvider theme={theme}>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
