"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  name: string
  users:string,
  createdAt:string
}
import { MoreHorizontal ,ArrowUpDown,} from "lucide-react"
 
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
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "users",
    header: "Users",
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
      const [openModal,setOpenModal] = useState(false)

      const router = useRouter();
      const project = row.original

      

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
            <DropdownMenuItem
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              project page
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <form action={removeUser}>
              <input type="hidden" value={project.id} name="id"/>
              <Button type="submit" variant="outline" className="p-0 m-0 border-none outline-none text-xsm">remove project</Button>
            </form>
            <DropdownMenuItem onClick={() => setOpenModal(!openModal)}>view and edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

          {openModal && (<CardModal userId={project.id} setOpenModal={setOpenModal}/>)}

        </>
      )
    },
  },
]
