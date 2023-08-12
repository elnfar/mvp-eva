import MainBox from '@/components/main-box'
import React from 'react'


const items = [
    {
        label:'Employees',
        href:'/employees'
    },
    {
        label:'Teams',
        href:'/teams'
    },
    {
        label:'Admins',
        href:'/admins'
    },
    {
        label:'Company',
        href:'/company'
    },

]

export default function MainPageView() {
  return (
    <div className='mx-auto py-16'>
        <div className='grid grid-cols-2 gap-4 w-[60rem] mx-auto'>
        {items.map((item) => (
            <MainBox label={item.label} href={item.href}/>
        ))}
        </div>
    </div>
  )
}
