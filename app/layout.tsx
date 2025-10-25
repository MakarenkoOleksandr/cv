import type { Metadata } from "next";
import { Bitcount_Grid_Single, Geist } from "next/font/google";
import "./globals.css";
import Bg from "@/components/common/Bg";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const font = Bitcount_Grid_Single({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Makarenko Oleksandr",
  description: "Front-End Developer CV of Makarenko Oleksandr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} ${geistSans.variable} antialiased`}>
        <NextTopLoader
          height={3}
          crawl={true}
          easing="ease"
          color="var(--main-color)"
          showSpinner={true}
        />
        <Bg />
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
