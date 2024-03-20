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
      <body className="m-auto mb-6 overscroll-none bg-gray-950 px-6 font-sora text-[#D3D4D9] md:max-w-screen-lg md:px-10 lg:max-w-screen-xl xl:max-w-[1500px]">
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
