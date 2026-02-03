import React from "react"
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Urban Tech | Digital Marketing & Influencer Agency',
  description: 'Urban Tech is a premier digital marketing agency specializing in influencer marketing, SEO, website design, UI/UX, and brand strategy. Elevate your brand with data-driven campaigns.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
