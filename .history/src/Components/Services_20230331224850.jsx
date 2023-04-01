import React from "react";
import Cards from "./Cards";
import heartemoji from "../assets/img/heartemoji.png";
import glasses from "../assets/img/glasses.png";
import Resume from "../assets/Resume.pdf";
import { motion, spring } from "framer-motion";
const Services = () => {
  return (
    <motion.div className="flex flex-col " id="services">
      <motion.div
        initial={{ x: "-100px", opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
        className="w-2/3 flex flex-col gap-3 justify-center m-5 p-10 bg-black text-white"
      >
        <span className="text-[48px]">My awesome </span>
        <span className="text-[44px] text-red-600 font-bold">Services</span>
        <span className="text-[24px]">
          These are some of the services that I can provide as a developer
        </span>
        <a href={Resume} download>
          <button className="animate-bounce bg-gradient-to-br from-orange-500 via-red-400 to-pink-500 text-white outline-red-400 py-2 w-48 px-3 rounded-xl border-none font-bold tracking-widest ">
            Download CV
          </button>
        </a>
      </motion.div>
      <div className="flex flex-col sm:flex-row  h-1/2 justify-center ">
        <Cards
          emoji={heartemoji}
          heading={"Front end"}
          details={
            "Html, Css, Javascript, React, Tailwind Css, Material-Ui, Figma"
          }
        ></Cards>
        <Cards
          emoji={glasses}
          heading={"Back end"}
          details={
            "Node js, Express, MongoDb, Mysql, Rest-api, Rapid api, firebase"
          }
        ></Cards>
      </div>
    </motion.div>
  );
};

export default Services;
