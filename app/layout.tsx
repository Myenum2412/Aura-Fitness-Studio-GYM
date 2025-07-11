import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import ErrorBoundary from "@/components/error-boundary"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Aura Fitness Studio - Premium Gym & Wellness Center",
    template: "%s | Aura Fitness Studio",
  },
  description:
    "Transform your fitness journey at Aura Fitness Studio. Premium gym equipment, swimming pool, personal training, and wellness programs in a modern facility.",
  keywords: "gym, fitness, personal training, swimming pool, wellness, workout, health, fitness studio",
  authors: [{ name: "Aura Fitness Studio" }],
  creator: "Aura Fitness Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aurafitnessstudio.in",
    siteName: "Aura Fitness Studio",
    title: "Aura Fitness Studio - Premium Gym & Wellness Center",
    description:
      "Transform your fitness journey with our premium facilities, expert trainers, and supportive community.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Aura Fitness Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Fitness Studio - Premium Gym & Wellness Center",
    description:
      "Transform your fitness journey with our premium facilities, expert trainers, and supportive community.",
    images: ["/placeholder.svg?height=630&width=1200"],
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
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics - gtag.js */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F5X352EZHL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F5X352EZHL');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-primary-black text-white`}>
        <ErrorBoundary>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  )
}
