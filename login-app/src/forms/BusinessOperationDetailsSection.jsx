import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Import Navbar
import ProgressBar from "../Components/ProgressBar"; // Import the ProgressBar component
import PreviousIcon from "../assets/previous-arrow.svg";
import NextIcon from "../assets/next-arrow.svg";
import Background from "../assets/Background.jpg"; // Import the background image

const BusinessOperationDetailsSection = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const [formData, setFormData] = useState({
    numberOfEmployees: "",
    licenses: [],
    hasStartedOperation: "",
    bankAccountDetails: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    // Clear errors when user types
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  };

  const handleCheckboxChange = (license) => {
    setFormData((prevFormData) => {
      const updatedLicenses = prevFormData.licenses.includes(license)
        ? prevFormData.licenses.filter((item) => item !== license)
        : [...prevFormData.licenses, license];
      return { ...prevFormData, licenses: updatedLicenses };
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.numberOfEmployees || isNaN(formData.numberOfEmployees)) {
      newErrors.numberOfEmployees =
        "Number of Employees must be a valid number.";
    }

    if (!formData.hasStartedOperation) {
      newErrors.hasStartedOperation =
        "Please indicate if the business has started operation.";
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

  // Progress bar sections
  const sections = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];
  const currentSection = 4; // Section 4: Business Operation Details

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
            Business Operation Details
          </h2>

          {/* Use ProgressBar Component */}
          <ProgressBar
            sections={sections}
            currentSection={currentSection}
            completedSections={[1, 2, 3]} // Example: Completed sections
          />

          <form onSubmit={handleSubmit}>
            {/* Number of Employees */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="numberOfEmployees"
              >
                Number of Employees (initial){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={(e) =>
                  handleChange("numberOfEmployees", e.target.value)
                }
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.numberOfEmployees
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter number of employees"
              />
              {errors.numberOfEmployees && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.numberOfEmployees}
                </p>
              )}
            </div>

            {/* Licenses/Permits */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Licenses/Permits held or applied for
              </label>
              <div className="flex flex-col space-y-2">
                {[
                  "General business license",
                  "Tax registration",
                  "Specialized permit",
                ].map((license) => (
                  <label key={license} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.licenses.includes(license)}
                      onChange={() => handleCheckboxChange(license)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">{license}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Has the business started operation? */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Has the business started operation?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="hasStartedOperation"
                      value={option}
                      checked={formData.hasStartedOperation === option}
                      onChange={(e) =>
                        handleChange("hasStartedOperation", e.target.value)
                      }
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {errors.hasStartedOperation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.hasStartedOperation}
                </p>
              )}
            </div>

            {/* Business Bank Account Details */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bankAccountDetails"
              >
                Business Bank Account Details (optional at registration)
              </label>
              <textarea
                id="bankAccountDetails"
                value={formData.bankAccountDetails}
                onChange={(e) =>
                  handleChange("bankAccountDetails", e.target.value)
                }
                rows="4"
                className="w-full px-3 py-2 border rounded-md border-gray-300"
                placeholder="Enter bank account details"
              ></textarea>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/registration-address")} // Navigate to the previous section
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
                onClick={() => navigate("/registration-document-details")} // Navigate to the next section
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

export default BusinessOperationDetailsSection;
