import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Tilttext from "../components/Tilttext";
import Bottomtext from "../components/Bottomtext";
import Rotateball from "../components/Rotateball";
import gsap from "gsap";
import { SimpleContext } from "../context/Context";

function Page1() {
  const { Valuex, Valuey, setValuex, setValuey } = useContext(SimpleContext);

  const tiltRef = useRef(null);
  const MouseMoving = (e) => {
    setValuex(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        15
    );
    setValuey(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
    // console.log(Valuex, Valuey);
  };
  
  useEffect(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${Valuey}deg) rotateY(${Valuex}deg)`,
      duration: 2,
      ease: "power4.Out",
    });
  }, [Valuey, Valuex]);

  return (
    <div className="h-screen bg-[#ffffff] p-3">
      <div
        onMouseMove={(e) => MouseMoving(e)}
        className="Page1_main flex justify-start items-center  w-full h-[100%] rounded-[30px] relative overflow-hidden 
        bg-[url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_614,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg')] bg-cover bg-center]"
      >
        <div className="content-text relative">
          <Tilttext ref={tiltRef} />
        </div>
        <Bottomtext />
        <Rotateball />
      </div>
    </div>
  );
}

export default Page1;
