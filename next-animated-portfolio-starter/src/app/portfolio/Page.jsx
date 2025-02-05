"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import project1 from '../../../public/images/project-1.jpg';
import project2 from '../../../public/images/project-2.jpg';
import project3 from '../../../public/images/project-3.jpg';
import project4 from '../../../public/images/project-4.jpg';
import Button from "@/components/button";

const items = [
  {
    id: 1,
    color: "#070828",
    title: "Project 1",
    description: "This is a description of project 1 This is a description of project 1 This is a description of project 1 This is a description of project 1",
    image: project1,
    link: "https://github.com/RumeshKumara",
  },
  {
    id: 2,
    color: "#070828",
    title: "Project 2",
    description: "This is a description of project 2 This is a description of project 1 This is a description of project 1 This is a description of project 1",
    image: project2,
    link: "https://github.com/RumeshKumara",
  },
  {
    id: 3,
    color: "#070828",
    title: "Project 3",
    description: "This is a description of project 3 This is a description of project 1 This is a description of project 1 This is a description of project 1",
    image: project3,
    link: "https://github.com/RumeshKumara",
  },
  {
    id: 4,
    color: "#070828",
    title: "Project 4",
    description: "This is a description of project 4 This is a description of project 1 This is a description of project 1 This is a description of project 1",
    image: project4,
    link: "https://github.com/RumeshKumara",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <motion.div
        className='h-full'
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative " ref={ref} >
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-white">
            My Works
          </div>
          <div className="sticky top-0 flex items-center h-screen gap-4 overflow-hidden">
            <motion.div className="flex" style={{ x }}>
              <div className="flex items-center justify-center w-screen h-screen bg-[#070828] " />
              {items.map((item) => (
                <div className={`h-screen w-screen bg-[#070828] ${item.color} flex items-center justify-center`}
                  key={item.id}
                >
                  <div className="flex flex-col gap-6 to-white">
                    <h1 className="text-6xl font-bold text-center text-pink-600 md:text-4xl lg:text-6xl xl:text-8xl">
                      {item.title}
                    </h1>
                    <div className="relative h-56 w-80 md:h-64 md:w-96 lg:h-[350px] lg:w-[500px] xl:h-[420px] xl:w-[600px] rounded-lg">
                      <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg " />
                    </div>
                    <p className=" bg-[#1d061d] p-2 rounded-lg text-pink-500 w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-center">{item.description}</p>
                    <Link href={item.link} className="flex items-center justify-center">
                      <button className="p-1 m-2 text-sm font-semibold text-white bg-pink-500 rounded-lg md:p-4 md:text-md lg:p-4 lg:text-lg" >See Demo</button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 text-center bg-black ">
          <h1 className="text-6xl text-white ">Do you have a project?</h1>
          <Link href="/contact">
          <Button text="Contact Me" href="" />
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default PortfolioPage;
