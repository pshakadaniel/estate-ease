import React, { useEffect, useState } from "react";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { assets } from "../assets/assets";
import SignupLogin from "./SignupLogin";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignupLogin, setShowSignupLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth state
  const [user, setUser] = useState(null); // User information
  const [scroll, setScroll] = useState(false);

  // Manage body scroll for the menu
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
  // Handle navbar background on scroll
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
  // Handle form submission
  const handleSignupLoginSubmit = (data) => {
    setShowSignupLogin(false); // Close the modal
    // Handle sign-up
    setIsAuthenticated(true); // Mark the user as logged in
    setUser({ username: data.username }); // Set user information (replace with actual user data)
  };
  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false); // Mark the user as logged out
    setUser(null); // Clear user information
    setShowMenu(false); // Close the menu if open
  };
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
        <ul className="hidden md:flex gap-12 text-white">
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
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">
            Contact
          </a>
        </ul>
        <div className=" md:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex md:flex-row flex-col items-center gap-2">
              <span className=" text-gray-200 items-center">Welcome,</span>
              <a
                href="#Contact"
                className="font-bold italic underline underline-offset-8 text-gray-200 md:mr-4 items-center"
              >
                {user?.username}
              </a>
              <button
                className="hidden md:flex bg-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-700"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button
              className="hidden md:flex bg-white hover:bg-gray-600 px-8 py-2 rounded-full"
              onClick={() => setShowSignupLogin(true)}
            >
              Sign Up
            </button>
          )}
        </div>
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
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
        <ul className="flex flex-col items-center gap-2 mt-2 px-5 text-lg font-medium">
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
          <a
            onClick={() => setShowMenu(false)}
            href="#Contact"
            className="cursor-pointer hover:text-gray-400"
          >
            Contact
          </a>
          {isAuthenticated ? (
            <button
              className="px-4 py-2 rounded-full bg-gray-500 text-white hover:bg-gray-600"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                setShowMenu(false);
                setShowSignupLogin(true);
              }}
              className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-600"
            >
              Sign Up
            </button>
          )}
        </ul>
      </div>
      {/* Signup/Login Modal */}
      {showSignupLogin && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg flex flex-col items-end gap-2 w-full h-full sm:w-auto sm:h-auto">
            {" "}
            <button onClick={() => setShowSignupLogin(false)}>
              <img src={assets.cross_icon} alt="" className="w-4 invert" />
            </button>
            <SignupLogin onSubmit={handleSignupLoginSubmit} />
            {/* This is the
            SignupLogin component, onSubmit will help to handle the form
            submission */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
