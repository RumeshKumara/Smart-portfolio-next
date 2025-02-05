"use client";
import React from 'react'; // Add this import
import { motion } from "framer-motion";
import Loader from '@/components/loader';

const ContactPage = () => {
  const text = "Say Hello";
  return (
    <>
      <motion.div
        className='h-full'
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className='flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        { /* TEXT CONTAINER */}
        <div className='flex flex-row items-center justify-center text-6xl text-white h-1/2 lg:h-full lg:w-1/2'>
         <div>
          { text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
               }}
            >
              {letter}
            </motion.span>
          )) }

         </div>
         <Loader />

        </div>
        { /* FORM CONTAINER */}
        <form className=' h-1/2 lg:h-full lg:w-1/2'></form>

        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
