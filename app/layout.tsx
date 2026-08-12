import "./css/style.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenpasta.ua"),

  title: {
    default: "Golden Pasta — макарони з твердих сортів пшениці",
    template: "%s | Golden Pasta",
  },

  description:
    "Golden Pasta — макарони з твердих сортів пшениці та рецепти смачних страв з пасти.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Golden Pasta — макарони з твердих сортів пшениці",
    description:
      "Golden Pasta — макарони з твердих сортів пшениці та рецепти смачних страв з пасти.",
    url: "https://goldenpasta.ua/",
    siteName: "Golden Pasta",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-[#F6E7CF] font-inter text-base text-[#3B2F2F] antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}