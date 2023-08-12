import React from 'react'
import CreateUserForm from './create-user-form'
import { prisma } from '@/lib/prisma'

export  default async function CreateUser() {
  

  const teams = await prisma.team.findMany({})

  
  return (
    <div>
        <CreateUserForm teams={teams}/>
    </div>
  )
}
