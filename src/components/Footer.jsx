import React from "react";
import { Link } from "react-router-dom";
import Button from "../CommonComponents/button";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {

    const handleLinkClick = (e) => {
        window.scrollTo(0, 0);
      };

  return (
    <footer className="bg-gradient-to-b from-[#111] to-[#000] relative w-full h-screen overflow-hidden  text-[#ffffffa6] pt-4 px-8 z-[30]">
      <div className="container w-full h-[98%] sm:h-full flex justify-between flex-col items-center">
        {/* Upper Section */}
        <div className="flex w-full flex-row justify-between items-start mb-[10px] sm:mb-16">
          <div className="mb-[6px] sm:mb-0">
            <p className="font-[anzo1] text-[16px] sm:text-xl mb-6">Relax, I got you.</p>
            <Button buttontext=' Take a seat' variant='secondary'
             customclass="border max-sm:text-[14px] border-white max-sm:py-[6px] py-2 max-sm:px-3 px-4 text-center cursor-pointer font-[anzo2] 
              hover:bg-white hover:text-black transition duration-300"/>
          </div>
          <div className="text-right mt-8 max-sm:hidden ">
            <ul className="flex flex-row justify-start items-center space-x-10 font-[anzo2] ">
              <Link onClick={handleLinkClick} to={"/"} className="hover:text-blue-400">
                Home
              </Link>
              <Link onClick={handleLinkClick} to={"/work"} className="hover:text-blue-400">
                Work
              </Link>
              <Link onClick={handleLinkClick} to={"/about"} className="hover:text-blue-400">
                About
              </Link>
              <Link onClick={handleLinkClick} to={"/contact"} className="hover:text-blue-400">
                Contact
              </Link>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex w-full flex-col sm:flex-row justify-between items-center mb-[6px] sm:mb-16">
          <div className="font-[anzo1] max-sm:text-[16px] mb-4 ">
            <p>San Diego—California</p>
            <p>Paris—France</p>
          </div>
          <div className="flex space-x-8 text-[20px] sm:text-2xl font-[anzo2] ">
            <a href="#" className="hover:text-blue-400 transition">
              <RiTwitterXFill/>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaInstagram/>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin/>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center w-full uppercase text-white font-[anzo4] m-0 text-[20vw] leading-none mb-8">
          Maveric
        </div>

        {/* Lower Section */}
        <div className="flex w-full flex-col sm:flex-row justify-between items-center m-0 max-sm:text-[14px]  font-[anzo1]">
          <a
            href="mailto:biz@rejoice.com"
            className="hover:text-white transition"
          >usmanazharportfoliodev.com
          </a>
          <p>©Usman Azhar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
