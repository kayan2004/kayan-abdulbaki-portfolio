import type { Metadata } from "next";
import "./globals.css";
import { Amiko } from "next/font/google";

const amiko = Amiko({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kayan Abdelbaki Portfolio",
  description:
    "Portfolio Website for Kayan Abdelbaki to showcase his projects and work experiences.",
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${amiko.className}`}>
      <body className={`bg-black`}>{children}</body>
    </html>
  );
}
