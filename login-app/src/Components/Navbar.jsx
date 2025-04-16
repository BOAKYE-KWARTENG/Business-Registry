import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/BKW LOGO.svg"; // Adjust the path to your LOGO file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  return (
    <>
      <nav
        className="text-black py-2 fixed top-0 left-0 w-full z-50 shadow-md"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={LOGO} alt="Logo" className="w-14 h-14" />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className={`block md:hidden focus:outline-none ${
              isMenuOpen ? "bg-[#fefae0] p-2 rounded-md" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="#023047" // Set the color to #023047
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-fefae0 md:bg-transparent z-10`}
          >
            <Link
              to="/login"
              className="block md:inline-block bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition mx-4 md:mx-0 text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block md:inline-block text-white bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800 transition mx-4 md:mx-0 text-center"
            >
              Signup
            </Link>
          </div>
        </div>
      </nav>

      {/* Add space below the Navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
