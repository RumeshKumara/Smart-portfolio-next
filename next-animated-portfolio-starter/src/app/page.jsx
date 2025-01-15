"use client";
import Image from 'next/image';
import heroImage from '../../public/images/hero.png';
import { motion } from 'framer-motion'; // Ensure this import is correct

const Homepage = () => {
  return (
    <>
    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center h-full lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image src={heroImage} alt="hero" className='object-contain' />
        </div>
        {/* TEXT CONTAINER */}
        <div className='flex flex-col items-center justify-center gap-6 h-1/2 lg:w-1/2'>
          {/* TITLE */}
          <h1 className="md:text-6xl text-4xl font-bold text-[#d0d0d0] text-center">
            Welcome TO My Portfolio, I'm Rumesh
          </h1>
          {/* SUBTITLE */}
          <p className='text-center md:text-xl text-slate-500'>
            We're a team of passionate designers and developers who create innovative solutions for your business. Let's work together and build something great.
          </p>
          {/* BUTTON */}
          <div className='flex justify-center w-full gap-4'>
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
