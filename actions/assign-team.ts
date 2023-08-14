'use server'

import { prisma } from "@/lib/prisma"


export default async function assignTeam(data:FormData) {
    const userId = data.get('userId') as string
    const teamId = data.get('teamId') as string
    const salary = data.get('salary') as string

    await prisma.user.update({
        where: {
            id:userId
        },
        data: {
            teamId:teamId,
            salary:salary
        }
    })  

    console.log(userId);
    console.log(teamId);
    
    console.log('executed');
    
}