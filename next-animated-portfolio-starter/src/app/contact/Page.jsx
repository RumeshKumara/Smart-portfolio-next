"use client";
import React from 'react';
import { motion } from "framer-motion";
import Loader from '@/components/loader';
import Card from '@/components/card';
import Like from '@/components/like';

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
          {/* TEXT CONTAINER */}
          <div className='flex items-center justify-center gap-6 pt-12 text-6xl text-pink-500 h-1/2 lg:h-full lg:w-1/2 lg:flex-col'>
            <div className=''>
              {text.split("").map((letter, index) => (
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
              ))}
              😊
            </div>
          
            <div>
              <Like />
            </div>
          </div>
          {/* FORM CONTAINER */}
          <form className='flex flex-col justify-center h-full gap-8 p-24 text-xl bg-[#0a0e3388] lg:w-1/2 h-1/2 rounded-xl'>
            <span className='text-white '>Dear Razaa Dev,</span>
            <textarea rows={6} className='bg-transparent border-b-2 outline-none resize-none border-b-pink-500 text-slate-400'/>
            <span className='text-white '>My mail addrass is:</span>
            <input type='text' className='bg-transparent border-b-2 outline-none border-b-pink-500 text-slate-400'/>
            <span className='text-white '>Regards</span>
            <button className='p-4 font-semibold text-white bg-pink-700 rounded '>Send</button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
