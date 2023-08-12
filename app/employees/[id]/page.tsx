import { prisma } from '@/lib/prisma'
import React from 'react'
import Client from './client'
import UserProfileImage from './user-profile'

export default async function SingleEmployee({params}:{params:{id:string}}) {

    const user = await prisma.user.findUnique({
        where: {
            id:params.id,
            role:"USER"
        },
        include:{
            team:true,
        }

    })
    const teams = await prisma.team.findMany({})


  return (
    <div>
         <div className="flex gap-6  justify-center py-12">
              <div className='space-y-1'>
                  <p className="text-[1.6rem]">Name: {user?.name}</p>
                  <p className="text-[14px] text-neutral-500">Email: {user?.email}</p>
                  <p className='text-[14px] text-neutral-500'>Team: {user?.team?.name}</p>
              </div>
              <UserProfileImage/>
          </div>
        <div className='container flex justify-center py-12'>
            <Client teams={teams} user={user}/>
         </div>
    </div>
  )
}
