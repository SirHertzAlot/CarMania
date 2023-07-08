import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CarMania',
  description: '#1 spot for the cheapest rentals near you!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
