import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Import Navbar
import ProgressBar from "../Components/ProgressBar"; // Import the ProgressBar component
import PreviousIcon from "../assets/previous-arrow.svg";
import NextIcon from "../assets/next-arrow.svg";
import Background from "../assets/Background.jpg"; // Import the background image

const BusinessAddressSection = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const [formData, setFormData] = useState({
    businessAddress: "",
    digitalAddress: "",
    region: "",
    district: "",
    postalAddress: "",
    phoneNumber: "233 ",
    email: "",
    website: "",
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessAddress) {
      newErrors.businessAddress = "Business Address is required.";
    }

    if (
      !formData.digitalAddress ||
      formData.digitalAddress.length < 8 ||
      formData.digitalAddress.length > 15
    ) {
      newErrors.digitalAddress =
        "Digital Address must be between 8 and 15 characters.";
    }

    if (!formData.region) {
      newErrors.region = "Region is required.";
    }

    if (!formData.district) {
      newErrors.district = "District is required.";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid email address is required.";
    }

    if (!formData.phoneNumber || !/^233\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Phone number must follow the format 233203236379. It should be 11 digits long.";
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

  const regions = [
    "Greater Accra",
    "Northern",
    "Savannah",
    "Upper West",
    "Ashanti",
    "Volta",
    "Bono East",
    "Central",
    "Oti",
    "Eastern",
    "Upper East",
    "Ahafo",
    "Brong Ahafo",
    "North East",
    "Bono",
    "Western North",
  ];

  const districts = {
    "Greater Accra": ["GAD 1", "GAD 2", "GAD 3"],
    Northern: ["ND 1", "ND 2", "ND 3"],
    Savannah: ["SD 1", "SD 2", "SD 3"],
    "Upper West": ["UWD 1", "UWD 2", "UWD 3"],
    Ashanti: ["UWD 1", "UWD 2", "UWD 3"],
    Volta: ["UWD 1", "UWD 2", "UWD 3"],
    "Bono East": ["UWD 1", "UWD 2", "UWD 3"],
    Central: ["UWD 1", "UWD 2", "UWD 3"],
    Oti: ["UWD 1", "UWD 2", "UWD 3"],
    Eastern: ["UWD 1", "UWD 2", "UWD 3"],
    "Upper East": ["UWD 1", "UWD 2", "UWD 3"],
    Ahafo: ["UWD 1", "UWD 2", "UWD 3"],
    "Brong Ahafo": ["UWD 1", "UWD 2", "UWD 3"],
    "North East": ["UWD 1", "UWD 2", "UWD 3"],
    Bono: ["UWD 1", "UWD 2", "UWD 3"],
    "Western North": ["UWD 1", "UWD 2", "UWD 3"],
  };

  // Progress bar sections
  const sections = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];
  const currentSection = 3; // Section 3: Business Address

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
            Business Address
          </h2>

          {/* Use ProgressBar Component */}
          <ProgressBar
            sections={sections}
            currentSection={currentSection}
            completedSections={[1, 2]} // Example: Completed sections
          />

          <form onSubmit={handleSubmit}>
            {/* Business Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="businessAddress"
              >
                Business Address (Physical Location){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="businessAddress"
                value={formData.businessAddress}
                onChange={(e) =>
                  handleChange("businessAddress", e.target.value)
                }
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.businessAddress ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter business address"
              />
              {errors.businessAddress && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.businessAddress}
                </p>
              )}
            </div>

            {/* Digital Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="digitalAddress"
              >
                Digital Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="digitalAddress"
                value={formData.digitalAddress}
                onChange={(e) => handleChange("digitalAddress", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.digitalAddress ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter digital address"
              />
              {errors.digitalAddress && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.digitalAddress}
                </p>
              )}
            </div>

            {/* Region */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="region"
              >
                Region <span className="text-red-500">*</span>
              </label>
              <select
                id="region"
                value={formData.region}
                onChange={(e) => handleChange("region", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.region ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select region</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {errors.region && (
                <p className="text-red-500 text-xs mt-1">{errors.region}</p>
              )}
            </div>

            {/* District */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="district"
              >
                District <span className="text-red-500">*</span>
              </label>
              <select
                id="district"
                value={formData.district}
                onChange={(e) => handleChange("district", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.district ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select district</option>
                {formData.region && districts[formData.region]
                  ? districts[formData.region].map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))
                  : null}
              </select>
              {errors.district && (
                <p className="text-red-500 text-xs mt-1">{errors.district}</p>
              )}
            </div>

            {/* Postal Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="postalAddress"
              >
                Postal Address
              </label>
              <input
                type="text"
                id="postalAddress"
                value={formData.postalAddress}
                onChange={(e) => handleChange("postalAddress", e.target.value)}
                className="w-full px-3 py-2 border rounded-md border-gray-300"
                placeholder="Enter postal address"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="233203236379"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Website */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="website"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                className="w-full px-3 py-2 border rounded-md border-gray-300"
                placeholder="https://example.com"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/registration-owners")} // Navigate to the previous section
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
                onClick={() => navigate("/registration-operation-details")}
                // onClick={() => {
                //   if (validateForm()) {
                //     navigate("/registration-operation-details"); // Navigate to the next section
                //   }
                // }}
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

export default BusinessAddressSection;
