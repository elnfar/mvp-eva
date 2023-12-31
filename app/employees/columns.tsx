"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  email: string
  name: string
  team:string,
  project:string,
  salary:string,
  createdAt:string
}
import { MoreHorizontal ,ArrowUpDown,} from "lucide-react"
 import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { CardModal } from "@/components/modal-card"
import removeUser from "@/actions/remove-user"
import {useRouter } from "next/navigation"

export const columns: ColumnDef<Payment>[] = [
 

  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "team",
    header: "Team",
  },
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {


      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          createdAt
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      // const [openModal,setOpenModal] = useState([])
      const user = row.original

      return (
        <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Edit</DropdownMenuLabel>
            <Link href={`/employees/${user.id}`}
            >
              user page
            </Link>
            <DropdownMenuSeparator />
            <form action={removeUser}>
              <input type="hidden" value={user.id} name="id"/>
              <Button type="submit" variant="outline" className="p-0 m-0 border-none outline-none text-xsm">remove employee</Button>
            </form>
            {/* <DropdownMenuItem onClick={() => setOpenModal(!openModal)}>view and edit</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>

          {/* {openModal && (<CardModal userId={user.id} setOpenModal={setOpenModal}/>)} */}

        </>
      )
    },
  },
]
