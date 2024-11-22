import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Page2HeadingContent } from "../constant/Constant";

function Page2() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      gsap.from(".heaidng_box h1", {
        transform: "rotateX(-80deg)",
        opacity: 0,
        stagger: 1.5,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".heaidng_box h1",
          start: "top 80%",
          end: "top -270%",
          scrub: 1,
        },
      });
    });

    mm.add("(max-width: 639px)", () => {
      gsap.from(".heaidng_box h1", {
        transform: "rotateX(-80deg)",
        opacity: 0,
        stagger: 1.5,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".heaidng_box h1",
          start: "top 80%",
          end: "top -50%", 
          scrub: 1,
        },
      });
    });

    return () => {
      mm.revert(); 
    };
  });

  return (
    <div className="page2_main relative overflow-hidden">
      <h2 className="text-xl p-6 font-[anzo1] text-gray-500 text-center">
        © anzo.studio 2024 | designed and developed
      </h2>
      {Page2HeadingContent.map((heading, idx) => {
        return (
          <div
            key={idx}
            className={`heaidng_box ${
              heading === "Impactful " ? "mt-30" : ""
            } `}
          >
            <h1 className="text-[38vw] font-[ThinAnzo] text-center uppercase leading-[32vw]">
              {heading}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
export default Page2;
