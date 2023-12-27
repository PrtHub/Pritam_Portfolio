/* eslint-disable react-refresh/only-export-components */

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Sectionwrapper from "../Hoc/SectionWrapper";
import { buttonVariants, slideIn, textVariant } from "../utils";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_exm4ifr",
        "template_gmgueml",
        formRef.current,
        "HnOt3sGhWabbLUnWe"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-5">
        <motion.h1 variants={textVariant(0.3)} className="text-header">
          Get in touch
          <br />
          <span className="text-yellow-1">contact</span>
        </motion.h1>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full sm:w-[70%] bg-white shadow-card p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-text-blue font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-text-gray rounded-lg outline-none border-yellow-1 border-[1px] font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-text-blue font-medium mb-4">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-text-gray rounded-lg outline-none  border-yellow-1 border-[1px] font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-text-blue font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-text-gray rounded-lg outline-none  border-yellow-1 border-[1px] font-medium"
              />
              <p className="text-xs text-red-500">
                **Important: When reaching out, please ensure to include your
                email address within the message.
              </p>
            </label>
            <motion.button
              variants={buttonVariants()}
              whileHover="hover"
              whileTap="tap"
              className="w-fit yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button text-sm sm:text-base"
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Sectionwrapper(Contact, "contact");
