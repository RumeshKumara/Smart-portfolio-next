"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaDribbble } from 'react-icons/fa';
import Navlink from './Navlink';
import { motion } from 'framer-motion';

const links = [
    { url: "/", title: "Home"},
    { url: "/about", title: "About"},
    { url: "/services", title: "Services"},
    { url: "/contact", title: "Contact"}
];

const shadowAnimation = {
  initial: {
    boxShadow: "0 0 10px 0 rgba(255, 0, 150, 0.5)",
  },
  animate: {
    boxShadow: [
      "0 0 10px 0 rgba(255, 0, 150, 0.5)",
      "0 0 10px 0 rgba(0, 204, 255, 0.5)",
      "0 0 10px 0 rgba(0, 255, 0, 0.5)"
    ],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 15, // Increased duration for smoother transition
      ease: "easeInOut", // Changed easing function for smoother animation
    },
  },
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: { rotate: 0 },
        opened: { rotate: 45, backgroundColor: "#ffffff" }
    };

    const centerVariants = {
        closed: { opacity: 1 },
        opened: { opacity: 0 }
    };

    const bottomVariants = {
        closed: { rotate: 0 },
        opened: { rotate: -45, backgroundColor: "#ffffff" }
    };

    const listVariants = {
        closed: { x: "100vw" },
        opened: {
            x: 0,
            transition: { when: "beforeChildren", staggerChildren: 0.2 }
        }
    };

    const listItemVariants = {
        closed: { x: -10, opacity: 0 },
        opened: { x: 0, opacity: 1 }
    };

    return (
        <div className='flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            { /* LINKS */}
            <div className='hidden w-1/3 gap-4 md:flex'>
                {links.map(link => (
                    <Navlink link={link} key={link.title} />
                ))}
            </div>
            {/* LOGO */}
            <div className='xl:justify-center xl:w-1/3 md:hidden lg:flex'>
                <motion.div
                    className='flex items-center justify-center p-1 px-2 text-sm font-semibold rounded-md backdrop-blur-2xl bg-slate-500/30 '
                    variants={shadowAnimation}
                    initial='initial'
                    animate='animate'
                >
                    <Link href="/" className='flex items-center'>
                        <span className='mr-1 text-slate-400'>Razaa</span>
                        <span className='flex items-center justify-center w-12 h-8 text-pink-500 font-bold rounded bg-[#210e2f] backdrop-blur-2xl'>
                            .dev
                        </span>
                    </Link>
                </motion.div>
            </div>
            { /* SOCIAL */}
            <div className='hidden w-1/3 gap-4 md:flex'>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-purple-700 bg-[#210e2f] p-1 rounded-md'>
                    <FaGithub size={24} />
                </Link>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-sky-700 bg-[#23263e] p-1 rounded-md'>
                    <FaFacebook size={24} />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-red-600 bg-[#341d1d] p-1 rounded-md'>
                    <FaInstagram size={24} />
                </Link>
                <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className='text-[#982121] bg-[#371c1c] p-1 rounded-md'>
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
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className='w-10 h-1 origin-left bg-white rounded'></motion.div>

                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className='w-8 h-1 bg-white rounded'></motion.div>

                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className='w-4 h-1 origin-left bg-white rounded'></motion.div>
                </button>
                { /* MENU LIST */}
                {(open &&
                    <motion.div
                        variants={listVariants}
                        animate="opened"
                        initial="closed"
                        className='absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black'>
                        {links.map((link) => (
                            <motion.div
                                variants={listItemVariants}
                                className='' key={link.title}>
                                <Link href={link.url} key={link.url}>
                                    {link.title}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

