'use client'
import { User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Session } from "next-auth";




type SessionUserType = {
  currentUser: User;
  session: Session;
}
type NavbarProps = {
  currentUser: SessionUserType | null;

}
export default function UserProfileImage({currentUser}:NavbarProps) {
  return (
           <div>
              <Avatar>
                <AvatarImage className="w-[36px] h-[36px] rounded-full" src={currentUser?.currentUser.avatar || "https://github.com/shadcn.png"} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </div>
  )
}
