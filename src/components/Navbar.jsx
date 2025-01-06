import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full">
      <div
        className={`fixed top-0 w-full z-10 ${
          scroll ? "bg-gray-900 shadow-md" : "bg-transparent"
        }container mx-auto flex justify-between items-center  px-6 py-4 md:px-20 lg:px-32 `}
      >
        <a href="#Header">
          <img src={assets.logo} alt="" className="cursor-pointer  " />
        </a>
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Project" className="cursor-pointer hover:text-gray-400">
            Project
          </a>
          <a href="#Testimonial" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white hover:bg-gray-600 px-8 py-2 rounded-full ">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
          onClick={() => setShowMenu(true)}
        />
      </div>
      {/*----------hambuger menu----------------*/}
      <div
        className={`md:hidden ${
          showMenu ? "fixed w-full z-50" : "w-0 h-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6 "
            alt=""
            onClick={() => setShowMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-2 px-5 text-lg font-medium ">
          <a
            onClick={() => setShowMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#Project"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#Testimonial"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
