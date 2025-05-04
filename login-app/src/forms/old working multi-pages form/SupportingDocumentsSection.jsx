import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Import Navbar
import ProgressBar from "../Components/ProgressBar"; // Import the ProgressBar component
import PreviousIcon from "../assets/previous-arrow.svg";
import NextIcon from "../assets/next-arrow.svg";
import Background from "../assets/Background.jpg"; // Import the background image

const SupportingDocumentsSection = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const [formData, setFormData] = useState({
    ghanaCard: null,
    proofOfAddress: null,
    businessPlan: null,
    partnershipAgreement: null,
    signedForms: null,
  });

  const [errors, setErrors] = useState({});

  const handleFileChange = (field, file) => {
    setFormData({
      ...formData,
      [field]: file,
    });

    // Clear errors when a file is selected
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessPlan) {
      newErrors.businessPlan =
        "Business Plan or Statement of Purpose is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data submitted:", formData);
      navigate("/next-section"); // Navigate to the next section
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
  const currentSection = 5; // Section 5: Supporting Documents

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
            Supporting Documents
          </h2>

          {/* Use ProgressBar Component */}
          <ProgressBar
            sections={sections}
            currentSection={currentSection}
            completedSections={[1, 2, 3, 4]} // Example: Completed sections
          />

          <form onSubmit={handleSubmit}>
            {/* Ghana Card */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="ghanaCard"
              >
                Ghana Card
              </label>
              <input
                type="file"
                id="ghanaCard"
                onChange={(e) =>
                  handleFileChange("ghanaCard", e.target.files[0])
                }
                className="w-full px-3 py-2 border rounded-md border-gray-300"
              />
            </div>

            {/* Proof of Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="proofOfAddress"
              >
                Proof of Address
              </label>
              <input
                type="file"
                id="proofOfAddress"
                onChange={(e) =>
                  handleFileChange("proofOfAddress", e.target.files[0])
                }
                className="w-full px-3 py-2 border rounded-md border-gray-300"
              />
            </div>

            {/* Business Plan or Statement of Purpose */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="businessPlan"
              >
                Business Plan or Statement of Purpose{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="businessPlan"
                onChange={(e) =>
                  handleFileChange("businessPlan", e.target.files[0])
                }
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.businessPlan ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.businessPlan && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.businessPlan}
                </p>
              )}
            </div>

            {/* Partnership Agreement / Company Constitution */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="partnershipAgreement"
              >
                Partnership Agreement / Company Constitution
              </label>
              <input
                type="file"
                id="partnershipAgreement"
                onChange={(e) =>
                  handleFileChange("partnershipAgreement", e.target.files[0])
                }
                className="w-full px-3 py-2 border rounded-md border-gray-300"
              />
            </div>

            {/* Signed Forms */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="signedForms"
              >
                Signed Forms (as per Registrar’s office)
              </label>
              <input
                type="file"
                id="signedForms"
                onChange={(e) =>
                  handleFileChange("signedForms", e.target.files[0])
                }
                className="w-full px-3 py-2 border rounded-md border-gray-300"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/registration-operation-details")} // Navigate to the previous section
                className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
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
                onClick={() => navigate("/registration-declarations-consent")} // Navigate to the next section
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Next
                <img src={NextIcon} alt="Next" className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportingDocumentsSection;
