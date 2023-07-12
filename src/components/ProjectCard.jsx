/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { fadeIn } from "../utils";

const ProjectCard = ({
  name,
  description,
  project_live_link,
  source_code_link,
  image,
  index,
}) => {
  return (
    <>
      <Tilt
        className=" w-full xs:w-[360px] h-full "
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full p-[1px] bg-white rounded-2xl shadow-card "
        >
          <section className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <div className="absolute top-0 right-0 flex justify-end m-3">
              <section
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-black bg-opacity-70 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <AiFillGithub className="w-1/2 h-1/2 object-contain text-white opacity-100" />
              </section>
            </div>
            <div className="absolute top-12 right-0 flex justify-end m-3">
              <section
                onClick={() => window.open(project_live_link, "_blank")}
                className="bg-black bg-opacity-70 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <AiFillEye className="w-1/2 h-1/2 object-contain text-white" />
              </section>
            </div>
          </section>
          <section className="mt-2 p-2">
            <h3 className="text-text-blue font-semibold text-[24px]">{name}</h3>
            <p className="mt-2 text-[#9ca5ba] text-[14px]">{description}</p>
          </section>
        </motion.div>
      </Tilt>
    </>
  );
};

export default ProjectCard;
