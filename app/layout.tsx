import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LoadingProvider } from "./providers"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Student Resource Hub",
  description: "Academic resources for 4th semester Data Analytics students at Jain University",
  generator: 'Made with ♥ by Bharath'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} bg-amber-50 text-gray-900 min-h-screen`}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  )
}
