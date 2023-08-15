import currentSessionUser from "@/actions/session-user"
import { prisma } from "@/lib/prisma";
import MainPageView from "./main-page";

export default async function Home() {

  const user = await currentSessionUser();
  const teams = await prisma.team.findMany({
    include: {
      users:{
        where: {
          role:"USER"
        }
      }
    }
  })

  
  
  const salaries = teams.map((item) => item.users.map((user) => parseInt(user.salary || ''))).reduce((acc,curr) => acc.concat(curr),[]).filter(Number.isFinite)
  
  return (
    <main>
        <MainPageView teams={teams}/>
    </main>
  )
}
