import React from "react";
import { motion, spring } from "framer-motion";
const Project = ({ img, name, url, details }) => {
  return (
    <motion.div
      initial={{ x: "-100px", opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
      className="h-1/3 w-64 shadow-lg shadow-black bg-red-100 m-10 text-[20px]  rounded-xl border-2 border-red-500 "
    >
      <a href={url} target="_blank">
        <img
          src={img}
          alt=""
          className="rounded-t-xl h-48 border-b-red-500 border-b-2"
        />
      </a>

      <div className="p-4  w-64   flex flex-col">
        <span className="text-[28px] mb-3">{name}</span>

        <span>details:-{details}</span>
      </div>
    </motion.div>
  );
};

export default Project;
