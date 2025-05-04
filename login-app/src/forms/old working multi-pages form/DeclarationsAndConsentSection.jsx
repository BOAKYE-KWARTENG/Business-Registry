import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Import Navbar
import ProgressBar from "../Components/ProgressBar"; // Import the ProgressBar component
import PreviousIcon from "../assets/previous-arrow.svg";
import Background from "../assets/Background.jpg"; // Import the background image

const DeclarationsAndConsentSection = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const [formData, setFormData] = useState({
    declaration: false,
    consent: false,
    signature: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    // Clear errors when user interacts
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.declaration) {
      newErrors.declaration =
        "You must declare that the information provided is true and accurate.";
    }

    if (!formData.consent) {
      newErrors.consent =
        "You must consent to process your data for registration purposes.";
    }

    if (!formData.signature) {
      newErrors.signature = "Signature is required.";
    }

    if (!formData.date) {
      newErrors.date = "Date is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data submitted:", formData);
      // Submit the form or navigate to a confirmation page
      navigate("/confirmation");
    }
  };

  const sections = [
    "Information",
    "Owner(s)",
    "Address",
    "Operations",
    "Documents",
    "Consent",
  ];
  const currentSection = 6; // Section 6: Declarations and Consent

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
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-6 md:p-10">
          <h2 className="text-xl font-bold text-center py-4 bg-blue-50 border-b border-gray-200">
            Declarations and Consent
          </h2>

          {/* Use ProgressBar Component */}
          <ProgressBar
            sections={sections}
            currentSection={currentSection}
            completedSections={[1, 2, 3, 4, 5]} // Example: Completed sections
          />

          <form onSubmit={handleSubmit}>
            {/* Declaration */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                I declare that the information provided is true and accurate{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="declaration"
                  checked={formData.declaration}
                  onChange={(e) =>
                    handleChange("declaration", e.target.checked)
                  }
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <label htmlFor="declaration" className="ml-2 text-gray-700">
                  I agree
                </label>
              </div>
              {errors.declaration && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.declaration}
                </p>
              )}
            </div>

            {/* Consent */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Consent to process my data for registration purposes{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => handleChange("consent", e.target.checked)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <label htmlFor="consent" className="ml-2 text-gray-700">
                  I agree
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-xs mt-1">{errors.consent}</p>
              )}
            </div>

            {/* Signature */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="signature"
              >
                Signature (Input legal name as signature){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="signature"
                value={formData.signature}
                onChange={(e) => handleChange("signature", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.signature ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your legal name as signature"
              />
              {errors.signature && (
                <p className="text-red-500 text-xs mt-1">{errors.signature}</p>
              )}
            </div>

            {/* Date */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date}</p>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/registration-document-details")} // Navigate to the previous section
                className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition cursor-pointer"
              >
                <img
                  src={PreviousIcon}
                  alt="Previous"
                  className="mr-2 h-4 w-4"
                />
                Previous
              </button>
              <button
                type="button"
                onClick={() => navigate("/preview")} // Navigate to preview all sections
                className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition cursor-pointer"
              >
                Preview
              </button>
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeclarationsAndConsentSection;
