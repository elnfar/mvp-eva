import currentSessionUser from "@/actions/session-user";
import JobClient from "./client";


export default async function page() {
    
    const user = await currentSessionUser();

  return (
    <div>
        <JobClient user={user}/>
    </div>
  )
}
