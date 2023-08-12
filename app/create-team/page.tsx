import React from 'react'
import CreateTeamForm from './create-team-form'
import { prisma } from '@/lib/prisma'

export default async function page() {


  return (
    <div>
        <CreateTeamForm />
    </div>
  )
}
