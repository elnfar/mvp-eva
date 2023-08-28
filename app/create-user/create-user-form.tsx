'use client'

import createUser from '@/actions/create-user'
import Input from '@/components/input/input'
import { Button } from '@/components/ui/button'
import { DropDown } from '@/components/ui/dropdown'
import { Label } from '@/components/ui/label'
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
    <form action={createUser} className='container items-center flex flex-col py-16 gap-4'>

        <h1 className='text-[3rem]'>Create a new user!</h1>

        <div className=' space-y-4 w-[500px]'>

            <div>
                <Label htmlFor='name' className='text-md text-neutral-400'>Name</Label>
                 <Input name='name' type='text' value={state.name} onChange={handleChange} id='name' placeholder='Mathilda'/>
            </div>

            <div>
                   <Label htmlFor='email' className='text-md text-neutral-400'>Email</Label>
                  <Input name='email' type='text' value={state.email} onChange={handleChange} id='email' placeholder='mathilda@gmail.com'/>
            </div>

            <div>
                <Label htmlFor='hashedPassword' className='text-md text-neutral-400'>Password</Label>
                  <Input name='hashedPassword' type='password' value={state.hashedPassword} onChange={handleChange} id='hashedPassword' placeholder='password'/>
            </div>





        
        <input type="hidden" value={value} onChange={handleChange} name='team'/>
        <DropDown defaultName='Teams' items={teams} value={value} setValue={setValue} />

        <div className='text-center'>
            {!state.name || !state.email || !state.hashedPassword ? (
                <Button type='submit' disabled={!state.name || !state.email || !state.hashedPassword}>Create user</Button>
            ):(
                <Button type='submit' disabled={loading}>Create user</Button>
            )}
        </div>
        </div>
    </form>
  )
}
