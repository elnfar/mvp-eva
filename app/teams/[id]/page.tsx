import { prisma } from '@/lib/prisma'
import React from 'react'
import Client from './client'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import { Delete, DeleteIcon, X, icons } from 'lucide-react'
import removeUserFromTeam from '@/actions/remove-user-from-team'

export default async function page({params}:{params:{id:string}}) {


    const team = await prisma.team.findUnique({
        where: {
            id:params.id
        },
        include:{
            users:true
        }
    })

    const users = await prisma.user.findMany({
        where: {
          role:"USER"
        }
      })

  return (
    <div>
         <div className=' container'>

            
                    <div>
                        <h1 className='text-[3rem]'>{team?.name}</h1>
                        <p className='text-neutral-400 text-xs'>{team?.id}</p> 
                    </div>
                     <Separator className='my-4 h-1 bg-red-500'/>



                      <div>
                        <p className='text-[2rem]'>Members</p>
                            <div className='flex flex-col'> 
                            {team?.users.map((user) => (
                                <div className=' flex items-center'>
                                <span>{user.name}</span>

                                    <form action={removeUserFromTeam}>
                                        <input type="hidden" defaultValue={team.id} name='teamId'/>
                                        <input type="hidden" defaultValue={user.id} name='userId'/>
                                        <Button variant="secondary"><X size={24}/></Button>
                                    </form>
                                </div>
                                
                            ))}
                            </div>
                        </div>

               
{/* 
                    <Client users={users} team={team}/> */}
                </div>
    </div>
  )
}
