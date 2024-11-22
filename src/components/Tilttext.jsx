import React from "react";

const Tilttext = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-fit p-4 sm:p-12 cursor-pointer">
      <h1 className="text-[#ffffff] text-[8.5vw] sm:text-[4.5vw] leading-[10.3vw] sm:leading-[4.5vw] font-[anzo3]">
        I AM <span className=" text-blue-400   sm:text-[#000] ">DARK MODE</span> ™
        </h1>
      <h1 className="text-[#ffffff] text-[15.2vw] sm:text-[8.2vw] font-[anzo4] leading-[14.3vw] sm:leading-[7.5vw]">DEVELOPER</h1>
      <h1 className="text-[#ffffff] text-[6vw] sm:text-[3.8vw] font-[anzo3] leading-[6.8vw] sm:leading-[3.8vw]">Bringing Bold Contrast to UI</h1>
    </div>
  );
})

export default Tilttext;
