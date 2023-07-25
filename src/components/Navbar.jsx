import React, { useState } from "react";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

function Navbar() {
  const [iconState, setIconState] = useState(false);

  const toggleIconState = () => {
    setIconState((prev) => !prev);
  };

  return (
    <div className="text-[#1d3557] flex items-center justify-between px-2 lg:px-12 p-3">
      <div className="logo">
        <img
          src={logo}
          alt="logo Image"
          className="h-[44px] lg:h-[60px] w-[168px]"
        />
      </div>
      {/* for small and md view */}
      <div className="flex lg:hidden">
        <button onClick={toggleIconState}>
          {iconState ? (
            <motion.div initial="hidden" animate="visible" variants={menuVariants}>
              <RxCross1 className="text-3xl" />
            </motion.div>
          ) : (
            <motion.div initial="hidden" animate="visible" variants={menuVariants}>
              <BiMenu className="text-3xl" />
            </motion.div>
          )}
        </button>
        {/* mobile menu view */}
        {iconState && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            className="absolute top-16 right-2 bg-white shadow-md rounded-lg p-4 z-10"
          >
            <a href="#" className="block py-2" onClick={toggleIconState}>
              Home
            </a>
            <a href="#" className="block py-2" onClick={toggleIconState}>
              Features
            </a>
            <a href="#" className="block py-2" onClick={toggleIconState}>
              Community
            </a>
            <a href="#" className="block py-2" onClick={toggleIconState}>
              Blog
            </a>
            <a href="#" className="block py-2" onClick={toggleIconState}>
              Pricing
            </a>
            <a href="#" onClick={toggleIconState}>
              <motion.button
                className="flex items-center px-4 py-2 bg-[#1d3557] rounded-lg text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <BsArrowRight className="ml-2 text-xl" />
              </motion.button>
            </a>
          </motion.div>
        )}
      </div>
      {/* for lg view */}
      <div className="hidden lg:flex items-center space-x-4 text-[#1d3557]">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Community</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">
          <motion.button
            className="flex items-center px-4 py-2 bg-[#1d3557] rounded-lg text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
            <BsArrowRight className="ml-2 text-xl" />
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
