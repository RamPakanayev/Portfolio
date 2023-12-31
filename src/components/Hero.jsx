// import { motion } from "framer-motion";
// import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center`}
          >
            Welcome to <span className="text-[#915EFF]">Ram Pakanayev</span>'s
            portfolio
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-xxs`}>
          <br className="sm:block hidden" />
            A dedicated Software Engineer, possessing a BSc in Computer Science.
            <br className="sm:block hidden" />
            Passionate about innovation and problem-solving. 
            Specializing in full-stack web development, particularly proficient in JavaScript, React, and Node.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:-mb-48 bottom-48 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
