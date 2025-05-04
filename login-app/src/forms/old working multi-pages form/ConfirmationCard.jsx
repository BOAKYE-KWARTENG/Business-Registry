import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Import Navbar
import Background from "../assets/Background.jpg"; // Import the background image
import SuccessIcon from "../assets/success-icon.png"; // Add a success icon for visual appeal

const ConfirmationCard = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Add Navbar at the top of the component */}
      <Navbar />

      <div className="flex-grow flex justify-center items-center p-4">
        <div className="w-full max-w-md md:max-w-lg bg-white shadow-lg rounded-lg overflow-hidden p-6 md:p-8 text-center">
          {/* Success Icon */}
          <img
            src={SuccessIcon}
            alt="Success"
            className="mx-auto mb-4 h-16 w-16"
          />

          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-600 mb-2">
            Submission Successful!
          </h2>

          {/* Message */}
          <p className="text-gray-700 mb-6">
            Thank you for completing the registration process. Your form has
            been successfully submitted. We will review your application and
            contact you shortly.
          </p>

          {/* Navigation Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/")} // Navigate to the home page
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;
