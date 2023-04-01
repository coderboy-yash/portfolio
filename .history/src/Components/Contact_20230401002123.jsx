import React from "react";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
const Contact = () => {
  return (
    <div className="flex justify-between   p-10  h-1/2 bg-black" id="contact">
      <div className="flex   flex-col justify-center gap-3 sm:gap-0 m-5 p-10 sm:p-0 items-center relative ">
        <span className="text-[48px] sm:text-[32px]">Get in Touch</span>
        <span className="text-[40px] sm:text-[32px] text-red-600  ml-5 font-bold">
          Contact me :-{" "}
        </span>
        <div className="absolute -bottom-4  -left-72 md:-left-20 sm:-left-16 ">
          <div className="flex gap-3 sm:gap-0 md:ml-5 sm:ml-5 sm:w-64 sm:mt-16">
            <span className="text-[20px] underline decoration-red-400 decoration-[4px]">
              connect with me:-
            </span>
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
        </div>
      </div>

      <div className=" flex flex-col gap-5 items-center border-2 rounded-lg border-orange-400 p-5  bg-orange-200">
        <input
          type="text"
          className="border-2 border-red-500 rounded-full p-2 outline-none"
          placeholder="name"
        />
        <input
          type="text"
          className="border-2 border-red-500 rounded-full p-2 outline-none"
          placeholder="email"
        />
        <input
          type="text"
          className="border-2 border-red-500 rounded-full p-2 outline-none"
          placeholder="message"
        />
        <button
          type="submit"
          className="bg-gradient-to-br from-orange-500 via-red-400 to-pink-500  text-white outline-red-400 py-1 w-32 px-3 rounded-xl border-none mt-4 text-[24px]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
