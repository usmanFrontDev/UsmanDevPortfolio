import React, { useContext, useEffect, useState } from "react";
import Button from "../CommonComponents/button";
import gsap from "gsap";
import { NavText } from "../constant/Constant";
import { SimpleContext } from "../context/Context";
import {Link} from 'react-router-dom'

function Hamnav() {
  const { Nav, setNav } = useContext(SimpleContext);
  const [closing, setClosing] = useState(false); // State for managing closing animation

  useEffect(() => {
    const tl = gsap.timeline();

    if (!Nav && !closing) {
      // Open animation
      tl.from(".Navbar", {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
      tl.from(".NavInner", {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power4.out",
      });
    } else if (closing) {
      // Close animation
      tl.to(".NavInner", {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power4.out",
      });
      tl.to(".Navbar", {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      }).then(() => {
        setNav(true); // Set Nav to true after animation finishes
        setClosing(false); // Reset closing state
      });
    }
  }, [Nav, closing, setNav]);

  const handleClose = () => {
    setClosing(true); // Trigger closing animation
    console.log("Closing triggered"); // Check if handleClose is called
  };

  return (
    <>
      {(!Nav || closing) && (
        <div className="Navbar w-full h-screen bg-slate-50 flex justify-center items-center fixed top-0 left-0 p-4 z-50">
          <Button
            onClicked={handleClose}
            variant={"primary"}
            buttontext={"close"}
            customclass={
              "absolute z-[70] px-[40px] top-6 right-6 hover:bg-blue-400 font-[anzo3] text-[15px] sm:text-[20px]"
            }
          />
          <div className="w-[100%] relative flex px-2 sm:px-20 py-0 sm:py-20 justify-center items-center h-[100%]">
            <div className="bg-[#000] mt-12 sm:mt-0 rounded-3xl py-2 sm:py-4 px-3 sm:px-8 w-[100%]">
              {NavText.map((text, idx) => (
                <div
                  key={idx}
                  className="NavInner flex border-b border-[#dadada] hover:text-blue-400 cursor-pointer pr-4 mt-6 sm:mt-3 mb-3  text-[#ffffff] flex-row justify-between items-end "
                >
                  <Link to={`/${text === 'home' ? '': text}`}
                  onClick={handleClose}
                   className="font-[ThinAnzo] uppercase duration-200 leading-[0.8] text-[22vw] sm:text-[11vw]">
                    {text}
                  </Link>
                  <p className="font-[anzo4] uppercase text-[5vw] sm:text-[2vw]">
                    {`0${idx + 1}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hamnav;
