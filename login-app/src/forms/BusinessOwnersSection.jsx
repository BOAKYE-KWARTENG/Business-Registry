import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Import Navbar
import ProgressBar from "../Components/ProgressBar"; // Import the ProgressBar component
import PreviousIcon from "../assets/previous-arrow.svg";
import NextIcon from "../assets/next-arrow.svg";
import Background from "../assets/Background.jpg"; // Import the background image

const BusinessOwnersSection = () => {
  const navigate = useNavigate(); // Hook to navigate between pages
  const [owners, setOwners] = useState([
    {
      fullName: "",
      dateOfBirth: "",
      nationality: "",
      ghanaCardNumber: "GH-",
      tin: "",
      position: "",
      contactNumber: "233 ",
      email: "",
      shareholding: "",
    },
  ]);

  const handleOwnerChange = (index, field, value) => {
    const updatedOwners = [...owners];
    updatedOwners[index][field] = value;
    setOwners(updatedOwners);
  };

  const addOwner = () => {
    setOwners([
      ...owners,
      {
        fullName: "",
        dateOfBirth: "",
        nationality: "",
        ghanaCardNumber: "GH-",
        tin: "",
        position: "",
        contactNumber: "233 ",
        email: "",
        shareholding: "",
      },
    ]);
  };

  const removeOwner = (index) => {
    const updatedOwners = owners.filter((_, i) => i !== index);
    setOwners(updatedOwners);
  };

  // Progress bar sections
  const sections = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];
  const currentSection = 2; // Section 2: Business Owner(s)

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
            Business Owner(s)
          </h2>

          {/* Use ProgressBar Component */}
          <ProgressBar
            sections={sections}
            currentSection={currentSection}
            completedSections={[1]} // Example: Completed sections
          />

          <form>
            {owners.map((owner, index) => (
              <div key={index} className="mb-6 border-b pb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Owner {index + 1}
                </h3>

                {/* Full Name */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`fullName-${index}`}
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`fullName-${index}`}
                    value={owner.fullName}
                    onChange={(e) =>
                      handleOwnerChange(index, "fullName", e.target.value)
                    }
                    className={`w-full px-3 py-2 border rounded-md ${
                      owner.fullName.length > 3
                        ? "border-gray-300"
                        : "border-red-500"
                    }`}
                    placeholder="Enter full name"
                  />
                  {owner.fullName.length <= 3 && (
                    <p className="text-red-500 text-xs mt-1">
                      Full name must be more than 3 characters.
                    </p>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`dateOfBirth-${index}`}
                  >
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id={`dateOfBirth-${index}`}
                    value={owner.dateOfBirth}
                    onChange={(e) =>
                      handleOwnerChange(index, "dateOfBirth", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md border-gray-300"
                  />
                </div>

                {/* Nationality */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`nationality-${index}`}
                  >
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <select
                    id={`nationality-${index}`}
                    value={owner.nationality}
                    onChange={(e) =>
                      handleOwnerChange(index, "nationality", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md border-gray-300"
                  >
                    <option value="">Select nationality</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="USA">USA</option>
                    {/* Add more countries */}
                  </select>
                </div>

                {/* Ghana Card Number */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`ghanaCardNumber-${index}`}
                  >
                    Ghana Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`ghanaCardNumber-${index}`}
                    value={owner.ghanaCardNumber}
                    onChange={(e) =>
                      handleOwnerChange(
                        index,
                        "ghanaCardNumber",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border rounded-md border-gray-300"
                    placeholder="GH-00000000-0"
                  />
                </div>

                {/* TIN */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`tin-${index}`}
                  >
                    Tax Identification Number (TIN)
                  </label>
                  <input
                    type="text"
                    id={`tin-${index}`}
                    value={owner.tin}
                    onChange={(e) =>
                      handleOwnerChange(index, "tin", e.target.value)
                    }
                    className={`w-full px-3 py-2 border rounded-md ${
                      owner.tin.length >= 8 && owner.tin.length <= 16
                        ? "border-gray-300"
                        : "border-red-500"
                    }`}
                    placeholder="Enter TIN"
                  />
                  {(owner.tin.length < 8 || owner.tin.length > 16) && (
                    <p className="text-red-500 text-xs mt-1">
                      TIN must be between 8 and 16 digits.
                    </p>
                  )}
                </div>

                {/* Position */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`position-${index}`}
                  >
                    Position
                  </label>
                  <select
                    id={`position-${index}`}
                    value={owner.position}
                    onChange={(e) =>
                      handleOwnerChange(index, "position", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md border-gray-300"
                  >
                    <option value="">Select position</option>
                    <option value="Director">Director</option>
                    <option value="Shareholder">Shareholder</option>
                    <option value="Partner">Partner</option>
                  </select>
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`contactNumber-${index}`}
                  >
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`contactNumber-${index}`}
                    value={owner.contactNumber}
                    onChange={(e) =>
                      handleOwnerChange(index, "contactNumber", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md border-gray-300"
                    placeholder="233 203236379"
                  />
                </div>

                {/* Email Address */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`email-${index}`}
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id={`email-${index}`}
                    value={owner.email}
                    onChange={(e) =>
                      handleOwnerChange(index, "email", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md border-gray-300"
                    placeholder="Enter email address"
                  />
                </div>

                {/* Shareholding */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`shareholding-${index}`}
                  >
                    Percentage of Shareholding
                  </label>
                  <input
                    type="number"
                    id={`shareholding-${index}`}
                    value={owner.shareholding}
                    onChange={(e) =>
                      handleOwnerChange(index, "shareholding", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md border-gray-300"
                    placeholder="e.g., 0.5"
                  />
                  {isNaN(owner.shareholding) && (
                    <p className="text-red-500 text-xs mt-1">
                      Please provide proportion of shareholding e.g., 0.02, 0.5
                    </p>
                  )}
                </div>

                {/* Remove Owner Button */}
                {owners.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeOwner(index)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove Owner
                  </button>
                )}
              </div>
            ))}

            {/* Add Another Owner Button */}
            <div className="flex justify-center mb-6">
              <button
                type="button"
                onClick={addOwner}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Add Another Owner
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/business-registration-form")} // Navigate to the previous section
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
                type="submit"
                onClick={() => navigate("/registration-address")} // Navigate to the next section
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

export default BusinessOwnersSection;
