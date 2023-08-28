'use server'

import { prisma } from "@/lib/prisma"
import currentSessionUser from "./session-user"
import { revalidatePath } from "next/cache";


export default async function removeUser(data:FormData) {

    const user = await currentSessionUser();

    const id = data.get('id') as string

    if(user?.currentUser.role === "ADMIN") {
        await prisma.user.delete({
            where: {
                id
            },
        })
    }
    revalidatePath('/employees')
}