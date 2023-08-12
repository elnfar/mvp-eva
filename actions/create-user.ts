'use server'

import { prisma } from "@/lib/prisma"
import { Role } from "@prisma/client"
import bcrypt from 'bcrypt'

export default async function createUser(data:FormData) {
    const name = data.get('name') as string
    const email = data.get('email') as string
    const password = data.get('hashedPassword') as string
    const teamId = data.get('team') as string


    const hashedPassword = await bcrypt.hash(password,12);

    await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            team: !!teamId ? {connect: {id: teamId}} : undefined,
            role:Role.USER,
        },
        include: {
            team:true
        }
    })
}
