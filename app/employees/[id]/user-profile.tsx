'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function UserProfileImage() {
  return (
    <div>
              <Avatar>
                <AvatarImage className="w-[50px] h-[50px] rounded-full" src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </div>
  )
}
