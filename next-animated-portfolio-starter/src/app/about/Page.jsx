"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <div className="flex flex-col gap-24 p-4 text-xl sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64">
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col justify-center gap-12">
              <h1>BIOGRAPHY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illum eligendi fuga id. Labore nisi ea dignissimos ipsa, itaque cupiditate ducimus quasi sit tenetur enim, quidem eius? Earum, atque quis?
              </p>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
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
