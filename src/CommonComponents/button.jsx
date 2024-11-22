import React from "react";

function Button({ buttontext, variant, customclass, onClicked = () => {} }) {
  return (
    <div
      className={`${
        variant === "primary"
          ? "text-[10px] sm:text-[16px] w-fit font-[anzo2] rounded-[50px] hover:scale-105 cursor-pointer duration-500 hover:bg-[#979797c0] bg-[#000] py-[4px] sm:py-[10px] px-4 sm:px-10 text-[#ffffff] border-[2px] sm:border-[6px] border-[#ffffff]"
          : ""
      } ${customclass}`}
      onClick={()=> onClicked()}  
    >
      {buttontext}
    </div>
  );
}

export default Button;

