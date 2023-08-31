
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <main>
        <div className='flex flex-col gap-6 items-center justify-center container py-16'>
            <div className='flex flex-col items-center gap-2 justify-center container'>
                <h1 className='md:text-[3.5rem] text-[2rem] text-zinc-700 font-extrabold'>Built for Leaders, Teams and Induviduals.</h1>
                <h2 className='md:text-[1.1rem] text-[.8rem] text-zinc-500'>Seamlessly Manage and Scale unleashing Productivity with Schedgify Solutions.</h2>
                
                <div className=' gap-4 sm:flex-row'>
                    <Button asChild className='rounded-full p-7'>
                        <Link className='' href='/get-started'>Get Started</Link>
                      </Button>
                </div>
            </div>


          <div className='w-[730px]'>
              <div className='bg-[#328e93] flex items-center px-4 rounded-lg'>
                <h1 className='text-white text-[1.5rem]'>Hire first, assign works and track the results easily. Reduce your work time force.</h1>
                <Image src='/i.png' width={230} height={400} alt='chart-image' className=' object-cover'/>
              </div>
          </div>

       </div>
    </main>
  )
}





const MainCard = ({src}:{src:string}) => {
  return (
    <div className=' rounded-lg flex justify-center flex-col items-center'>
        <Image src={src} width={1400} height={900} className=' rounded-2xl w-[50rem] object-contain' alt='main-image-card-page.tsx'/>
    </div>
  )
}