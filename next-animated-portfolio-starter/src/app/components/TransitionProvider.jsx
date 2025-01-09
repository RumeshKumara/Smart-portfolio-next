"use client";
import React from 'react'
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';

const TransitionProvider = ({ children }) => {
  return (
    <AnimatePresence>
    <div className="w-screen h-screen bg-gradient-to-b from-[#0a0e33] to-slate-950">
    <div className="h-24">
      <Navbar />
    </div>
    <div className="h-[calc(100vh - 6rem)]">{children}</div> {/* Fixed typo */}
    </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
