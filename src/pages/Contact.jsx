import React from "react";
import Contactfrom from "../components/Contactfrom";

function Contact() {
  return (
    <div className="w-full bg-[#111] pt-[25vw] sm:pt-0 ">
      <div className="content w-full flex justify-center items-center flex-col">
        <h1 className="customBg text-[14vw] sm:text-[10vw] font-[anzo4]">
          Get in touch
        </h1>
        <p className="font-[anzo1] text-[5vw] sm:text-[2vw] text-[#ffffffa6] w-fit text-center">
          Your next big idea is just a conversation away. Let's create something
          extraordinary together.
        </p>
      </div>
      <div className="p-4 sm:p-20  mt-4 sm:mt-20 relative">
        <div
          className="w-[5vw] h-[5vw] opacity-70 p-4 bg-blue-500 absolute translate-x-[-50%] translate-y-[-50%]
left-[10%] top-[20%] rounded-full shadow-[60px_20px_60px_190px_rgba(37,99,235,0.5)]
backdrop-blur-[100px]"
        ></div>

        <div
          className="w-[5vw] h-[5vw] opacity-70 p-4 bg-blue-500 absolute translate-x-[-50%] translate-y-[-50%]
right-[10%] top-[60%] rounded-full shadow-[60px_20px_60px_250px_rgba(37,99,235,0.5)]
backdrop-blur-[100px]"
        ></div>

        <div className="p-2 bg-[#000000a9] backdrop-blur-[50px] rounded-xl relative flex justify-center items-center flex-col sm:flex-row">
          <div className="w-full sm:w-[50%]  p-4">
            <h2 className="font-[anzo3] text-[#ffffff] text-[25px] sm:text-4xl">
              Let's connect together
            </h2>
            <p className="font-[anzo1] text-[#ffffffa6] text-[14px] sm:text-lg my-[15px] sm:my-2">
              Got an idea? Have a question or just want to connect? I’m all
              ears! Let’s team up and turn concepts into something real. Whether
              it's brainstorming or problem-solving, I’m here to collaborate and
              make it happen.
            </p>
            <Contactfrom />
          </div>
          <div className="w-full sm:w-[50%] h-[50vh] sm:h-[100vh] p-2 ">
            <div className="astronotdiv w-full h-full rounded-lg p-2 flex justify-start items-end flex-row">
              <p className="font-[anzo1] text-[20px] leading-none sm:text-3xl text-[#ffffffa6]">
                Where creativity meets functionality, that’s where I code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
