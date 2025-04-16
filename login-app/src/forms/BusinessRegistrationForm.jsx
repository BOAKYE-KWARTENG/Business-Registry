import React, { useState } from "react";
import NextIcon from "../assets/next-arrow.svg";
import Background from "../assets/Background.jpg";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/ProgressBar"; // Import the ProgressBar component
import { useNavigate } from "react-router-dom";

const BusinessRegistrationForm = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    businessName: "",
    businessNameAlt: "",
    businessType: "",
    businessNature: "",
    businessTIN: "",
    commencementDate: "",
    businessDescription: "",
  });

  // Error states
  const [errors, setErrors] = useState({});

  // Track active field for focus styling
  const [activeField, setActiveField] = useState("");

  // Track current section (starting with section 1)
  const [currentSection, setCurrentSection] = useState(1);

  // Sections completion tracking
  const [completedSections, setCompletedSections] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Handle field focus
  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  // Handle field blur
  const handleBlur = () => {
    setActiveField("");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Validate business name (more than 2 characters)
    if (!formData.businessName || formData.businessName.length <= 2) {
      newErrors.businessName = "Business name must be more than 2 characters";
    }

    // Validate business type (required)
    if (!formData.businessType) {
      newErrors.businessType = "Please select a business type";
    }

    // Validate nature of business (required)
    if (!formData.businessNature) {
      newErrors.businessNature = "Please select the nature of your business";
    }

    // Validate TIN (8-16 numbers)
    if (formData.businessTIN && !/^\d{8,16}$/.test(formData.businessTIN)) {
      newErrors.businessTIN = "TIN must be between 8 and 16 digits";
    }

    // Validate date of commencement (required)
    if (!formData.commencementDate) {
      newErrors.commencementDate = "Please select a commencement date";
    }

    // Validate business description (max 750 words)
    const wordCount = formData.businessDescription.trim().split(/\s+/).length;
    if (formData.businessDescription && wordCount > 750) {
      newErrors.businessDescription = "Description should not exceed 750 words";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Mark current section as completed
      if (!completedSections.includes(currentSection)) {
        setCompletedSections([...completedSections, currentSection]);
      }

      // Move to next section (in a real app, this would navigate to the next section)
      setCurrentSection(currentSection + 1);

      // For demo purposes, just log the data
      console.log("Form data submitted:", formData);
    }
  };

  // Business entity options
  const businessTypeOptions = [
    "Sole Proprietor",
    "Partnership",
    "Company Limited by Shares",
  ];

  // Nature of business options
  const businessNatureOptions = [
    "Retail",
    "IT Services",
    "Agriculture",
    "Manufacturing",
    "Finance",
  ];

  // Progress bar sections
  const sections = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Add Navbar at the top of the component */}
      <Navbar />

      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-4xl h-auto md:h-4/5 bg-white shadow-lg rounded-lg overflow-hidden p-10">
          <h2 className="text-xl font-bold text-center py-4 bg-blue-50 border-b border-gray-200">
            REGISTER YOUR BUSINESS
          </h2>

          {/* Use ProgressBar Component */}
          <ProgressBar
            sections={sections}
            currentSection={currentSection}
            completedSections={completedSections}
          />

          <div className="flex flex-col md:flex-row">
            {/* Form Content - with original spacing restored */}
            <div className="flex-1 p-4 md:p-6 overflow-y-auto">
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold mb-4">Business Information</h1>

                {/* Business Name */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="businessName"
                  >
                    Proposed Business Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("businessName")}
                    onBlur={handleBlur}
                    className={`w-full px-3 py-2 border rounded-md 
                      ${
                        errors.businessName
                          ? "border-red-500"
                          : activeField === "businessName"
                          ? "border-blue-500 ring-1 ring-blue-500"
                          : "border-gray-300"
                      }`}
                    placeholder="Enter your business name"
                  />
                  {errors.businessName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.businessName}
                    </p>
                  )}
                </div>

                {/* Business Name Alternative */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="businessNameAlt"
                  >
                    Proposed Business Name (second option)
                  </label>
                  <input
                    type="text"
                    id="businessNameAlt"
                    name="businessNameAlt"
                    value={formData.businessNameAlt}
                    onChange={handleChange}
                    onFocus={() => handleFocus("businessNameAlt")}
                    onBlur={handleBlur}
                    className={`w-full px-3 py-2 border rounded-md
                      ${
                        activeField === "businessNameAlt"
                          ? "border-blue-500 ring-1 ring-blue-500"
                          : "border-gray-300"
                      }`}
                    placeholder="Enter alternative business name"
                  />
                </div>

                {/* Two fields side by side: Business Type and Nature of Business */}
                <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                  {/* Business Type */}
                  <div className="flex-1 mb-4 md:mb-0">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="businessType"
                    >
                      Type of Business Entity{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        onFocus={() => handleFocus("businessType")}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2 appearance-none border rounded-md pr-10
                          ${
                            errors.businessType
                              ? "border-red-500"
                              : activeField === "businessType"
                              ? "border-blue-500 ring-1 ring-blue-500"
                              : "border-gray-300"
                          }`}
                      >
                        <option value="">Select business type</option>
                        {businessTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {errors.businessType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.businessType}
                      </p>
                    )}
                  </div>

                  {/* Nature of Business */}
                  <div className="flex-1">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="businessNature"
                    >
                      Nature of Business <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="businessNature"
                        name="businessNature"
                        value={formData.businessNature}
                        onChange={handleChange}
                        onFocus={() => handleFocus("businessNature")}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2 appearance-none border rounded-md pr-10
                          ${
                            errors.businessNature
                              ? "border-red-500"
                              : activeField === "businessNature"
                              ? "border-blue-500 ring-1 ring-blue-500"
                              : "border-gray-300"
                          }`}
                      >
                        <option value="">Select business nature</option>
                        {businessNatureOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {errors.businessNature && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.businessNature}
                      </p>
                    )}
                  </div>
                </div>

                {/* Two fields side by side: TIN and Date of Commencement */}
                <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                  {/* TIN */}
                  <div className="flex-1 mb-4 md:mb-0">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="businessTIN"
                    >
                      TIN of the Business
                    </label>
                    <input
                      type="text"
                      id="businessTIN"
                      name="businessTIN"
                      value={formData.businessTIN}
                      onChange={handleChange}
                      onFocus={() => handleFocus("businessTIN")}
                      onBlur={handleBlur}
                      className={`w-full px-3 py-2 border rounded-md
                        ${
                          errors.businessTIN
                            ? "border-red-500"
                            : activeField === "businessTIN"
                            ? "border-blue-500 ring-1 ring-blue-500"
                            : "border-gray-300"
                        }`}
                      placeholder="Enter TIN (8-16 digits)"
                    />
                    {errors.businessTIN && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.businessTIN}
                      </p>
                    )}
                  </div>

                  {/* Date of Commencement */}
                  <div className="flex-1">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="commencementDate"
                    >
                      Date of Commencement{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="commencementDate"
                      name="commencementDate"
                      value={formData.commencementDate}
                      onChange={handleChange}
                      onFocus={() => handleFocus("commencementDate")}
                      onBlur={handleBlur}
                      className={`w-full px-3 py-2 border rounded-md
                        ${
                          errors.commencementDate
                            ? "border-red-500"
                            : activeField === "commencementDate"
                            ? "border-blue-500 ring-1 ring-blue-500"
                            : "border-gray-300"
                        }`}
                    />
                    {errors.commencementDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.commencementDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Business Description */}
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="businessDescription"
                  >
                    Description of Business
                  </label>
                  <textarea
                    id="businessDescription"
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    onFocus={() => handleFocus("businessDescription")}
                    onBlur={handleBlur}
                    rows="4"
                    className={`w-full px-3 py-2 border rounded-md
                      ${
                        errors.businessDescription
                          ? "border-red-500"
                          : activeField === "businessDescription"
                          ? "border-blue-500 ring-1 ring-blue-500"
                          : "border-gray-300"
                      }`}
                    placeholder="Describe your business (max 750 words)"
                  ></textarea>
                  {errors.businessDescription && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.businessDescription}
                    </p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">
                    {formData.businessDescription
                      ? formData.businessDescription.trim().split(/\s+/).length
                      : 0}
                    /750 words
                  </p>
                </div>

                {/* Next Button */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => navigate("/registration-owners")}
                    className="flex items-center justify-center px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    Next
                    <img src={NextIcon} alt="Next" className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistrationForm;
