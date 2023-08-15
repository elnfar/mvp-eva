'use client'

import UserProfileImage from "@/app/employees/[id]/user-profile"
import { signOut } from "next-auth/react"
import Link from "next/link"

type User = {
    user:User | null
}
export default function Navbar() {
  return (
    <header className=" py-6 shadow-lg border-red-100 border-b-2">
        <nav className="p-2 container">
            <ul className="flex gap-6 justify-end uppercase items-center text-[18px] text-neutral-500">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/help'>help</Link></li>
                <button>
                  <UserProfileImage/>
                </button>
            </ul>
        </nav>
    </header>
  )
}
