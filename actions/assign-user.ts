'use server'

import { prisma } from "@/lib/prisma";


export default async function assignUserToTeam(data:FormData) {
    const userIdStr = data.get('userId') as string
    const userIdArr = userIdStr.split(',').map((id) => id.trim())
    const teamId = data.get('teamId') as string
    
    console.log(userIdArr);
    console.log(teamId);
    

    await prisma.team.update({
        where: {
            id:teamId
        },
        data: {
            users: {
                connect:userIdArr.map((id) => ({id:id}))
            }
        }
    })
}