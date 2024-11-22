import React from "react";
import { ScrollTrigger } from "gsap/all";
import laptopimage from "../assets/Images/laptop.webp";
import laptopvido from "../assets/Videos/VideoInLaptop.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Page3() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      gsap.to(".laptopWrapper", {
        transform: "rotateX(0deg) rotateY(0deg)",
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".laptopWindowsBox",
          start: "top 60%",
          end: "top 5%",
          scrub: 1,
        },
      });
    });
    mm.add("(max-width: 639px)", () => {
      gsap.to(".laptopWrapper", {
        transform: "rotateX(0deg) rotateY(0deg)",
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".laptopWindowsBox",
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      });
    });
  });

  return (
    <div className="laptopWindowsBox h-[50vh] sm:h-screen w-full flex justify-center items-center">
      <div className="laptopWrapper w-[90%] sm:w-[70%] h-[80%] sm:h-[80%]  flex justify-center items-center">
        <img
          className="innerlaptop relative z-50 w-full h-full"
          src={laptopimage}
          alt=""
        />
        <video
          autoPlay
          muted
          className="absolute z-40 -translate-x-1/2 h-full w-[80%] -translate-y-1/2 top-[47%] left-[50%]"
          src={laptopvido}
        ></video>
      </div>
    </div>
  );
}

export default Page3;
