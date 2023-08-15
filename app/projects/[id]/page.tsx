import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function page({params}:{params:{id:string}}) {


    const project = await prisma.projects.findUnique({
        where: {
            id:params.id
        },
        include: {
            users:true
        }
    })

  return (
    <div>

        <div className=" container">


            <h1 className="text-[4rem] border-b-2">{project?.name}</h1>



            <h2 className="py-4">Who's working on this project:</h2>
            <div className="flex flex-col py-2">   
            {project?.users.map((user) => (
                <Link href={`/employees/${user.id}`} className="text-[1.4rem]">{user.name}</Link>
            ))}
            </div>

        </div>
       
    </div>
  )
}
