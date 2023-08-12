'use client'

import assignTeam from "@/actions/assign-team"
import { Button } from "@/components/ui/button"
import { DropDown } from "@/components/ui/dropdown"
import { Team, User } from "@prisma/client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import React, { ChangeEvent, useState } from "react"

type TeamProps = {
    user:User | null
    teams:Team[] | null
}

const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]

export default function Client({teams,user}:TeamProps) {


    const [value, setValue] = React.useState("")


    console.log(value);
    
    // function handleChange(event:ChangeEvent<HTMLInputElement>) {
    //     setState({...state, [event.target.name]: event.target.value})
    // }

    console.log(user?.id);
    
  return (
    <div className="space-y-12">
        <form action={assignTeam}>

          <input type="hidden" defaultValue={user?.id}  name="userId" id="userId"/>
          <input type="hidden" defaultValue={value} name='teamId' id="teamId"/>

          <div className="space-x-4">
            <DropDown teams={teams} user={user} value={value} setValue={setValue} frameworks={frameworks}/>
            <Button disabled={value === user?.teamId} type="submit">Update</Button>
            {value === user?.teamId && <p className=" text-neutral-500 text-xs py-2">user does belong to this team already!</p>}
          </div>

          </form>
      </div>

  )
}
