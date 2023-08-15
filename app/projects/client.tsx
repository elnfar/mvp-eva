'use client'

import createProject from "@/actions/create-project"
import Input from "@/components/input/input"
import { Button } from "@/components/ui/button"

import { ChangeEvent, useState } from "react"


const initialState = {
    name:''
}

export default function Client() {

    const [state,setState] = useState(initialState)

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }
  return (
    <form action={createProject}>
        <div>
          <Input name="name" id="name" value={state.name} onChange={handleChange}/>
            <Button type="submit">Create</Button>
        </div>
    </form>
  )
}
