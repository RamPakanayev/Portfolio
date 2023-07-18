import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        onAnimationComplete={() => setAnimationCompleted(true)}
      >
        <p className={`${styles.sectionSubText} text-center`}>My stack</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-12`}>
          Languages & Tools 🚀
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="xs:w-28 xs:h-28 w-20 h-20" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
