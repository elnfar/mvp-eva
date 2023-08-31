import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent } from "react"

type InputWithLabel = {
    label:string,
    type:any,
    id:string,
    placeholder:string,
    value?:string,
    onChange?:(e:ChangeEvent<HTMLInputElement>) => void,
    defaultValue?:string,
    name?:string
}

export function InputWithLabel({label,type,id,placeholder,value,onChange,defaultValue,name}:InputWithLabel) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} defaultValue={defaultValue}/>
    </div>
  )
}
