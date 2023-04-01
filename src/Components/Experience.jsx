import React from "react";
import Round from "./Round";

const Experience = () => {
  return (
    <div className="flex h-72 justify-center items-center bg-black mb-5 ">
      <Round content={"15+"} heading={"projects completed"}></Round>
      <Round content={"10+"} heading={"open source contribution"}></Round>
    </div>
  );
};

export default Experience;
