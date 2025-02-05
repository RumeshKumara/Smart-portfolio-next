"use client";
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaSass, FaDownload } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiFramer, SiMongodb, SiPostgresql, SiGo, SiMysql, SiFigma } from 'react-icons/si';
import Brain from '@/components/brain';

const brainVariants = {
  upDown: {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const AboutPage = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin:"-100px"});

  const experienceRef = useRef();
  const isExperienceInView = useInView(experienceRef, {margin:"-10px"});

  return (
    <>
      <motion.div
        className='min-h-screen'
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        {/* CONTAINER */}
        <div className="min-h-screen lg:flex bg-gradient-to-b from-[#0a0e33] to-[#240b1d] flex flex-col md:flex-row lg:flex-row xl:flex-row overflow-scroll">
          {/* TEXT CONTAINER */}
          <div className="mt-[-20px] flex flex-col gap-24 p-4 text-xl lg:w-2/3 lg:pr-0 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 xl:1/2">
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col justify-center gap-12 ">
              {/* BIOGRAPHY HEADER */}
              <h1 className='text-2xl font-bold text-white'>BIOGRAPHY</h1>
              <p className='text-lg text-slate-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Nobis illum eligendi fuga id.  Labore nisi ea dignissimos ipsa, itaque cupiditate<br/> ducimus quasi sit tenetur enim, quidem eius? Earum, atque quis?
              </p>
              <span className='italic text-slate-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
              {/* DOWNLOAD CV */}
              <div className='self-start'>
                <button className='flex items-center gap-2 p-3 text-pink-400 bg-[#28091c] ring-1 ring-pink-800 rounded-lg hover:text-pink-300  transition-colors duration-300 '>
                  <FaDownload /> Download CV
                </button>
              </div>
              {/* BIOGRAPHY SCROLL SVG */}
              <div>
                <motion.svg 
                initial={{ opacity: 0.2, y: 0}}
                animate={{ opacity: 1, y: "10px"}}
                transition={{ repeat: Infinity, duration: 3, ease:"easeInOut" }}
                fill="none" height="45" viewBox="0 0 24 25" width="44" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#84014b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    <path d="m5 15.4199c0 1.8565.73754 3.6371 2.05029 4.9499 1.31276 1.3127 3.09321 2.05 4.94971 2.05s3.637-.7373 4.9498-2.05c1.3127-1.3128 2.0502-3.0934 2.0502-4.9499v-5.99998c0-1.85651-.7375-3.63695-2.0502-4.94971-1.3128-1.31275-3.0933-2.05029-4.9498-2.05029s-3.63695.73754-4.94971 2.05029c-1.31275 1.31276-2.05029 3.0932-2.05029 4.94971z"/>
                    <path d="m12 6.41992v7.99998"/>
                    <path d="m15 11.4199-3 3-3-3"/>
                  </g>
                </motion.svg>
              </div>
              <hr />
            </div>
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col justify-center gap-10 " ref={skillRef}>
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className='text-2xl font-bold text-white '
              >
                SKILLS
              </motion.h1>
              <motion.div 
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className='flex flex-wrap gap-4 '>
                <div className='flex items-center gap-2 p-2 text-lg text-red-500 bg-[#2b0f0f] rounded cursor-pointer hover:text-red-400  transition-colors duration-300'>
                  <FaHtml5 size={30} /> HTML
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-500 bg-[#100c32] rounded cursor-pointer hover:text-blue-300 transition-colors duration-300'>
                  <FaCss3Alt size={30} /> CSS
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-yellow-400 bg-[#1d1c0b] rounded cursor-pointer hover:text-yellow-300 transition-colors duration-300'>
                  <FaJs size={30} /> JavaScript
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-500 bg-[#100c2c] rounded cursor-pointer hover:text-sky-300 transition-colors duration-300'>
                  <FaReact size={30} /> React.js
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-white bg-[#1f2f2f] rounded cursor-pointer hover:text-slate-300 transition-colors duration-300'>
                  <FaJava size={30} /> Java
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-green-500 bg-[#081708] rounded cursor-pointer hover:text-green-300 transition-colors duration-300'>
                  <FaNodeJs size={30} /> Node.js
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-400 bg-[#0d092f] rounded cursor-pointer hover:text-blue-300 transition-colors duration-300'>
                  <SiTypescript size={30} /> TypeScript
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-teal-400 bg-[#0d1f1f] rounded cursor-pointer hover:text-teal-300 transition-colors duration-300'>
                  <SiTailwindcss size={30} /> Tailwind CSS
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-gray-400 bg-[#1f1f1f] rounded cursor-pointer hover:text-slate-300 transition-colors duration-300'>
                  <SiExpress size={30} /> Express.js
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-pink-400 bg-[#1f0f1f] rounded cursor-pointer hover:text-pink-300 transition-colors duration-300'>
                  <SiFramer size={30} /> Framer Motion
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-green-600 bg-[#0d1f0d] rounded cursor-pointer hover:text-green-400 transition-colors duration-300'>
                  <SiMongodb size={30} /> MongoDB
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-600 bg-[#0d1f2f] rounded cursor-pointer hover:text-blue-400 transition-colors duration-300'>
                  <SiPostgresql size={30} /> PostgreSQL
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-400 bg-[#0d1f2f] rounded cursor-pointer hover:text-blue-300 transition-colors duration-300'>
                  <SiGo size={30} /> Go
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-pink-400 bg-[#1f0f1f] rounded cursor-pointer hover:text-pink-300 transition-colors duration-300'>
                  <FaSass size={30} /> SCSS
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-500 bg-[#0d1f2f] rounded cursor-pointer hover:text-blue-300 transition-colors duration-300'>
                  <SiMysql size={30} /> MySQL
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-orange-500 bg-[#0d1f2f] rounded cursor-pointer hover:text-orange-300 transition-colors duration-300'>
                  <SiFigma size={30} /> Figma
                </div>
              </motion.div>
              <motion.svg 
              initial={{ opacity: 0.2, y: 0}}
              animate={{ opacity: 1, y: "10px"}}
              transition={{ repeat: Infinity, duration: 3, ease:"easeInOut" }}
              fill="none" height="45" viewBox="0 0 24 25" width="44" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#84014b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <path d="m5 15.4199c0 1.8565.73754 3.6371 2.05029 4.9499 1.31276 1.3127 3.09321 2.05 4.94971 2.05s3.637-.7373 4.9498-2.05c1.3127-1.3128 2.0502-3.0934 2.0502-4.9499v-5.99998c0-1.85651-.7375-3.63695-2.0502-4.94971-1.3128-1.31275-3.0933-2.05029-4.9498-2.05029s-3.63695.73754-4.94971 2.05029c-1.31275 1.31276-2.05029 3.0932-2.05029 4.94971z"/>
                  <path d="m12 6.41992v7.99998"/>
                  <path d="m15 11.4199-3 3-3-3"/>
                </g>
              </motion.svg>
              <hr />
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col justify-center gap-12 pb-48 " ref={experienceRef}>
              <motion.h1 
              initial={{ x: "-300px" }}
              animate={isExperienceInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className='text-2xl font-bold text-white '>
              EXPERIENCE
              </motion.h1>
              {/* EXPERIENCE LIST */}
              <motion.div 
              initial={{ x: "-300px" }}
              animate={isExperienceInView ? { x: "0" } : {}}
              className=''>
                {/* EXPERIENCE LIST ITEM */}
                <div className='flex justify-between h-48 '>
                  {/* LEFT */}
                  <div className='w-1/3 '>
                      {/* JOB TITLE */}
                      <div className=' w-fit  bg-[#080725] p-3 font-semibold rounded-b-lg rounded-s-lg text-sky-400'>Senior JavaScript engineer</div>
                      {/* JOB DESC */}
                      <div className='p-3 text-sm italic text-slate-300'>
                        My current employee. 
                        way better than the last one.
                      </div>
                      {/* JOB DATE */}
                      <div className='p-3 text-sm font-semibold text-pink-500'>
                        2025 - present
                      </div>
                      {/* JOB DATE */}
                      <div className=' p-1 rounded text-sm  font-semibold text-sky-400 bg-[#080725] w-fit'>
                        Apple
                      </div>
                  </div>
                      {/* CENTER */}
                      <div className='w-1/6'>
                        {/* LINE */}
                        <div className='relative w-1 h-full rounded bg-slate-300'>
                          {/* LINE CIRCLE */}
                          <div className='absolute w-5 h-5 rounded-full bg-[#1f0f1f] ring-4 ring-pink-600 -left-2'> </div>
                        </div>
                      </div>
                      {/* RIGHT */}
                      <div className='w-1/3 '></div>
                  </div>
                   {/* EXPERIENCE LIST ITEM */}
                <div className='flex justify-between h-48 '>
                  {/* LEFT */}
                  <div className='w-1/3 '>
                      
                  </div>
                      {/* CENTER */}
                      <div className='w-1/6'>
                        {/* LINE */}
                        <div className='relative w-1 h-full rounded bg-slate-300'>
                          {/* LINE CIRCLE */}
                          <div className='absolute w-5 h-5 rounded-full bg-[#1f0f1f] ring-4 ring-pink-600 -left-2'> </div>
                        </div>
                      </div>
                      {/* RIGHT */}
                      <div className='w-1/3 '>
                      {/* JOB TITLE */}
                      <div className=' w-fit  bg-[#080725] p-3 font-semibold rounded-b-lg rounded-s-lg text-sky-400'>Senior JavaScript engineer</div>
                      {/* JOB DESC */}
                      <div className='p-3 text-sm italic text-slate-300'>
                        My current employee. 
                        way better than the last one.
                      </div>
                      {/* JOB DATE */}
                      <div className='p-3 text-sm font-semibold text-pink-500'>
                        2025 - present
                      </div>
                      {/* JOB DATE */}
                      <div className=' p-1 rounded text-sm  font-semibold text-sky-400 bg-[#080725] w-fit'>
                        Apple
                      </div></div>
                  </div>
                  {/* EXPERIENCE LIST ITEM */}
                <div className='flex justify-between h-48 '>
                  {/* LEFT */}
                  <div className='w-1/3 '>
                      {/* JOB TITLE */}
                      <div className=' w-fit  bg-[#080725] p-3 font-semibold rounded-b-lg rounded-s-lg text-sky-400'>Senior JavaScript engineer</div>
                      {/* JOB DESC */}
                      <div className='p-3 text-sm italic text-slate-300'>
                        My current employee. 
                        way better than the last one.
                      </div>
                      {/* JOB DATE */}
                      <div className='p-3 text-sm font-semibold text-pink-500'>
                        2025 - present
                      </div>
                      {/* JOB DATE */}
                      <div className=' p-1 rounded text-sm  font-semibold text-sky-400 bg-[#080725] w-fit'>
                        Apple
                      </div>
                  </div>
                      {/* CENTER */}
                      <div className='w-1/6'>
                        {/* LINE */}
                        <div className='relative w-1 h-full rounded bg-slate-300'>
                          {/* LINE CIRCLE */}
                          <div className='absolute w-5 h-5 rounded-full bg-[#1f0f1f] ring-4 ring-pink-600 -left-2'> </div>
                        </div>
                      </div>
                      {/* RIGHT */}
                      <div className='w-1/3 '></div>
                  </div>
                </motion.div>
             </div>          
            </div>
          {/* SVG CONTAINER */}
          <motion.div
            className="sticky z-30 hidden w-1/3 mr-8 mt-[80px] lg:block xl:1/2"
            variants={brainVariants}
            animate="upDown"
          >
            <Brain />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
