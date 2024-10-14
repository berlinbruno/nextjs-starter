import { ThemeProvider } from '@/components/providers/theme-provider';
import siteData from '@/constants/data';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.BASE_URL),
  applicationName: siteData.APP_NAME,
  authors: [
    {
      url: siteData.AUTHORS[0].URL,
      name: siteData.AUTHORS[0].NAME,
    },
  ],
  keywords: siteData.KEYWORDS,
  title: {
    default: siteData.TITLE,
    template: `%s |  ${siteData.TITLE}`,
  },
  description: siteData.DESCRIPTION,
  openGraph: {
    title: siteData.TITLE,
    description: siteData.DESCRIPTION,
    url: './',
    siteName: siteData.TITLE,
    images: [siteData.OPENGRAPH],
    locale: siteData.LANG,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteData.TITLE,
    card: 'summary_large_image',
    images: [siteData.OPENGRAPH],
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteData.BASE_URL}/feed.xml`,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: siteData.THEME_COLOR_LIGHT,
    },
    { media: '(prefers-color-scheme: dark)', color: siteData.THEME_COLOR_DARK },
  ],
  colorScheme: 'normal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-48x48.png"
        sizes="48x48"
      />
      <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <meta
        name="apple-mobile-web-app-title"
        content={siteData.APP_SHORT_NAME}
      />
      <meta
        name="msapplication-TileColor"
        content={siteData.BACKGROUND_COLOR}
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={siteData.DEFAULT_THEME}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
