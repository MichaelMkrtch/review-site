import type { Metadata } from "next";
import "./globals.css";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import NavMenu from "@/components/NavMenu";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${plusJakartaSans.variable}`}>
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
