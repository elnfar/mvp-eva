'use client'

import assignTeam from "@/actions/assign-team"
import Input from "@/components/input/input"
import { Button } from "@/components/ui/button"
import { DropDown } from "@/components/ui/dropdown"
import { Team, User } from "@prisma/client"
import React, { ChangeEvent, useState } from "react"

type TeamProps = {
    user:User | null
    teams:Team[] | null
}


const initialState = {
  salary:0
}

export default function Client({teams,user}:TeamProps) {


    const [value, setValue] = React.useState("")
    const [state,setState] = useState(initialState)

    console.log(value);
    
    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }

    console.log(user?.id);
    
  return (
    <div className="space-y-12">

        <form action={assignTeam} className=" space-y-4">

          <input type="hidden" defaultValue={user?.id}  name="userId" id="userId"/>
          <input type="hidden" defaultValue={value} name='teamId' id="teamId"/>

          <div className=" flex flex-col w-[500px] gap-2">
            <DropDown teams={teams} value={value} setValue={setValue} />
            <Input type="number" name="salary" placeholder="Salary" value={state.salary} id="salary" onChange={handleChange}/>
            <Button disabled={value === user?.teamId || state.salary === 0 || !value} type="submit">Update</Button>
            {value === user?.teamId && <p className=" text-neutral-500 text-xs py-2">user does belong to this team already!</p>}
          </div>
          </form>

          {/* <form action={updateSalary}>
              <div className="flex items-center gap-4">
              <input type="hidden" defaultValue={user?.id}  name="userId" id="userId"/>
                <Input type="text" name="salary" placeholder="Salary" value={state.salary} id="salary" onChange={handleChange}/>
                <Button  type="submit">Update</Button>
              </div>
          </form> */}
      </div>

  )
}
