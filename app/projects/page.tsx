import { prisma } from '@/lib/prisma'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import Link from 'next/link'
import { User } from '@prisma/client'




type Payment = {
    id: string
    name:string
    users:string
    createdAt:string
}
    

  async function getData():Promise<Payment[]> {

    const projects = await prisma.projects.findMany({

        include: {
            users:true
        }
    })

    
    return projects.map((item) => {
           return  {
                id: item.id,
                name:item.name,
                users:item.users.length.toString(),
                createdAt:item.createdAt.toString()
              }
    })

  }

export default async function Projects() {

    const data = await getData();

  return (
    <div className='p-8'>

    <div>
      <Link href='/projects/create-project'>Add</Link>
    </div>
         <DataTable columns={columns} data={data} />
    </div>
  )
}
