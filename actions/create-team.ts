'use server'

import { prisma } from "@/lib/prisma"

export default async function createTeam(data:FormData) {
    const name = data.get('name') as string
    const superVisor = data.get('superVisor') as string

    await prisma.team.create({
        data: {
            name,
            superVisor,
        },
        include: {
            users:true
        }
    })
}
