'use client'

import Link from "next/link"


type User = {
    user:User | null
}
export default function Navbar() {
  return (
    <header className=" py-6 shadow-lg border-red-100 border-b-2">
        <nav className="p-2 container">
            <ul className="flex gap-6 justify-end uppercase font-sans text-[17px] text-neutral-500">
                <li><Link href='/'>home</Link></li>
                <li><Link href='/create-user'>help</Link></li>
                <li><Link href='/create-team'>contact support</Link></li>
            </ul>
        </nav>
    </header>
  )
}
