"use client";
import React from 'react'; // Add this import
import Image from 'next/image';
import heroImage from '../../public/images/hero.png';
import { motion } from 'framer-motion';

const sliderVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20, // Adjusted duration to fix the gap
      ease: "linear",
    },
  },
};

const Homepage = () => {
  return (
    <>
      <motion.div
        className='h-full'
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center h-full px-4 pt-12 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <motion.div 
            className='absolute bottom-[-100px] text-[#80808011] whitespace-nowrap text-[50vh] font-bold'
            variants={sliderVariants}
            initial='initial'
            animate='animate'>
            Writer Content Creator Influencer
          </motion.div>
          {/* IMAGE CONTAINER */}
          <div className="relative h-1/4 lg:h-full lg:w-1/3">
            <Image src={heroImage} alt="hero" className='object-contain' />
          </div>
          {/* TEXT CONTAINER */}
          <div className='relative flex flex-col items-center justify-center gap-8 pt-10 h-1/2 lg:w-1/2 lg:h-full'>
            {/* TITLE */}
            <h1 className="md:text-5xl text-4xl font-bold text-[#d3d3d3] ">
              Crafting Digital Experience, designing Tomorrow.
            </h1>
            {/* SUBTITLE */}
            <p className='md:text-xl text-slate-500'>
              We're a team of passionate designers and developers who create innovative solutions for your business. Let's work together and build something great.
            </p>
            {/* BUTTON */}
            <div className='relative flex w-full gap-4'>
              <button className='p-4 text-white bg-pink-800 rounded-lg ring-1 ring-black'>View My Work</button>
              <button className='p-4 text-pink-800 rounded-lg ring-1 ring-pink-800'>Contact Me</button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;
