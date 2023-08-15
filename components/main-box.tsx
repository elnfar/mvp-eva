import Link from 'next/link'
import React from 'react'


type Props ={
    label:string,
    href:string
}

export default function MainBox({label,href}:Props) {
  return (
    <div className='flex justify-center '>
        <Link  href={href} className='w-full h-[250px] flex items-center justify-center border-2 hover:bg-indigo-900 hover:text-white transition-all duration-200'>
            <span className='text-[2rem] font-extrabold font-baback'>{label}</span>
        </Link>
    </div>
  )
}
