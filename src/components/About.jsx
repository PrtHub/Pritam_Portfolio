/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Sectionwrapper from "../Hoc/SectionWrapper";
import { useState } from "react";
import { fadeIn, textVariant } from "../utils";
import { services } from "../constant";

const ServiceCard = ({ title, description, icon, index }) => {
  const [showDescription, setShowDescription] = useState(false)

  const limitedDescription = showDescription
    ? description
    : `${description.slice(0, 30)}...`;

  return (  
  <>
    <Tilt 
    className="w-[250px]"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}>
      <motion.div
        className="w-full p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      >
        <section className="bg-white rounded-[20px] p-5 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="Icons"
            className="w-20 h-20 object-contain"
          />
          <h1 className="text-xl font-bold text-center text-text-blue">
            {title}
          </h1>
          <p className="text-center text-[#9ca5ba] font-medium text-sm ">
           {limitedDescription}
           {!showDescription && 
           <button className="text-[#80aefd] text-sm font-medium hover:text-text-blue focus:outline-none transition-all duration-200 " onClick={() => setShowDescription(!showDescription)}>
            Show More
           </button>
           }
          </p>
        </section>
      </motion.div>
    </Tilt>
  </>
  )
}

const About = () => {
  
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-10 sm:gap-20 relative z-0 sm:mt-10 md:mt-0">
      <div
          className="absolute top-[22px] -right-10 z-0 w-24 md:w-80 h-24 lg:w-[600px] lg:h-24 rounded-full gray__gradient"
  
        />
        <section className="flex flex-col items-start justify-start gap-5">
          <motion.h1
           variants={textVariant(0.3)}
           className="text-header"
           >
            My awesome
            <br />
            <span className="text-yellow-1">services</span>
          </motion.h1>
          <motion.p
          variants={textVariant(0.5)}
           className="paragraph"
           >
          I am a passionate full-stack developer specializing in responsive web development and user interface design. With expertise in React.js, Next.js, Node.js, Express, MongoDB, Prisma, TypeScript and JavaScript. I bring ideas to life through clean code and seamless interactions, ensuring visually appealing and highly functional web applications. I also have strong backend development skills, allowing me to create comprehensive and efficient web solutions. Contact me at <strong>pritamfinds@gmail.com</strong> to discuss collaborations, job opportunities, or any web development queries. Let's create amazing digital experiences together!
          </motion.p>
        </section>
        <section className="flex flex-wrap justify-center xs:justify-start  gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Sectionwrapper(About, "about");
