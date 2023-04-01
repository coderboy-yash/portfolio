import React from "react";
import { motion, spring } from "framer-motion";
const Cards = ({ emoji, heading, details, color }) => {
  return (
    <motion.div
      initial={{ x: "100px", opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
      className=" shadow-lg shadow-red-500 bg-red-100 border-slate-800 border-4  w-64 items-center gap-2  ml-20 flex flex-col  m-5 p-2 font-semibold"
    >
      <img src={emoji} width="100px" alt="" />
      <span className="text-[28px]">{heading}</span>
      <span className="font-normal text-[20px]">{details}</span>
      <button className="shadow-lg shadow-red-300 text-[24px]">
        Learn More
      </button>
    </motion.div>
  );
};

export default Cards;
