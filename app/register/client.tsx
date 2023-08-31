'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import Link from 'next/link'
import Input from '@/components/input/input'
import adminCreate from '@/actions/admin-create'
import { Button } from '@/components/ui/button'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'


interface InitialStateProps {
    name:string,
    email:string,
    password:string
}

const initialState:InitialStateProps = {
    name:'',
    email:'',
    password:''
}

export default function RegisterClient() {
    const [state,setState] = useState(initialState)
    const [loading,setLoading] = useState(false)
    const router = useRouter();

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }

  return (
    <form action={async(formData) => {
        await adminCreate(formData)
        redirect('/login')
    } } className='text-center'>
        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
        <h1 className='text-[2rem]'>Register</h1>
        <Input placeholder='Name' id='name' type='text' name='name' onChange={handleChange} value={state.name}/>
        <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email}/>
        <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password}/>

        <SubmitButton />
        </div>

        <div>
            <div>Do you have an account ? <Link href='/login'>Sign in</Link></div>
        </div>
    </form>
  )
}


const SubmitButton = () => {
    const { pending } = useFormStatus()

    return <Button disabled={pending} type='submit'>Register</Button>
}