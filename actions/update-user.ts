'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function updateUser(data:FormData) {

    const name = data.get('name') as string
    const id = data.get('id') as string
    const salary = data.get('salary') as string

    await prisma.user.update({
        where: {
            id:id
        },
        data: {
            name,
            salary
        }
    })
    revalidatePath('/employees')
}
