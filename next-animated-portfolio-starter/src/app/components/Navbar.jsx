"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaDribbble } from 'react-icons/fa';
import Navlink from './Navlink';

const links = [
    { url: "/", title: "Home"},
    { url: "/about", title: "About"},
    { url: "/services", title: "Services"},
    { url: "/contact", title: "Contact"}
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
  return (
    <div className='flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        { /* LINKS */}
        <div className='hidden w-1/3 gap-4 md:flex'>
            {links.map(link => (
                <Navlink link={link} key={link.title}/>
            ))}
        </div>
        {/* LOGO */}
        <div className='xl:justify-center xl:w-1/3 md:hidden lg:flex'>
            <Link href="/" className='flex items-center justify-center p-1 px-2 text-sm font-semibold rounded-md shadow-sm shadow-purple-400 backdrop-blur-2xl bg-slate-500/30 '>
              <span className='mr-1 text-purple-500'>Razaa</span>
              <span className='flex items-center justify-center w-12 h-8 text-black rounded bg-slate-400/90 backdrop-blur-2xl '>
                .dev
              </span>
            </Link>
        </div>
        { /* SOCIAL */}
        <div className='hidden w-1/3 gap-4 md:flex'>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-purple-700 bg-[#2d1d35] p-1 rounded-md' >
               <FaGithub size={24} />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-sky-700 bg-[#23263e] p-1 rounded-md'>
               <FaFacebook size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-red-600 bg-[#341d1d] p-1 rounded-md'>
               <FaInstagram size={24} />
            </Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className='text-[#661717] bg-[#371c1c] p-1 rounded-md'>
               <FaPinterest size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-[#3038d5] bg-[#202338] p-1 rounded-md'>
               <FaLinkedin size={24} />
            </Link>
            <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className='text-pink-600 bg-[#3c233e] p-1 rounded-md'>
               <FaDribbble size={24} />
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
  );
};

export default Navbar;

