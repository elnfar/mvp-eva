'use client'

import assignTeam from "@/actions/assign-team"
import Input from "@/components/input/input"
import { Button } from "@/components/ui/button"
import { DropDown } from "@/components/ui/dropdown"
import { Projects, Team, User } from "@prisma/client"
import React, { ChangeEvent, useState } from "react"

type TeamProps = {
    user:User | null
    teams:Team[] | null
    projects:Projects[] | []
}


const initialState = {
  salary:0
}
const initialValue = {
  teamId:'',
  projectId:''
}

export default function Client({teams,user,projects}:TeamProps) {


  const [teamId, setTeamId] = React.useState('');
  const [projectId, setProjectId] = React.useState('');
    const [state,setState] = useState(initialState)

    console.log(teamId);
    console.log(projectId);

    
    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }
    
  return (
    <div className="space-y-12">

        <form action={assignTeam} className=" space-y-4">

          <input type="hidden" defaultValue={user?.id}  name="userId" id="userId"/>
          <input type="hidden" defaultValue={teamId} name='teamId' id="teamId"/>
          <input type="hidden" defaultValue={projectId} name='projectId' id="projectId"/>


          <div className=" flex flex-col w-[500px] gap-2">
            <DropDown defaultName='Teams' items={teams} value={teamId} setValue={setTeamId} />
            <DropDown defaultName='Projects' items={projects} value={projectId} setValue={setProjectId} />
            <Input type="number" name="salary" placeholder="Salary" value={state.salary} id="salary" onChange={handleChange}/>
            <Button disabled={teamId === user?.teamId || state.salary === 0 || !teamId} type="submit">Update</Button>
            {teamId === user?.teamId && <p className=" text-neutral-500 text-xs py-2">user does belong to this team already!</p>}
          </div>
          </form>

      </div>

  )
}
