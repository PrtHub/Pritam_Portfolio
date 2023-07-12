import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <section className="w-full h-full absolute top-0 left-0 z-30 ">
      <motion.div
        className="floating-icon star"
        initial={{ x: 100, y: 100 }}
        animate={{ x: -100, y: -100 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <FaStar className="text-2xl  md:text-4xl "/>
      </motion.div>
      <motion.div
        className="floating-icon linkedin"
        initial={{ x: -100, y: 100 }}  // Change the initial position
    animate={{ x: -50, y: -100 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <AiFillLinkedin
        className="text-2xl  md:text-4xl "
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/pritam-ghosh-dev/",
              "_blank"
            )
          }
        />
      </motion.div>
      <motion.div
        className="floating-icon twitter"
        initial={{ x: 100, y: 100 }}
        animate={{ x: -100, y: -100 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <AiOutlineTwitter
        className="text-2xl  md:text-4xl "
          onClick={() =>
            window.open("https://twitter.com/PritamGhosh010", "_blank")
          }
        />
      </motion.div>
      <motion.div
        className="floating-icon github"
        initial={{ x: 100, y: 100 }}
        animate={{ x: -100, y: -100 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <AiFillGithub
        className="text-2xl  md:text-4xl "
          onClick={() => window.open(" https://github.com/PrtHub", "_blank")}
        />
      </motion.div>
    </section>
  );
};

export default FloatingIcons;
