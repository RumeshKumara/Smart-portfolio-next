"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const links = [
    { url: "/", title: "Home"},
    { url: "/about", title: "About"},
    { url: "/services", title: "Services"},
    { url: "/contact", title: "Contact"}
];

const Navbar = () => {
    const [open, setOpen] = useState(false)
    

  return (
    <div className='flex items-center justify-between h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        { /* LINKS */}
        <div className='hidden w-1/3 gap-4 md:flex'>
            {links.map(link => (
                <Link href={link.url} key={link.url}>
                    {link.title}
                </Link>
            ))}
        </div>
        {/* LOGO */}
        <div className='justify-center w-1/3 md:hidden lg:flex'>
            <Link href="/" className='flex items-center justify-center p-1 text-sm font-semibold bg-black rounded-md'>
              <span className='mr-1 text-white'>Razaa</span>
              <span className='flex items-center justify-center w-12 h-8 text-black bg-white rounded'>
                .dev
              </span>
            </Link>
        </div>
        { /* SOCIAL */}
        <div className='hidden w-1/3 gap-4 md:flex'>
            <Link href="/">
               <Image src="/github.png" alt="GitHub" width={24} height={24} />
            </Link>
            <Link href="/">
               <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="/">
               <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="/">
               <Image src="/pinterest.png" alt="Pinterest" width={24} height={24} />
            </Link>
            <Link href="/">
               <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="/">
               <Image src="/dribbble.png" alt="Dribbble" width={24} height={24} />
            </Link>
        </div>
        {/* RESPONSIVE MENU */}
        <div className='md:hidden'>
          { /* MENU BUTTON */}
          <button 
            className='relative z-50 flex flex-col justify-between w-10 h-8'
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className='w-10 h-1 bg-white rounded'></div>
            <div className='w-8 h-1 bg-white rounded'></div>
            <div className='w-4 h-1 bg-white rounded'></div>
          </button>
          { /* MENU LIST */}
          {(open &&
            <div 
               className='absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black'>
                {links.map((link) => (
                    <Link href={link.url} key={link.url}>
                        {link.title}
                    </Link>
                ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar

