import "@fontsource/ibm-plex-serif/400.css";
import "@fontsource/ibm-plex-serif/500.css";
import "@fontsource/ibm-plex-serif/600.css";
import "@fontsource-variable/nunito-sans";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteUrl),
  applicationName: `${siteConfig.name} Portfolio`,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    type: "website",
    url: "/",
    siteName: `${siteConfig.name} Portfolio`,
    locale: siteConfig.seo.locale,
    images: [
      {
        url: siteConfig.seo.openGraphImage,
        width: 1672,
        height: 941,
        alt: siteConfig.seo.openGraphImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [siteConfig.seo.openGraphImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
