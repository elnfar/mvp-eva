import { prisma } from '@/lib/prisma'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import Link from 'next/link'




type Payment = {
    id: string
    name:string
    superVisor:string
    userLenght:number
    createdAt:string
}
    

  async function getData():Promise<Payment[]> {

    const teams = await prisma.team.findMany({
        include: {
            users:true
        }
    })


    return teams.map((item) => {
           return  {
                id: item.id,
                name:item.name,
                superVisor:item.superVisor,
                userLenght:item.users.length,
                createdAt:item.createdAt.toString()
              }
    })

  }
  


export default async function Employees() {

    const data = await getData();

  return (
    <div className='p-8'>

    <div>
      <Link href='/create-user'>Add</Link>
    </div>
         <DataTable columns={columns} data={data} />
    </div>
  )
}
