'use client'

import createTeam from '@/actions/create-team'
import { DropDownUser } from '@/components/dropdownuser'
import Input from '@/components/input/input'
import { DropDown } from '@/components/ui/dropdown'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'

type InitialState = {
    name:string,
    superVisor:string
}

const initialState:InitialState = {
    name:'',
    superVisor:'',
}


export default function CreateTeamForm() {

    const [state,setState] = useState(initialState)
    const [loading,setLoading] = useState(false)





    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }

  return (
    <form action={createTeam}>
        <Input name='name' value={state.name} onChange={handleChange} id='name' placeholder='Team 1'/>
        <Input name='superVisor' value={state.superVisor} onChange={handleChange} id='superVisor' placeholder='Matchilda Reveno'/>

        <button type='submit' disabled={loading}>Create team</button>
    </form>
  )
}
