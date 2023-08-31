'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Input from '@/components/input/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


interface InitialStateProps {
    email:string,
    password:string
}

const initialState:InitialStateProps = {
    email:'',
    password:''
}

export default function LoginClient() {
    const [state,setState] = useState(initialState)
    const router = useRouter();
    const [loading,setLoading] = useState(false)

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }

    function onSubmit(event:FormEvent) {
        event.preventDefault();

        setLoading(true)

        signIn('credentials', {
            ...state,
            redirect:false
        })
        .then((callback) => {
            if(callback?.ok) {
                router.push('/');
                router.refresh()
            }
            
            if(callback?.error) {
                throw new Error('Wrong Credentials')
            }
        }).catch((err) => {
            return
        }).finally(() => {
            setLoading(false)
        })

     
    }

  return (
    <form onSubmit={onSubmit} className='text-center'>
        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
        <h1 className='text-[2rem]'>Login</h1>
        <Input  placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email}/>
        <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password}/>

        <Button disabled={loading} type='submit'>Login</Button>
        </div> 
        <p>Don't have an account yet ? <Link href='/register'>Register</Link></p>
    </form>
  )
}