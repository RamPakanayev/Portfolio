import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import {
  contact_ramPic,
  contact_linkedin,
  contact_github,
  contact_email,
} from "../assets";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="mt-12 flex flex-col gap-16 items-center justify-center w-full">
            <a
              href="mailto:rampakanayev@gmail.com"
              className="flex items-center justify-between w-full"
            >
              <img src={contact_email} alt="gmail" className="w-24 h-24" />
              <span className="text-white font-medium">
                Gmail
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/ram-pakanayev/"
              className="flex items-center justify-between w-full"
            >
              <img
                src={contact_linkedin}
                alt="linkedin"
                className="w-24 h-24"
              />
              <span className="text-white font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/RamPakanayev"
              className="flex items-center justify-between w-full"
            >
              <img src={contact_github} alt="github" className="w-24 h-24" />
              <span className="text-white font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
