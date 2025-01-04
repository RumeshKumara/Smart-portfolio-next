"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlink = ({link}) => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <Link className={`rounded-lg px-4 py-2 text-white ${pathname === link.url ? "bg-[#261537] text-slate-200" : ""}`} href={link.url}>
        {link.title}
    </Link>
  )
}

export default Navlink
