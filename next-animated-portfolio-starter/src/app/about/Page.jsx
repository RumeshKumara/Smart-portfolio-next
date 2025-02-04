"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaSass, FaDownload } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiFramer, SiMongodb, SiPostgresql, SiGo, SiMysql, SiFigma } from 'react-icons/si';

const AboutPage = () => {
  return (
    <>
      <motion.div
        className='h-full'
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        {/* CONTAINER */}
        <div className="h-full lg:flex bg-gradient-to-b from-[#0a0e33] to-[#240b1d] flex flex-col md:flex-row lg:flex-row xl:flex-row">
          {/* TEXT CONTAINER */}
          <div className="flex flex-col gap-24 p-4 text-xl lg:w-2/3 lg:pr-0 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 xl:1/2">
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col justify-center gap-12">
              {/* BIOGRAPHY HEADER */}
              <h1 className='text-2xl font-bold text-white'>BIOGRAPHY</h1>
              <p className='text-lg text-slate-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illum eligendi fuga id. Labore nisi ea dignissimos ipsa, itaque cupiditate ducimus quasi sit tenetur enim, quidem eius? Earum, atque quis?
              </p>
              <span className='italic text-slate-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
              {/* DOWNLOAD CV */}
              <div className='self-start'>
                <button className='flex items-center gap-2 p-3 text-pink-400 bg-[#28091c] ring-1 ring-pink-800 rounded-lg '>
                  <FaDownload /> Download CV
                </button>
              </div>
              {/* BIOGRAPHY SIGNATURE */}
              <div className='self-end '>
                <svg width="99" height="82" viewBox="0 0 99 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 63C30 46.8509 29 30.9168 29 14.7778C29 12.8023 27.7285 3.71591 29.2222 2.22222C29.7854 1.65906 30.3122 3.20107 30.5556 3.44445C31.3048 4.1937 32.5847 3.99152 33.5 4.5C35.1207 5.40041 38.1435 5.25464 39.4444 6.55556C41.1247 8.23579 41.8874 8.50381 44.2222 9.22222C47.1477 10.1224 48.8205 12.5006 51.4444 14C54.0625 15.4961 56.7891 20.7754 58 23.5C58.721 25.1222 60.4426 32.8582 58.4444 34C56.6494 35.0257 55.4606 36.2142 53.4444 37.2222C51.8269 38.031 49.6816 37.9088 48.2222 39.2222C44.8657 42.2431 38.9679 41.4587 35 43.2222C30.8766 45.0549 27.0241 40.7072 31 38.2222C34.6176 35.9612 35.5796 38.4264 36 42C36.6093 47.1786 43.2689 51.2912 45.0556 56.0556C45.758 57.9286 52.5492 68.8324 50.9444 61.6111C50.5744 59.9459 50 52.9685 50 54.5C50 56.7841 51 58.7395 51 61C51 61.7635 51.3957 58.613 52 57.5556C52.5543 56.5855 54.302 60.1542 54.7778 61C55.1494 61.6608 55 55.7288 55 54.2222C55 50.4718 55.6865 55.0257 55.9444 56.4444C56.4769 59.3729 56.043 57.2947 57.7778 59.2222C58.5395 60.0686 59 64.4815 59 60.5556C59 58.1111 59 55.6667 59 53.2222C59 50.7762 58.9032 33.2932 60.7778 41C61.852 45.4162 63.287 49.522 64.5 53.8889C65.0637 55.9181 67 58.5973 67 60.3889C67 62.5185 67 56.1296 67 54C67 53.1103 67 57.9064 67 59C67 61.0501 67.9847 62 70 62C71.247 62 75.0783 63.0888 71.8889 64C68.6247 64.9326 65.4279 66 62 66C58.3872 66 60.4733 66.3948 62.5 65.9444C67.6432 64.8015 72.6298 63.2494 77.4444 61.2222C80.0664 60.1183 80 60.6847 80 57.5C80 55.938 78 52.8759 78 56C78 61.6612 76.1679 64 70.2222 64C62.5664 64 54.1133 65.6725 46.5 66.6111C34.5887 68.0796 23.1297 71.4849 12 75.7778C8.77732 77.0208 5.79769 78.6698 2.61111 79.9445C0.734519 80.6951 6.61357 79.2256 8.5 78.5C20.5433 73.8679 34.0367 72.6511 46.0556 68.4445C53.946 65.6828 60.7184 62.0565 68.9444 60C73.742 58.8006 78.3694 58.1538 83 56.5C85.8475 55.483 95.6758 57.6484 97 55" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
              {/* BIOGRAPHY SCROLL SVG */}
              <div>
                <svg fill="none" height="45" viewBox="0 0 24 25" width="44" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#84014b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                    <path d="m5 15.4199c0 1.8565.73754 3.6371 2.05029 4.9499 1.31276 1.3127 3.09321 2.05 4.94971 2.05s3.637-.7373 4.9498-2.05c1.3127-1.3128 2.0502-3.0934 2.0502-4.9499v-5.99998c0-1.85651-.7375-3.63695-2.0502-4.94971-1.3128-1.31275-3.0933-2.05029-4.9498-2.05029s-3.63695.73754-4.94971 2.05029c-1.31275 1.31276-2.05029 3.0932-2.05029 4.94971z"/>
                    <path d="m12 6.41992v7.99998"/>
                    <path d="m15 11.4199-3 3-3-3"/>
                  </g>
                </svg>
              </div>
            </div>
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col justify-center gap-12 ">
              <h1 className='text-2xl font-bold text-white '>SKILLS</h1>
              <div className='flex flex-wrap gap-4 '>
                <div className='flex items-center gap-2 p-2 text-lg text-red-500 bg-[#2b0f0f] rounded cursor-pointer'>
                  <FaHtml5 size={30} /> HTML
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-500 bg-[#100c32] rounded cursor-pointer'>
                  <FaCss3Alt size={30} /> CSS
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-yellow-400 bg-[#1d1c0b] rounded cursor-pointer'>
                  <FaJs size={30} /> JavaScript
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-500 bg-[#100c2c] rounded cursor-pointer'>
                  <FaReact size={30} /> React.js
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-white bg-[#1f2f2f] rounded cursor-pointer'>
                  <FaJava size={30} /> Java
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-green-500 bg-[#081708] rounded cursor-pointer'>
                  <FaNodeJs size={30} /> Node.js
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-400 bg-[#0d092f] rounded cursor-pointer'>
                  <SiTypescript size={30} /> TypeScript
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-teal-400 bg-[#0d1f1f] rounded cursor-pointer'>
                  <SiTailwindcss size={30} /> Tailwind CSS
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-gray-400 bg-[#1f1f1f] rounded cursor-pointer'>
                  <SiExpress size={30} /> Express.js
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-pink-400 bg-[#1f0f1f] rounded cursor-pointer'>
                  <SiFramer size={30} /> Framer Motion
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-green-600 bg-[#0d1f0d] rounded cursor-pointer'>
                  <SiMongodb size={30} /> MongoDB
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-600 bg-[#0d1f2f] rounded cursor-pointer'>
                  <SiPostgresql size={30} /> PostgreSQL
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-400 bg-[#0d1f2f] rounded cursor-pointer'>
                  <SiGo size={30} /> Go
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-pink-400 bg-[#1f0f1f] rounded cursor-pointer'>
                  <FaSass size={30} /> SCSS
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-blue-500 bg-[#0d1f2f] rounded cursor-pointer'>
                  <SiMysql size={30} /> MySQL
                </div>
                <div className='flex items-center gap-2 p-2 text-lg text-orange-500 bg-[#0d1f2f] rounded cursor-pointer'>
                  <SiFigma size={30} /> Figma
                </div>
              </div>
              <svg fill="none" height="45" viewBox="0 0 24 25" width="44" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#84014b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path d="m5 15.4199c0 1.8565.73754 3.6371 2.05029 4.9499 1.31276 1.3127 3.09321 2.05 4.94971 2.05s3.637-.7373 4.9498-2.05c1.3127-1.3128 2.0502-3.0934 2.0502-4.9499v-5.99998c0-1.85651-.7375-3.63695-2.0502-4.94971-1.3128-1.31275-3.0933-2.05029-4.9498-2.05029s-3.63695.73754-4.94971 2.05029c-1.31275 1.31276-2.05029 3.0932-2.05029 4.94971z"/>
                  <path d="m12 6.41992v7.99998"/>
                  <path d="m15 11.4199-3 3-3-3"/>
                </g>
              </svg>
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col justify-center gap-12 pb-48 ">
              <h1 className='text-2xl font-bold text-white '>
              EXPERIENCE
              </h1>
              {/* EXPERIENCE LIST */}
              <div className=''>
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
                </div>
             </div>          
            </div>
          {/* SVG CONTAINER */}
          <div className="hidden w-1/3 lg:block xl:1/2 "></div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
