import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muji Lab - Welcome',
  description: 'Muji Lab specializes in crafting bespoke websites, unique logos, and eye-catching print designs, blending creativity with functionality to bring your digital and print aspirations to life.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
