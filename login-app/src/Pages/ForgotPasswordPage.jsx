import React, { useState } from "react";
import Background from "../assets/Background.jpg";
import ForgotPasswordImage from "../assets/forgot-password-image.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      // Handle password reset request
      console.log("Reset code sent to:", email);
    }
  };

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

      <div className="flex-grow-[0.9] flex items-center justify-center p-4">
        <div className="w-[90%] max-w-md bg-white bg-opacity-90 pt-12 pr-10 pb-18 pl-10 rounded-2xl shadow-md text-left">
          {/* Forgot Password Image */}
          <div className="flex justify-center mb-10">
            <img
              src={ForgotPasswordImage}
              alt="Forgot password"
              className="h-14 w-auto"
            />
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold mb-2">Forgot Password?</h1>
          <p className="text-gray-600 mb-10">
            Having trouble logging in? Enter your email to reset your password.
          </p>

          {/* Password Reset Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            {/* Send Code Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-4"
            >
              Send Code
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
