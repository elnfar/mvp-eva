'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { User } from '@prisma/client';

type Props = {
    href: string
    label: string
    textBig?:boolean
  }

const links = [
    {
        href:'/',
        label:'Products'
    },
    {
        href:'/',
        label:'Teams'
    },
    {
        href:'/',
        label:'Platform'
    },
    {
        href:'/',
        label:'Resources'
    }

]
const secondary_links = [
    {
        href:'/pricing',
        label:'Pricing'
    },
    {
        href:'/contact',
        label:'Contact'
    },
    {
        href:'/login',
        label:'Login'
    },
]


type UserProps = {
    currentUser:User | null
}
  
export default function MainNav({currentUser}:UserProps) {

    const [open,setOpen] = useState(false)

  return (
    <header className='relative bg-white'>

        <nav className='container flex items-center justify-between gap-4 py-6'>
        <Link href='/' className='text-[1.6rem] font-bold text-[#594540]'>Schedigfy<span className='text-[1.1rem] text-[#4a251c]'>.com</span></Link>

            <ul className='hidden  lg:flex gap-5 items-center'>
                    <li >
                        <Link href='/pricing'>Pricing</Link>
                    </li>
                    <li >
                        <Link href='/contact'>Contact</Link>
                    </li>

                    {!currentUser && (
                        <li>
                        <Link href='/login'>Login</Link>
                        </li>
                    )}
                   
                <Button asChild className='py-2 rounded-full bg-[#1e7b7b]'>
                    <Link href={currentUser ? '/admin' : 'get-started'}>{ currentUser ? 'Dashboard' : 'Get Started'}</Link>
                </Button>
            </ul>

            {open && (
                <div className='fixed lg:hidden top-20 bg-white z-50 w-full left-0 bottom-0'>
                     <div className='flex flex-col justify-center px-4 py-16 gap-4'>
                        {links.map((item) => (
                            <ul className='' key={item.href}>
                                <Link className='text-[1.6rem]' href={item.href}>{item.label}</Link>
                            </ul>
                        ))}
                          </div>


                          <div className='flex flex-col justify-center px-4 gap-4'>
                            {secondary_links.map((item) => (
                                <ul key={item.href}>
                                   <Link className='text-[1.6rem]' href={item.href}> {item.label}</Link>
                                </ul>
                            ))}
                            <Button asChild className='py-2 rounded-full bg-[#1e7b7b]'>
                                <Link href='get-started'>Get Started</Link>
                            </Button>
                       </div>

                       <Link href='/' target='_top' className='block text-[1.6rem] text-center pt-16 font-bold text-[#594540]'>Schedigfy<span className='text-[1.1rem] text-[#4a251c]'>.com</span></Link>
                </div>
            )}


          {open ? <X size={42} onClick={() => setOpen(prev => !prev)} className='lg:hidden cursor-pointer'/> : <Menu onClick={() => setOpen(prev => !prev)} className='lg:hidden cursor-pointer' size={42}/>}
            

        </nav>
    </header>
  )
}

const LinkProps = ({ href,label }:Props) => {
    const pathname = usePathname()
  return (
    <li key={href} >
      <Link
    //   style={pathname === href ? {background:"#deded9"}: {}}
        className={cn(' hover:text-neutral-500 list-none text-lg font-light rounded-md p-0 m-0', {
          '': href.startsWith(pathname),
        },)}
        href={href}
      >
        {label}
      </Link>
    </li>
  )
  };
