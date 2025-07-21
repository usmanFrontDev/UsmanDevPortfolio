import { useRef } from "react";
import { projects } from "../constant/Constant";
import Button from "../CommonComponents/button";

function Work() {
  return (
    <div className="w-full">
      <div className="w-full h-full flex justify-start pt-20 items-center gap-10 flex-col">
        <div className="font-[Anzo4]  uppercase text-[4vw] hidden sm:flex justify-center items-center space-x-5 flex-wrap">
          <h3>
            <span className=" text-blue-400 text-[6vw] inline-block">f</span>rom
          </h3>
          <h3>
            <span className=" text-blue-400 text-[6vw] inline-block">B</span>
            lueprint
          </h3>
          <h3>
            <span className=" text-blue-400 text-[6vw] inline-block">t</span>o
          </h3>
          <h3>
            <span className=" text-blue-400 text-[6vw] inline-block">b</span>
            rilliance
          </h3>
        </div>
        <h1 className="font-[Anzo4] uppercase text-[9vw] flex sm:hidden justify-center items-center ">
          Works <p className="text-blue-400 mx-2">That</p> inspire
        </h1>
        <div className="w-full p-2 flex flex-col gap-3 sm:gap-5 justify-start items-center">
          {projects.map((project, index) => {
            const videoRef = useRef(null);

            const handleMouseEnter = () => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.playbackRate = 1.75;
                videoRef.current.play();
              }
            };

            const handleMouseLeave = () => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            };

            return (
              <div
                className=" duration-500 shadow-xl border border-[#11111152] bg-[#11111107] w-[80%] sm:w-[80%]
             flex flex-col-reverse sm:flex-row justify-between items-start p-3 rounded-3xl"
                key={index}
              >
                <div className="lefti p-2 w-[100%] sm:w-[50%]">
                  <h2 className="text-[16px] sm:text-3xl text-[#111] font-[anzo3] capitalize py-0 sm:py-2">
                    {project.name}
                  </h2>
                  <p className="py-0 sm:py-1 font-[anzo1] h-fit  text-[#111111c0] my-[4px] sm:my-3 text-[12px] sm:text-[18px]">
                    {project.desc}
                  </p>
                  <div className="w-[100%] sm:w-[90%] h-fit flex py-2 gap-2 justify-start items-center flex-wrap flex-row my-[10px] sm:my-4">
                    {project.tags.map((tag, index) => (
                      <div className="bg-blue-400 text-[#ffffff] font-[anzo2] text-[10px] sm:text-[16px] px-[16px] sm:px-4 py-[6px] sm:py-1 rounded-[50px]">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <Button
                    buttontext={"View Project"}
                    variant={"primary"}
                    customclass={
                      "text-[12px] sm:text-[14px] mt-2 sm:my-1 border-2 px-4 bg-[#111] py-2"
                    }
                  />
                </div>
                <div
                  className="relative group w-full sm:w-[50%] h-[25vh] sm:h-[48vh] flex justify-center overflow-hidden items-center rounded-3xl "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <video
                    ref={videoRef}
                    src={project.video}
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    style={{ willChange: "opacity" }}
                  />
                  <img
                    src={project.img}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    alt={project.name}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
