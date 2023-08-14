

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Team } from "@prisma/client"

type DDType = {
    value: string;
    label:string
  };


  
  
 type DropDown = {
    value:string,
    setValue:(value:string) => void
    teams:Team[] | null,
}

export function DropDown({value,setValue,teams}:DropDown) {
  const [open, setOpen] = React.useState(false)

  console.log(value);
  
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className={`w-[200px] justify-between`}
      >
        {value ? (
          teams?.find((team) => team.id === value)?.name
        ) : (
          <span className="opacity-50">Teams</span>
        )}
        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandGroup>
          {teams?.map((framework) => (
            <CommandItem
              key={framework.name}
              onSelect={(current) => {
                setValue(framework.id); // Set selected value directly
                setOpen(false);
              }}
            >
              {framework.name} 
              {value === framework.name && (
                <CheckIcon className="ml-auto h-4 w-4 opacity-100" />
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </Command>
    </PopoverContent>
  </Popover>
);
}