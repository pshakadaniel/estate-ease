import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="py-10 px-4 md:px-20 lg:px-32 w-full text-center bg-gray-900 overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col items-start md:flex-row justify-between ">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <a href="#Header">
            <img
              src={assets.logo}
              alt=""
              className="cursor-pointer fill invert"
            />
          </a>
          <p className="text-gray-400 mt-4 text-start">
            🏡 Your Dream Home Awaits! Discover the perfect place to call home
            with Estate | Ease. Your journey to comfort, style, and happiness
            starts here. 📞{" "}
            <a
              href="#Contact"
              className="text-gray-200 underline underline-offset-4"
            >
              Contact us
            </a>{" "}
            today to take the first step toward your new chapter. ✨ Your future
            begins with us.
          </p>
        </div>
        <div className="flex flex-col items-start ">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400 items-start pb-4 ">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About US
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#Header" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-start">
          <h3 className="text-white text-lg font-bold mb-4">
            Subsribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80 text-start">
            The latest news, articles, and resources, sent to your inbox weeekly
            .
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              name=""
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 w-full md:w-auto focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-800"
            />
            <button className="py-2 px-4 rounded bg-gray-600 hover:bg-gray-800 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-gray-500 border-t border-gray-800 py-4 mt-10 text-center">
        Copyright &copy; 2025 Daniel. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
