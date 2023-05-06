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
        <div className='bg-zinc-900 text-gray-400 pb-4 text-center'>Copyright © 2023 Haolin Wu</div>
      </body>
    </html>
  )
}
