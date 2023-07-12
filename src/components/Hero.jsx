/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { buttonVariants, heroVariants } from "../utils";
// import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import { FaStar } from "react-icons/fa";
import FloatingIcons from "./FloatingIcons";


const Hero = () => {

  return (
    <>
      <header className="w-full relative h-[500px] md:h-[600px] max-w-7xl mx-auto">
        {/* Background Animation */}
        <div className="absolute top-40 left-0 lg:-left-14 z-[0] w-20 h-40 lg:w-36 lg:h-80 rounded-full blue__gradient" />

        {/* Content */}
        <section className={`max-w-xl md:max-w-2xl flex flex-col items-start justify-start px-5 sm:px-16 absolute top-40 xs:top-48 inset-0 gap-5 sm:gap-8 z-40`}   
         >
          <motion.h1
            className="text-text-blue lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] font-semibold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            Hi! I'm <br /> <span className="text-yellow-1">Pritam Ghosh</span>
          </motion.h1>
          <motion.p
            className="w-full max-w-lg text-text-gray font-medium text-base sm:text-lg"
            initial="initial"
            animate="show"
            variants={heroVariants(0.7)}
          >
            Frontend Developer passionate about creating visually stunning and
            user-friendly web applications. Eager to collaborate, expand my
            skills, and make a meaningful impact in the industry.
          </motion.p>
          <motion.div
            initial="initial"
            animate="show"
            variants={heroVariants(1)}
          >
            <a href="#contact">
              <motion.button
                variants={buttonVariants()}
                whileHover="hover"
                whileTap="tap"
                className="yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button"
              >
                Hire me
              </motion.button>
            </a>
          </motion.div>
        </section>
        {/* Background Animation */}
        <div className="absolute top-40 right-0 md:right-10 z-[0] w-24 h-24 sm:w-32 sm:h-32 lg:w-52 lg:h-52 rounded-full light__gradient" />

         {/* floating icons */}
      <FloatingIcons/>
      </header>
    </>
  );
};

export default Hero;
