import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { navLinks } from "../constant";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { buttonVariants } from "../utils";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="w-full px-6 sm:px-16 py-5 bg-white bg-opacity-20 backdrop-blur-md backdrop-filter shadow-lg fixed top-0 z-50">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          </Link>

          <motion.section className="hidden sm:flex items-center gap-16">
            <motion.ul className="list-none hidden sm:flex items-center flex-row gap-10">
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className={`text-base ${
                    active === nav.title ? "text-yellow-1" : "text-text-blue"
                  } hover:text-yellow-1 transition-all duration-150 font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
             variants={buttonVariants()}
             whileHover="hover"
             whileTap="tap"
              className="yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button"
            >
              <a href="#contact">Contact</a>
            </motion.button>
          </motion.section>

          {/* mobile view  */}
          <section className="sm:hidden flex flex-1 justify-end items-center ">
            {toggle ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <AiOutlineClose
                  className="w-[28px] h-[28px] object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <AiOutlineMenu
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-[28px] h-[28px] object-contain cursor-pointer"
                  onClick={() => setToggle(true)}
                />
              </motion.div>
            )}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-white`}
            >
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                className="list-none flex justify-end items-start flex-1 flex-col gap-4"
              >
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`text-base hover:text-yellow-1 transition-all duration-150 font-medium cursor-pointer ${
                      active === nav.title ? "text-yellow-1" : "text-black"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <button className="yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button">
                  <a href="#contact">Contact</a>
                </button>
              </motion.ul>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
