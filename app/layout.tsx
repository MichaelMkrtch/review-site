import { type ReactNode } from "react";

import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import Header from "@/components/Header";
import ModalContextProvider from "@/context/ModalContext";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Review Site",
  description: "A place to share your movie reviews",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${sora.variable} ${plusJakartaSans.variable}`}>
      <body className="overflow-hidden bg-gray-950 text-zinc-200">
        <AppRouterCacheProvider>
          <ModalContextProvider>
            <Header />
            {children}
            <div id="modal" />
          </ModalContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
