import type { Metadata } from "next";
import "./globals.css";
import { Amiko, Kantumruy_Pro } from "next/font/google";

const amiko = Amiko({
  subsets: ["latin"],
  weight: "400",
});

const kantumruyPro = Kantumruy_Pro({
  subsets: ["latin"],
  weight: "600",
});
export const metadata: Metadata = {
  icons: "s",
  title: "Kayan Abdelbaki Portfolio",
  description:
    "Portfolio Website for Kayan Abdelbaki to showcase his projects and work experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${amiko.className}`}>
      <body className={``}>{children}</body>
    </html>
  );
}
