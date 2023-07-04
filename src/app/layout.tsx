import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ["600"],
  subsets: ['latin'],
  preload: false,
  display: "swap",
})

export const metadata = {
  title: 'Yuki\'s portfolio',
  description: 'Yuki\'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
