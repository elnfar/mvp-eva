'use server'

import { prisma } from "@/lib/prisma"
import { Role } from "@prisma/client"
import bcrypt from 'bcrypt'


export default async function adminCreate(data:FormData) {
    const name = data.get('name') as string
    const email = data.get('email') as string
    const password = data.get('password') as string

    const hashedPassword = await bcrypt.hash(password,12);


    await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword:hashedPassword,
            role:Role.ADMIN
        }
    })

}