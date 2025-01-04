"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlink = ({link}) => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <Link className={`rounded-xl px-4 py-2 ${pathname === link.url ? "bg-[#252c44] text-white" : ""}`} href={link.url}>
        {link.title}
    </Link>
  )
}

export default Navlink
