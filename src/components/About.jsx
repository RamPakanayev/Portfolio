import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-1 min-h-[280px] flex justify-evenly items-center flex-col "
      >
        <img
          src={icon}
          alt="web-development"
          className="w-90 h-90 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        I am Ram Pakanayev, a dedicated full-stack engineer backed by a BSc in
        Computer Science from the Holon Institute of Technology (HIT), enriched
        by a full-stack bootcamp course at Udemy. My skills are anchored in
        JavaScript, React, Node, and Web3, cultivated through a combination of
        rigorous academic study and self-guided projects. I have a diverse
        portfolio that demonstrates my ability to deliver efficient and scalable
        solutions, including managing applications from the beginning to
        building a decentralized Ethereum platform. I am excited to leverage my
        skills and experiences to contribute significantly to a progressive
        software development team within an organization that values innovation
        and excellence.
      </motion.p>

      <p className={`${styles.sectionSubText} mt-10 text-white`}>
        The positions I am interested in :
      </p>

      <div className="mt-10 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
