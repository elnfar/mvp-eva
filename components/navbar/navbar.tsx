'use client'

import UserProfileImage from "@/app/employees/[id]/user-profile"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useState } from "react";
import { Button } from "../ui/button";
import { Activity, Bell, HelpCircle, Inbox, MenuIcon, Search, UserPlus2 } from "lucide-react";
import { Session } from "next-auth";


type Role = "ADMIN" | "USER"; // Add other roles if you have them

type UserType = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  hashedPassword: string;
  role: Role;
  salary: string | null;
  createdAt: Date;
  updatedAt: Date;
  teamId: string | null;
  projectId: string | null;
}


type SessionUserType = {
  currentUser: UserType;
  session: Session;
}
type NavbarProps = {
  currentUser: SessionUserType | null;

}
export default function Navbar({currentUser}:NavbarProps) {

  const [open,setOpen] = useState(false)

  return (
    <header className=" relative">
        <nav className="p-2 container flex justify-between items-center">
          <div className="flex gap-4">
           <MenuIcon/>
           <h1 className=" font-light"><span className="font-bold">eva</span> system management</h1>
          </div>
           
            <ul className="flex gap-6 justify-end uppercase items-center text-[18px] text-neutral-500">
                <li><Link href='/notifications'><Bell size={19} className="text-zinc-900"/></Link></li>
                <li><Link href='/inbox'><Inbox size={19} className="text-zinc-900"/></Link></li>
                <li><Link href='/activity'><Activity size={19} className="text-zinc-900"/></Link></li>
                <li className="border-r-2 pr-2"><Link href='/activity'><UserPlus2 size={19} className="text-zinc-900"/></Link></li>

                <li><Link href='/activity'><Search size={19} className="text-zinc-900"/></Link></li>
                <li><Link href='/activity'><HelpCircle size={19} className="text-zinc-900"/></Link></li>


                {currentUser ? (
              <button onClick={() => setOpen(prev => !prev)}>
              <UserProfileImage currentUser={currentUser}/>
              </button>
                ) : (
                  <Link href='/admin-login'>Login</Link>
                )}
               
            </ul>
        </nav>
        {open && (
          <div className="absolute  right-5 -bottom-5">
            <Button className="w-[200px]" onClick={() => signOut()}>Logout</Button>
          </div>
        )}
    </header>
  )
}
