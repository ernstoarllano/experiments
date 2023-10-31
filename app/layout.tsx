import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ThemeProvider from '@/components/theme-provider'

import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Experiments',
  description: 'A collection of Next.js experiments',
}

interface RootLayoutProps {
  children: React.ReactNode
}

/**
 * Component for the root layout.
 *
 * @param {RootLayoutProps} props The component props
 * @returns {JSX.Element} The component
 */

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
