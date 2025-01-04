"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlink = ({link}) => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <Link className={`rounded p-1 ${pathname === link.url && "bg-black text-white"}`} href={link.url}>
    </Link>
  )
}

export default Navlink
