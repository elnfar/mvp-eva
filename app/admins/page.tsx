import { prisma } from "@/lib/prisma"
import Image from "next/image"


export default async function page() {

    const admins =  await prisma.user.findMany({
        where: {
            role:"ADMIN"
        }
    })

  return (
    <div>
        {admins.map((admin) => (
            <div className="flex items-center container py-4 gap-5">
                <div>
                <h1>{admin.name}</h1>
                <p>{admin.email}</p>
                </div>

                <div>
                    <Image src={admin.avatar || ''} alt="avatar-admin" width={40} height={40} />
                </div>
            </div>
        ))}
    </div>
  )
}
