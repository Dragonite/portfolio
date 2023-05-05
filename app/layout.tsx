import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Haolin's Portfolio",
  description: 'My resume and portfolio of my work over my career.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
