
import './globals.css'
import type { Metadata } from 'next'
import currentSessionUser from '@/actions/session-user'
import Navbar from '@/components/navbar/navbar'
import { SidebarListItem } from '@/components/SidebarListItem'
import Input from '@/components/input/input'
import MainNav from '@/components/navbar/main-nav'
import { Alegreya_Sans_SC } from 'next/font/google'


export const metadata: Metadata = {
  title: 'schedgify.com',
  description: 'schedgofy main',
}
const inter = Alegreya_Sans_SC({ subsets: ["latin"],weight:"400" })


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const currentUser = await currentSessionUser();

  
  return (
    <html lang="en" className={inter.className}>
      <body>
          {/* <Navbar currentUser={currentUser}/> */}
          <MainNav currentUser={currentUser}/>
          {children}
      </body>
    </html>
  )
}
