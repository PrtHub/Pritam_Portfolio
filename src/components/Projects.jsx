/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { buttonVariants, textVariant } from "../utils";
import Sectionwrapper from "../Hoc/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "../constant";

const Projects = () => {
  const navigate = useNavigate();

  const displayedProjects = projects.slice(0, 6);

  const handleNext = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
    navigate("/project");
  };

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-10 sm:gap-20 relative z-0 sm:mt-10 md:mt-0">
        <div className="absolute top-[22px] -right-10 z-0 w-24 md:w-80 h-24 lg:w-[600px] lg:h-24 rounded-full gray__gradient" />
        <section className="flex flex-col items-start justify-start gap-5">
          <motion.h1 variants={textVariant(0.5)} className="text-header">
            My recent
            <br />
            <span className="text-yellow-1">Projects</span>
          </motion.h1>
          <motion.p variants={textVariant(0.5)} className="paragraph">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </section>
        <section className="flex flex-wrap justify-center xs:justify-start  gap-7">
          {displayedProjects?.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </section>
        <motion.button
          variants={buttonVariants()}
          whileHover="hover"
          whileTap="tap"
          className="w-fit yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button text-sm sm:text-base"
          onClick={handleNext}
        >
          show more
        </motion.button>
      </div>
    </>
  );
};

export default Sectionwrapper(Projects, "project");
