
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <main>
        <div className='relative'>
            <div className='font-lato flex flex-col items-center justify-center py-12 container'>
                <h1 className='md:text-[3.5rem] text-[2rem] text-zinc-700 font-extrabold'>Built for Leaders, Teams and Induviduals.</h1>
                <h2 className='md:text-[1.1rem] text-[.8rem] text-zinc-500'>Seamlessly Manage & Scale: Unleashing Productivity with Schedgify Solutions.</h2>
            </div>

            <div className='grid  gap-2 grid-cols-1 py-4 container items-center justify-center'>
                <MainCard src='/bg.png'/>
            </div>

          <div className='pt-16 flex justify-center gap-4 sm:flex-row'>
             <Button asChild className='rounded-full p-7'>
                <Link className='' href='/get-started'>Get Started</Link>
              </Button>
          </div>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,64L40,85.3C80,107,160,149,240,176C320,203,400,213,480,202.7C560,192,640,160,720,128C800,96,880,64,960,53.3C1040,43,1120,53,1200,64C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <svg className='absolute top-[1%] right-[5%] w-[445px] -z-50' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F2F4F8" d="M65.1,-52.1C80.4,-32.7,86.2,-5.8,80.5,18C74.8,41.9,57.5,62.7,39.5,64.9C21.4,67.1,2.5,50.5,-17.1,39.5C-36.7,28.5,-57.1,23.1,-64.3,9.5C-71.5,-4,-65.5,-25.8,-52.6,-44.6C-39.7,-63.4,-19.8,-79.4,2.5,-81.4C24.9,-83.4,49.7,-71.5,65.1,-52.1Z" transform="translate(100 100)" />
        </svg>
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