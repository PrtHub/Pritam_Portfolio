/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "../Hoc/SectionWrapper";
import { skillVariants } from "../utils";
import { skills } from "../constant";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div ref={ref} className="flex flex-row flex-wrap justify-center gap-10">
        {skills.map((tech, index) => (
          <Tilt
            key={tech.name}
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <motion.section
              variants={skillVariants(index * 0.1)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="w-28 h-28 p-4  bg-white shadow-card rounded hover:drop-shadow-lg"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full text-center"
              />
            </motion.section>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
