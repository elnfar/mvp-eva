'use client'

import MainBox from '@/components/main-box'
import React from 'react'
import { Card, Title, AreaChart } from "@tremor/react";
import { Team } from '@prisma/client';

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
      label:'Projects',
      href:'/projects'
  },
  {
    label:'Salary',
    href:'/salary'
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


  

  interface MainPageProps {
    teams:Team[] | null
  }


export default function MainPageView({teams}:MainPageProps) {
  
  

    return (
    <div className='mx-auto py-16'>


        <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 sm:w-[80rem] w-[20rem] mx-auto'>
        {items.map((item) => (
            <MainBox label={item.label} href={item.href}/>
        ))}
        </div>
    </div>
  )
}
