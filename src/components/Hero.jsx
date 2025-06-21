import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/BurakPP.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-8 lg:mb-35">
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-light tracking-tight lg:mt-16 lg:text-7xl gradient-text"
            >
              Burak Akgün
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent font-medium mb-6"
            >
              Full Stack Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="my-4 max-w-xl py-6 font-light tracking-tight text-lg leading-relaxed text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
              <img 
                className="relative rounded-3xl shadow-2xl card-hover" 
                src={profilePic} 
                alt="profile"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
