import { motion } from "framer-motion";
import { staggerContainer } from "../utils";


const Sectionwrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10"
      >
        <span className="hash-span" id={idName}>
           &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default Sectionwrapper;