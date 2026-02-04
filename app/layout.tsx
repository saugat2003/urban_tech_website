import React from "react"
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Urban Tech | Digital Marketing & Web Development Agency',
  description: 'Urban Tech is a premier digital marketing agency specializing in web design, development, SEO, UI/UX, and brand strategy. Elevate your brand with data-driven digital solutions.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
