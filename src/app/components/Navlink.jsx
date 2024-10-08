"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'

const Navlink = ({link}) => {
  
  const pathname = usePathname();

  return (
    <Link className={`rounded p-1 ${pathname === link.url && "bg-cyan-400 text-black font-bold px-2"}`} href={link.url} key={link.title}>
            {link.title}
          </Link>
  )
}

export default Navlink
