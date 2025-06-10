import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Darnell Edwards',
  description: 'Darnell Edwards Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/darnellicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

