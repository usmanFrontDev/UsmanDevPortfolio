import React from "react";
import potrait from "../assets/Images/about me potrait.jpg";
import { TbCirclesRelation } from "react-icons/tb";
import { SiSpringCreators } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import ball from "../assets/Images/Page1blackballimg.webp";
import { MdOutlineDateRange } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { experienceData } from "../constant/Constant";

function About() {
  return (
    <div className="w-full p-4 space-y-4">
      <div
        className={`aboutpage-_1 potraitPicture w-full bg-cover
      bg-center bg-blend-darken
     h-fit rounded-[30px] sm:rounded-none p-0 sm:p-4`}
      >
        <div className="w-full h-full p-3  sm:p-16 pt-0  sm:pt-20 flex justify-center gap-4 flex-row items-center">
          <div className="w-[90%]  overflow-hidden absolute sm:relative sm:rounded-none sm:w-[35%] opacity-70 sm:opacity-100 h-full z-10">
            <div className={`w-full h-full`}>
              <img
                src={potrait}
                alt=""
                className="w-full h-full object-contain overflow-hidden hidden sm:block"
              />
            </div>
            <TbCirclesRelation className="absolute bottom-8  -left-0 sm:-left-2 z-20 text-blue-400 text-[20vw] sm:text-[10vw] font-100" />
          </div>
          <div className="w-full sm:w-[50%] h-fit sm:h-full px-2 pt-12 sm:pt-0 sm:px-4 z-20 relative">
            <SiSpringCreators className="absolute rotate-12 bottom-0 right-0 text-blue-400 opacity-80 text-[45vw] sm:text-[15vw]" />
            <h1
              className="text-blue-400 text-[12vw] lg:text-[6.5vw] xl:text-[8vw] relative font-[anzo4] 
          -ml-0 lg:-ml-32 xl:-ml-48 inline-block whitespace-nowrap uppercase"
            >
              about me
            </h1>
            <p className=" font-[anzo1] text-[#ffffff] sm:text-[#111111e0] relative text-[14px] lg:text-[15px] xl:text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              deleniti enim temporibus reiciendis quod minima reprehenderit
              repudiandae velit nemo, accusamus nesciunt delectus obcaecati ad
              incidunt? Necessitatibus nostrum libero adipisci laudantium.
              accusamus nesciunt delectus obcaecati ad incidunt? Necessitatibus
              nostrum libero adipisci laudantium.
            </p>
            <br />
            <p className="font-[anzo1]  text-[#ffffff] sm:text-[#111111e0]  relative text-[14px] lg:text-[15px] xl:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              totam maiores sit sapiente. In ad odio dignissimos eius eum ea at
              quam id quis quae. In ad odio dignissimos eius eum ea at quam id
              quis quae. In ad odio dignissimos eius eum ea at quam id quis
              quae.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        {experienceData.map((data) => (
          <div className="divwrapexperiencebox relative">
            <div
              className="w-[20vw] h-[20vw] p-4 bg-purple-500 absolute -z-10 translate-x-[-50%] translate-y-[-50%]
left-[50%] top-[50%] rounded-full shadow-[0_0_100px_50px_rgba(128,0,128,0.5)]"
            />
            ;
            <div className="experiencebox mx-auto w-[95%] relative z-10 flex flex-col p-4 bg-[#1a334fb3] backdrop-blur-2xl rounded-3xl gap-4 sm:gap-8">
              <div className="upper flex justify-center sm:justify-between items-start sm:items-center flex-col sm:flex-row">
                <div className="lefti bg-[#111] p-1 pr-5 lg:pr-8 xl:pr-5 rounded-[50px] w-fit flex flex-row gap-5 justify-start items-center">
                  <div className="w-[30px] sm:w-[60px] lg:w-[50px] xl:w-[60px] h-[30px] sm:h-[60px] lg:h-[50px] xl:h-[60px] overflow-hidden rounded-full">
                    <img
                      src={data.companyLogo}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="cont ">
                    <h3 className="font-[anzo3] text-[16px] sm:text-3xl lg:text-xl xl:text-3xl leading-none text-[#ffffff]">
                      {data.company}
                    </h3>
                    <p className="text-[#ffffffb7] flex justify-start my-0 sm:my-1 lg:my-0 xl:my-1 flex-row items-center font-[anzo2] text-[10px] sm:text-[15px] lg:text-[13px] xl:text-[15px]">
                      <CiLocationOn className="inline-block text-[12px] sm:text-[18px] lg:text-[16px] xl:text-[18px] font-800" />
                      {data.location}
                    </p>
                  </div>
                </div>
                <div className="righti flex justify-start mt-[10px] sm:mt-0 
                items-center py-0 sm:py-2 px-0 sm:px-6 rounded-none sm:rounded-[50px] 
                gap-[5px] sm:gap-4 w-fit sm:bg-[#ffffff]">
                  <MdOutlineDateRange className="text-[16px] sm:text-[22px] font-[900]" />
                  <div className="flex flex-row justify-start items-center text-[10px] lg:text-[14px] xl:text-[16px] gap-1 sm:gap-3 font-[anzo2] sm:font-[anzo4] lg:font-[anzo2] xl:font-[anzo4]">
                    <h3>{data.startDate}</h3>
                    <p>-</p>
                    <h3>{data.endDate}</h3>
                  </div>
                </div>
              </div>
              <div className="header flex justify-start items-center gap-4">
                <div className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] overflow-hidden">
                  <img
                    src={ball}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <h3 className="font-[anzo4] text-[16px] leading-[15px] sm:leading-none sm:text-2xl uppercase text-[#ffffff]">
                  {data.position}
                </h3>
              </div>
              <div className="desc space-y-[10px] sm:space-y-1 text-[#ffffffad]">
                {data.description.map((desc) => (
                  <p className="flex justify-start font-[anzo1] items-start gap-[10px] sm:gap-3 text-[12px] sm:text-lg lg:text-[16px] xl:text-lg">
                    <MdKeyboardArrowRight className="font-900 font-[anzo4] text-xl sm:text-2xl" />
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
