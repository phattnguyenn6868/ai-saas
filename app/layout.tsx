import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Punch AI | Advanced Boxing Video Analysis & Performance Analytics",
  description:
    "Revolutionary AI-powered boxing analysis platform. Upload sparring or fight videos and get detailed performance scores for power, defense, accuracy, ring generalship, fight IQ, and footwork. Improve your boxing skills with professional-grade AI coaching.",
  keywords:
    "boxing AI analysis, fight video analysis, boxing performance analytics, AI boxing coach, combat sports technology, boxing training AI, fight scoring system, boxing technique analysis, sparring analysis, boxing skill assessment",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://punch-ai.com",
    title: "Punch AI | AI-Powered Boxing Video Analysis",
    description:
      "Upload your boxing videos and get instant AI analysis with detailed performance scores. Improve your boxing skills with professional-grade analytics.",
    siteName: "Punch AI",
    images: [
      {
        url: "https://punch-ai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Punch AI Boxing Analysis Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punch AI | AI-Powered Boxing Video Analysis",
    description:
      "Revolutionary AI boxing analysis. Upload videos, get detailed performance scores, improve your skills.",
    images: ["https://punch-ai.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
