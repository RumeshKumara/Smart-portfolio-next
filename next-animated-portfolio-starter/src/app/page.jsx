"use client";
import React from 'react';
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
      duration: 20,
      ease: "linear",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Homepage = () => {
  return (
    <>
      <motion.div
        className='h-full overflow-hidden' // Add overflow-hidden class here
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center h-full px-4 pt-12 overflow-hidden lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
          
          {/* IMAGE CONTAINER */}
          <motion.div 
            className="relative h-1/4 lg:h-full lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Image src={heroImage} alt="hero" className='object-contain' />
          </motion.div>
          {/* TEXT CONTAINER */}
          <motion.div 
            className='relative flex flex-col items-center justify-center gap-8 pt-10 h-1/2 lg:w-1/2 lg:h-full'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* TITLE */}
            <motion.h1 
              className="md:text-5xl text-4xl font-bold text-[#d3d3d3]"
              variants={textVariants}
            >
              Crafting Digital Experience, designing Tomorrow.
            </motion.h1>
            {/* SUBTITLE */}
            <motion.p 
              className='md:text-xl text-slate-500'
              variants={textVariants}
            >
              We're a team of passionate designers and developers who create innovative solutions for your business. Let's work together and build something great.<span className='bg-[#230f39] text-purple-500 mx-1 pr-2 rounded-xl pb-1 font-mono'> I'm Rumesh</span>
            </motion.p>
            {/* BUTTON */}
            <motion.div 
              className='relative flex w-full gap-4'
              variants={containerVariants}
            >
              <motion.button 
                className='p-4 text-white bg-pink-800 rounded-lg ring-1 ring-black'
                variants={buttonVariants}
              >
                View My Work
              </motion.button>
              <motion.button 
                className='p-4 text-pink-800 rounded-lg ring-1 ring-pink-800'
                variants={buttonVariants}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;
