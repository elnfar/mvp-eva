import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import updateUser from "@/actions/update-user"

type InitialState = {
    id:string
    name:string,
    email:string,
    hashedPassword:string
}

const initialState:InitialState = {
    id:'',
    name:'',
    email:'',
    hashedPassword:''
}


type Props ={
  userId:string,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>

}

export function CardModal({userId,setOpenModal}:Props) {
    const [state,setState] = React.useState(initialState)

    

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }



  return (
    <Card className="w-[350px] fixed right-[50%] left-[50%] top-[20%]">
      <CardHeader>
        <CardTitle>Update employee</CardTitle>
        <CardDescription>update and save the employee in database</CardDescription>
      </CardHeader>
      <form action={updateUser}>
      <CardContent>
   
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <input type="hidden" name="id" id="id" onChange={handleChange} value={userId}/>
              <Input id="name" name='name' placeholder="Name" value={state.name} onChange={handleChange}/>

            </div>
          </div>


      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setOpenModal((prev) => !prev)}>Cancel</Button>
        <Button type="submit">Update</Button>
      </CardFooter>
      </form>
    </Card>
  )
}
