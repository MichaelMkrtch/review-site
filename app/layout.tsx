import { type ReactNode } from "react";

import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import Header from "@/components/Header";
import ModalContextProvider from "@/context/ModalContext";
import MediaContextProvider from "@/context/MediaContext";

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
      <body className="overscroll-none bg-gray-950 text-[#D3D4D9]">
        <AppRouterCacheProvider>
          <ModalContextProvider>
            <MediaContextProvider>
              <Header />
              {children}
              <div id="modal" />
            </MediaContextProvider>
          </ModalContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
