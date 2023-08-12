import Link from 'next/link'
import React from 'react'


type Props ={
    label:string,
    href:string
}

export default function MainBox({label,href}:Props) {
  return (
    <div className='flex justify-center '>
        <Link  href={href} className='w-full h-[300px] flex items-center justify-center bg-red-400 hover:bg-red-700 transition-all duration-200'>
            <span className='text-white text-[2rem] font-extrabold'>{label}</span>
        </Link>
    </div>
  )
}
