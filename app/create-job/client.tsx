'use client'


import React,{ChangeEvent, useEffect, useState} from 'react'
import createJobs from '@/actions/create-job'
import { InputWithLabel } from '@/components/inputJob'
import { Button } from '@/components/ui/button'
import { DropDown } from '@/components/dropdown'
import SubmitButton from '@/components/submit-button'
import { redirect } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { User } from '@prisma/client'


const initialState = {
    title:'',
    companyName:'',
    location:'',
    salary:'',
    type:''
    }

    type CUser = {
        user:User | null
    }
    const jobType = [
        {
          value:'Full-Time',
          label:'Full-Time'
        },
        {
          value:'Part-Time',
          label:'Part-Time'
        },
      ]
    

export default function CreateJobClient({user}:CUser) {

    const [value, setValue] = useState('')
    const [state,setState] = useState({...initialState, type:''})


    useEffect(() => {
        setState((prevState) => ({ ...prevState, type: value }));
      }, [value]); // Listen for changes in the 'value'
    

    function onChange(event:ChangeEvent<HTMLInputElement>) {
          setState({ ...state, [event.target.name]: event.target.value });
      }
       
  return (
    <div>
            <form action={async(formData) => {
              await createJobs(formData)
              console.log(formData);
              
            //   toast.success('created successfully')
            //   redirect('/admin')
            }} className='container grid grid-cols-4 gap-12'>

            <input type="hidden" value={user?.id} name='userId'/>
            <InputWithLabel
            type='text'
            id='title'
            placeholder='title'
            label='title'
            value={state.title}
            onChange={onChange}
            name='title'
            />


            <InputWithLabel 
            type='text'
            value={state.companyName}
            id='companyName'
            placeholder='companyName'
            label='companyName'
            name='companyName'
            onChange={onChange}

            />

            <InputWithLabel 
            type='text'

            id='location'
            placeholder='location'
            label='location'
            value={state.location}
            onChange={onChange}
            name='location'

            />
            <InputWithLabel 
            type='text'
            value={state.salary}
            id='salary'
            placeholder='salary'
            label='salary'
            onChange={onChange}
            name='salary'

            />

        <input type="hidden" value={value} name='type' onChange={onChange}/>
            <DropDown value={value} setValue={setValue} jobType={jobType}/>
            <SubmitButton/>
            </form>
    </div>
  )
}
