import "~/styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { NavBar } from "~/app/_components/NavBar";
import { Footer } from "~/app/_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${inter.variable} flex h-screen flex-col justify-between bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-gray-200`}
      >
        <NavBar />
        <main className="mb-auto mt-24 pb-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Ethan Coward",
  description: "Personal website of Ethan Coward",
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12e4f3",
};
