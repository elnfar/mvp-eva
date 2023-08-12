"use client"



import { Button } from "@/components/ui/button"


const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const


export function MultipleSelect() {


  return (
      <form  className="space-y-8">
        

        <Button type="submit">Submit</Button>
      </form>
  )
}
