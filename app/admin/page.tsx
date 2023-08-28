import currentSessionUser from '@/actions/session-user'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const user = await currentSessionUser();

    if(!user) {
        redirect('/')
    }
  return (
    <div>page</div>
  )
}
