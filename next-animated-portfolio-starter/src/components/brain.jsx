"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import animateSkills from "../../public/animate-skill.json";
import { motion } from "framer-motion";
import React from 'react';



const Brain = () => {
  return (
    <div className="w-full h-full ">
    <Lottie animationData={animateSkills} />
    </div>
  );
};

export default Brain;
