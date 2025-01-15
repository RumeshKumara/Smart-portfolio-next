"use client";
import { motion } from "framer-motion";

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
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-24 p-4 text-xl sm:p-8 md:p-12 lg:p-20 xl:p-">
          {/* BIOGRAPHY CONTAINER */}
          <div className="">BIOGRAPHY</div>
          {/* SKILLS CONTAINER */}
          <div className="">SKILLS</div>
          {/* EXPERIENCE CONTAINER */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden "></div>
      </div>
    </motion.div>
    </>

  );
};

export default AboutPage;
