import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kelby Gassman UX Designer',
  description: 'Kelby Gassman\'s UX Designer and Design Technologist portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
