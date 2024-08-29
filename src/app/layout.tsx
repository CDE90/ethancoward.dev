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
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} flex h-screen flex-col justify-between bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-gray-200`}
      >
        <header>
          <NavBar />
        </header>
        <main className="mb-auto mt-24 pb-8">{children}</main>
        <footer>
          <Footer />
        </footer>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              function getInitialTheme() {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme) {
                  return storedTheme;
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }
              const theme = getInitialTheme();
              document.documentElement.classList.add(theme);
            })();
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Ethan Coward",
              url: "https://ethancoward.dev",
              sameAs: [
                "https://github.com/CDE90",
                "https://www.linkedin.com/in/ethan-coward/",
                "https://twitter.com/ethancoward_",
              ],
              jobTitle: "CS Student",
              description:
                "18 y/o CS student from the UK, interested in web development, data analysis, and systems security.",
            }),
          }}
        />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Ethan Coward | Personal Website & Portfolio",
  description:
    "Ethan Coward's personal website showcasing projects, skills, and experiences in web development, data analysis, and systems security.",
  keywords:
    "Ethan Coward, web development, data analysis, systems security, portfolio, projects",
  robots: "index, follow",
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ethancoward.dev",
    siteName: "Ethan Coward",
    title: "Ethan Coward | Personal Website & Portfolio",
    description:
      "Ethan Coward's personal website showcasing projects, skills, and experiences in web development, data analysis, and systems security.",
    images: [
      {
        url: "https://ethancoward.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ethan Coward",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ethancoward_",
    creator: "@ethancoward_",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12e4f3",
};
