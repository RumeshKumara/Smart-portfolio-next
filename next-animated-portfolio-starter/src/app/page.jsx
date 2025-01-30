"use client";
import Image from 'next/image';
import heroImage from '../../public/images/hero.png';
import { motion } from 'framer-motion';

// Ensure this import is correct
import { useEffect, useState } from 'react';


const Homepage = () => {

  const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return null; // Render nothing on the server
}
  return (
    <>
    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center h-full px-4 pt-10 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/4 lg:h-full lg:w-1/3">
          <Image src={heroImage} alt="hero" className='object-contain' />
        </div>
        {/* TEXT CONTAINER */}
        <div className='flex flex-col items-center justify-center gap-8 pt-10 h-1/2 lg:w-1/2 lg:h-full'>
          {/* TITLE */}
          <h1 className="md:text-5xl text-4xl font-bold text-[#d3d3d3] ">
            Crafting Digital Experience, designing Tomorrow.
          </h1>
          {/* SUBTITLE */}
          <p className='md:text-xl text-slate-500'>
            We're a team of passionate designers and developers who create innovative solutions for your business. Let's work together and build something great.
          </p>
          {/* BUTTON */}
          <div className='flex w-full gap-4'>
            <button className='p-4 text-white bg-[#4e108e] rounded-lg ring-1 ring-black'>View My Work</button>
            <button className='p-4 text-purple-500 rounded-lg ring-1 ring-[#4e108e]'>Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Homepage;
