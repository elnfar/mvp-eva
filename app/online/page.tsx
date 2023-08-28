
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function page() {


  return (
    <div className='flex items-center justify-center h-[70vh] flex-col gap-5'>
       <h1 className='text-[2.6rem]'>You do not have permission for this functionality!</h1>
       <Button asChild>
        <Link href='/'>Back</Link>
       </Button>
    </div>
  )
}
