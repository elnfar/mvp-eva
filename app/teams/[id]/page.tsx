import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page({params}:{params:{id:string}}) {


    const team = await prisma.team.findUnique({
        where: {
            id:params.id
        },
        include:{
            users:true
        }
    })

  return (
    <div>
        <div>
            <h1 className='text-[3rem]'>{team?.name}</h1>
            {team?.id}
        </div>




        <p>members</p>
        <div className='flex flex-col'> 
        {team?.users.map((user) => (
            <span>{user.name}</span>
        ))}
        </div>
    </div>
  )
}
