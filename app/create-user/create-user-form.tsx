'use client'

import createUser from '@/actions/create-user'
import Input from '@/components/input/input'
import { DropDown } from '@/components/ui/dropdown'
import { Team, User } from '@prisma/client'
import React, { ChangeEvent, useState } from 'react'

type InitialState = {
    name:string,
    email:string,
    hashedPassword:string
}

const initialState:InitialState = {
    name:'',
    email:'',
    hashedPassword:''
}



type TeamProps = {
    teams:Team[] | null
}


export default function CreateUserForm({teams}:TeamProps) {

   

    const [state,setState] = useState(initialState)
    const [loading,setLoading] = useState(false)
    const [value, setValue] = React.useState("")


    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }

    

    teams?.map((team)=> (
        console.log(team.id)
    ))

    console.log(value);

    

  return (
    <form action={createUser}>
        <Input name='name' type='text' value={state.name} onChange={handleChange} id='name' placeholder='Mathilda'/>
        <Input name='email' type='text' value={state.email} onChange={handleChange} id='email' placeholder='mathilda@gmail.com'/>
        <Input name='hashedPassword' type='password' value={state.hashedPassword} onChange={handleChange} id='hashedPassword' placeholder='password'/>
        
        <input type="hidden" value={value} onChange={handleChange} name='team'/>
        <DropDown defaultName='Teams' items={teams} value={value} setValue={setValue} />

        <button type='submit' disabled={loading}>Create user</button>
    </form>
  )
}
