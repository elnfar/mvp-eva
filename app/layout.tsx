
import './globals.css'
import type { Metadata } from 'next'
import currentSessionUser from '@/actions/session-user'
import Navbar from '@/components/navbar/navbar'


export const metadata: Metadata = {
  title: 'Eva Admin',
  description: 'Admin dashboard of Eva',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const user = await currentSessionUser();
  return (
    <html lang="en">
      <body className=' bg-neutral-100'>
        {user?.role === "ADMIN" && <Navbar/>}
           {children}
      </body>
    </html>
  )
}
