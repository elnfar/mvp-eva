
import './globals.css'
import type { Metadata } from 'next'
import currentSessionUser from '@/actions/session-user'
import Navbar from '@/components/navbar/navbar'
import { SidebarListItem } from '@/components/SidebarListItem'
import Input from '@/components/input/input'
import MainNav from '@/components/navbar/main-nav'


export const metadata: Metadata = {
  title: 'Schedgify Admin',
  description: 'Admin dashboard of Eva',
}


const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work & Task' },
  { href: '/schedule', label: 'Schedule' }
]

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const currentUser = await currentSessionUser();

  
  return (
    <html lang="en">
      <body className=' bg-[#e8f4ff]'>
          {/* <Navbar currentUser={currentUser}/> */}
          <MainNav/>
          {children}
      </body>
    </html>
  )
}


// const Sidebar = () => {
//   return (
//     <div className='w-1/4 py-4 bg-white rounded-sm  shadow-md'>
//       <ul className="p-2  border-black">
//           {links.map((link) => (
//             <SidebarListItem key={link.href} {...link} />
//           ))}
//           <div className='border-[1px]'/>
//         </ul>

//     </div>
    
//   )
// }