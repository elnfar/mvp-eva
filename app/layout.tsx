
import './globals.css'
import type { Metadata } from 'next'
import currentSessionUser from '@/actions/session-user'
import Navbar from '@/components/navbar/navbar'
import { SidebarListItem } from '@/components/SidebarListItem'
import Input from '@/components/input/input'
import MainNav from '@/components/navbar/main-nav'


export const metadata: Metadata = {
  title: 'schedgify.com',
  description: 'schedgofy main',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const currentUser = await currentSessionUser();

  
  return (
    <html lang="en">
      <body>
          {/* <Navbar currentUser={currentUser}/> */}
          <MainNav/>
          {children}
      </body>
    </html>
  )
}
