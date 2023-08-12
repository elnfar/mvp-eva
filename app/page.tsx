import currentSessionUser from "@/actions/session-user"
import { prisma } from "@/lib/prisma";
import MainPageView from "./main-page";

export default async function Home() {

  const user = await currentSessionUser();

  console.log(user);



  return (
    <main>
        <MainPageView/>
    </main>
  )
}
