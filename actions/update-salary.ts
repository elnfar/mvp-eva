'use server'

import { prisma } from "@/lib/prisma"


export default async function updateSalary(data:FormData) {
    const salary = data.get('salary') as string
    const userId = data.get('userId') as string

    console.log(prisma.user);
    

        await prisma.user.update({
            where: {
                id:userId,
            },
            data: {
                salary:salary
            },
        });

}