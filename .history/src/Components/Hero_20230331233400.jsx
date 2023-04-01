import React from "react";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
// import hero from "../assets/img/hero.jpg";
import bg from "../assets/img/bg.jpg";
import { motion, spring } from "framer-motion";
import Container from "react-bootstrap/Container";

const Hero = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: ` linear-gradient(45deg,
      rgba(245,70,66, 0.1),
      rgba(8,83,156, 0.1)),url(${bg})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex  font-Tangerine font-extrabold max-w-full"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 2, type: "spring" }}
        className="flex flex-col justify-center items-center ml-48  max-w-full font-semibold gap-3 md:ml-10 sm:ml-10 md:p-5 sm:p-0 sm:gap-0  md:gap-0"
      >
        <span className="text-[58px] mt-4 font-Lobster font-thin text-red-400 ">
          Hi! I Am{" "}
        </span>
        <span className="text-[64px] text-red-500 underline">Yash Nigam</span>
        <span className="text-[40px]  font-medium text-red-900 font-Inter ">
          " A mern stack developer capable of turning client ideas into reality
          with custom web development solutions."
        </span>
        <button className="bg-gradient-to-br from-orange-500 via-red-400 to-pink-500 text-white font-bold text-[24px] space-x-1 outline-red-400 py-1 w-32 px-3 md:px-0 rounded-xl border-none mt-4 md:mt-1">
          Hire me
        </button>
        <div className="flex gap-4 mt-1 mb-4 md:mt-1 md:w-[68px] ">
          <a href="https://github.com/coderboy-yash" target="_blank">
            <img src={github} width="50px" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-nigam-1170a524a/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
      </motion.div>
    </Container>
  );
};

export default Hero;
