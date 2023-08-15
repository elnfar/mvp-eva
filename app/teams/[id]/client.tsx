'use client'

import assignUserToTeam from "@/actions/assign-user"
import { Team, User } from "@prisma/client"
import { ChangeEvent, useEffect, useState } from "react"


type Props = {
    users:User[] | null
    team:Team | null
}


export default function Client({users,team}:Props) {
    const [selectedUser,SetSelectedUser] = useState<string[]>([])

    function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
        const { value, checked } = event.target;

        if (checked) {
            SetSelectedUser(prev => [...prev, value]);
        } else {
            SetSelectedUser(prev => prev.filter(id => id !== value));
        }
    }

   console.log(selectedUser);
   
  return (
    <div>
      <form action={assignUserToTeam}>
            {users?.map((user) => (
                <div key={user.id}>
                    {user.teamId === team?.id ? null : (
                        <div>
                        <label htmlFor="">{user.name}</label>
                        <input type="hidden" id="teamId" defaultValue={team?.id} name="teamId"/>
                        <input type="hidden" id="userId" defaultValue={selectedUser} name="userId"/>
                        <input type="checkbox" id={user.id}  value={user.id} onChange={handleCheckboxChange}/>
                        </div>
                    )}
                   
                </div>
            ))}
            <button type="submit">Submit</button>
        </form> 

    </div>
  )
}
