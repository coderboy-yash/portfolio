import React from "react";

const Round = ({ content, heading }) => {
  return (
    <div className=" flex flex-col m-10 items-center justify-center">
      <div className="p-4 font-extrabold text-white text-[24px] bg-gradient-to-br from-orange-500 via-red-400 to-pink-500 rounded-full">
        {content}
      </div>
      <span className="text-red-500 font-semibold text-[20px] sm:text-[28px]">
        {heading}
      </span>
    </div>
  );
};

export default Round;
