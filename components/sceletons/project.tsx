'use client'



export default function ProjectSkeleton() {



  return (
    <div className="flex items-center justify-center h-screen space-x-4">
        <div>
            <span className="text-[4rem] text-zinc-800 font-bold">Loading...</span>
            <p className="text-md text-zinc-500">If it takes more than 10 seconds, please try again later.</p>
        </div>
    </div>
  )
}
