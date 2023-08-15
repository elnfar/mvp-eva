'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"


export default async function createProject(data:FormData) {
    const name = data.get('name') as string


    await prisma.projects.create({
        data: {
            name
        }
    })
    revalidatePath('/projects')
}