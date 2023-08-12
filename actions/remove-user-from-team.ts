'use server'

import { prisma } from "@/lib/prisma"

export default async function removeUserFromTeam(data:FormData) {
    const userId = data.get('userId') as string
    const teamId = data.get('teamId') as string

    const user = await prisma.user.findUnique({ where: { id: userId } });


    if(user && user.teamId === teamId) {
        await prisma.user.update({
            where: {
                id:userId
            },
            data: {
                teamId:null
            }
        })
    }else {
        throw new Error("User is not part of the specified team.");
    }
    
}