'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  href: string
  label: string
}

export const SidebarListItem = ({ href, label }: Props) => {
  const pathname = usePathname()
  return (
    <li key={href} >
      <Link
      style={pathname === href ? {background:"#deded9"}: {}}
        className={cn('w-full block hover:bg-neutral-100 text-sm rounded-md p-2', {
          '': href.startsWith(pathname)
        })}
        href={href}
      >
        {label}
      </Link>
    </li>
  )
}