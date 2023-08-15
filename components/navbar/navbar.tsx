'use client'

import UserProfileImage from "@/app/employees/[id]/user-profile"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useState } from "react";
import { Button } from "../ui/button";


type Role = "ADMIN" | "USER"; // Add other roles if you have them

type User = {
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

type NavbarProps = {
  currentUser: User | null;
}
export default function Navbar({currentUser}:NavbarProps) {

  const [open,setOpen] = useState(false)

  return (
    <header className=" py-6 shadow-lg relative border-red-100 border-b-2">
        <nav className="p-2 container flex justify-between items-center">
            <Link href='/' className="text-[2.4rem] font-mono font-extrabold underline">Ev<span className=" text-purple-400">a</span></Link>
            <ul className="flex gap-6 justify-end uppercase items-center text-[18px] text-neutral-500">
                <li><Link href='/online'>online</Link></li>
                <li><Link href='/track'>track</Link></li>
                <li><Link href='/help'>help</Link></li>
                {currentUser ? (
              <button onClick={() => setOpen(prev => !prev)}>
              <UserProfileImage/>
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
