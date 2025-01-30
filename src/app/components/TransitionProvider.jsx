"use client";
import React, {useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }
 
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <AnimatePresence mode='wait'>
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-[#0a0e33] to-slate-950">
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className='fixed top-0 bottom-0 left-0 z-50 m-auto text-white cursor-default ring-0 text-8xl w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[100px] z-40 bottom-0'
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh - 6rem)]">{children}</div> {/* Fixed typo */}
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
