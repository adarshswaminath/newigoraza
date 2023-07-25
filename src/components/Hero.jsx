import React from "react";
import { motion } from "framer-motion";
import hero from "./assets/hero.svg";

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Hero() {
  return (
    <section className="bg-sky-50">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 0.8 }}
            className="text-xs font-light text-[#1d3557]"
          >
            IGORAZA PRIVATE LIMITED
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-700"
          >
            Welcome To <span className="text-[#1d3557]">IGORAZA</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
          >
            Start with something simple and small, then expand over time
          </motion.p>
          {/* this button will display in lg screens */}
          <motion.a
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="#"
            className="hidden md:inline-flex lg:inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#1d3557] hover:bg-primary-800 focus:ring-4"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </motion.a>
          {/* button close */}
        </div>
        <div className="lg:mt-0 lg:col-span-5 flex">
          <img src={hero} alt="mockup" />
        </div>
        {/* button will display in sm screen */}
        <div className="text-center mt-4">
          <motion.a
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="#"
            className="m-auto inline-flex md:hidden lg:hidden items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#1d3557] hover:bg-primary-800 focus:ring-4"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
