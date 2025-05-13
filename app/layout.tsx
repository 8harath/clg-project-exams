import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LoadingProvider } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Student Resource Hub | Jain University",
  description: "Access comprehensive study materials and resources for Jain University students. Powered by Avalon, created by 8harath.",
  keywords: [
    "Jain University",
    "Avalon",
    "8harath",
    "Avalon Jain",
    "Jain Avalon",
    "Jain University live",
    "Jain Avalon live",
    "Student Resources",
    "Study Materials",
    "Academic Resources",
    "Jain University Students",
    "Online Learning",
    "Educational Resources"
  ].join(", "),
  authors: [{ name: "8harath" }],
  creator: "8harath",
  publisher: "Avalon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jain-avalon.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Student Resource Hub | Jain University",
    description: "Access comprehensive study materials and resources for Jain University students. Powered by Avalon, created by 8harath.",
    url: "https://jain-avalon.vercel.app",
    siteName: "Jain University Student Resource Hub",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Jain University Student Resource Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Resource Hub | Jain University",
    description: "Access comprehensive study materials and resources for Jain University students. Powered by Avalon, created by 8harath.",
    images: ["/placeholder-logo.png"],
    creator: "@8harath",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  )
}
