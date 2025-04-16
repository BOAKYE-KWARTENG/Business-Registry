import React from "react";
import Navbar from "../Components/Navbar"; // Import the Navbar component
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../Components/Footer"; // Import the Footer component
import Background from "../assets/Background.jpg"; // Import the background image

const HomePage = () => {
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
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          GHANA BUSINESS RESGISTRY
        </h1>
        <p className="text-white text-sm md:text-base max-w-2xl mb-6">
          Ghana Business Registry is the official platform for entrepreneurs and
          business owners in Ghana to register and manage their businesses.
          Whether you're starting a sole proprietorship, partnership, or limited
          liability company, the registry provides a streamlined and secure
          process to ensure your business is legally recognized and compliant
          with national regulations. Register today to unlock access to
          contracts, funding, and growth opportunities.
        </p>
        <button
          onClick={() => navigate("/business-registration-form")} // Navigate to registration
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          Register Your Business
        </button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
