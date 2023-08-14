import { prisma } from '@/lib/prisma'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import Link from 'next/link'




type Payment = {
    id: string
    email:string
    name:string
    salary:string
    team:string
    createdAt:string
}
    

  async function getData():Promise<Payment[]> {

    const employees = await prisma.user.findMany({
        where: {
            role:"USER"
        },
        include: {
            team:true
        }
    })

    return  employees.map((item) => {
           return  {
                id: item.id,
                email:item.email,
                name:item.name,
                team:item.team?.name || '',
                salary:item.salary || '0',
                createdAt:item.createdAt.toLocaleString()
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
