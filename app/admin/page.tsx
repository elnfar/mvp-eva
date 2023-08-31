import currentSessionUser from '@/actions/session-user'
import Card from '@/components/card';
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const user = await currentSessionUser();
    const jobs = await prisma.jobListing.findMany({
      where: {
        userId:user?.id
      },
    })

    const applications = await prisma.applications.findMany({})
    if(!user) {
        redirect('/')
      }



      console.log(jobs);
      
  return (
    <div>
      <div className=' container space-y-6'>
        <div>
                <h1 className='text-zinc-600 text-[3rem]'>Dashboard of {user.name}</h1>

                <JobCard text='Total jobs created' lenght={jobs.length}/>
                <JobCard text='Total applications received' lenght={applications.length}/>

                <Button className='mt-4' asChild>
                  <Link href='/create-job'>Add listing</Link>
                </Button>
        </div>


        <div>
            <div>
              {jobs.map((item) => (
                    <Card
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    location={item.location}
                    salary={item.salary}
                    desc="The best job you can find out there on market!"
                    companyName={item.companyName}
                    key={item.id}
                    />
              ))}
            </div>
        </div>

      </div>
    </div>
  )
}


const JobCard = ({lenght,text}:{lenght:number,text:string}) => {
  return (
    <div>
      <h1>{text} : {lenght}</h1>    
    </div>
  )
}