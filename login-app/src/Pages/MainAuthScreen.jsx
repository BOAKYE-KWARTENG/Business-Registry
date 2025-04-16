import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Background from "../assets/Background.jpg";
import LOGO from "../assets/LOGO.jpg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainAuthScreen = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      {/* Main Content - grows to fill space */}
      <div className="flex-grow-[0.9] flex items-center justify-center p-4">
        {/* Responsive container */}
        <div
          className="
            w-[80%] h-[50vh]          /* Default: mobile (all screens below 640px) */
            sm:w-[70%] sm:h-[50vh]     /* Small: ≥640px (phones in landscape) */
            md:w-[40%] md:h-[50vh]     /* Medium: ≥768px (tablets) */
            lg:w-[40%] lg:h-[60vh]     /* Large: ≥1024px (small laptops) */
            xl:w-[30%] xl:h-[60vh]     /* Extra Large: ≥1280px (desktops) */
            2xl:w-[20%] 2xl:h-[40vh]   /* 2X Large: ≥1536px (big screens) */
            bg-white bg-opacity-90
            pt-8 pr-8 pb-12 pl-8       /* Padding: top/right/left 2rem, bottom 3rem */
            rounded-2xl shadow-md
            text-center
            flex flex-col
          "
        >
          {/* Logo with generous bottom margin */}
          <div className="mb-16">
            <img
              src={LOGO}
              alt="Logo"
              className="mx-auto w-15 h-15 object-contain"
            />
          </div>

          {/* Buttons with compact spacing */}
          <div className="flex flex-col gap-3 mt-auto">
            <button
              className="
              px-6 py-2.5
              bg-blue-600 text-white
              rounded-lg
              hover:bg-blue-800
              transition-colors
              text-sm md:text-base
              cursor-pointer
            "
              onClick={() => navigate("/login")} // Navigate to LoginPage
            >
              Login
            </button>
            <button
              className="
              px-6 py-2.5
              border border-gray-200 text-black
              rounded-lg
              hover:bg-gray-50
              transition-colors
              text-sm md:text-base
              cursor-pointer
            "
              onClick={() => navigate("/signup")} // Navigate to CreateAccountPage
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default MainAuthScreen;
