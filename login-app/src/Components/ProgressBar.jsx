import React from "react";

const ProgressBar = ({ sections, currentSection, completedSections = [] }) => {
  return (
    <div className="w-full bg-gray-50 px-6 py-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-700">Your progress</h3>
        <span className="text-sm text-blue-600 font-medium">
          Step {currentSection} of {sections.length}
        </span>
      </div>

      <div className="relative">
        {/* Progress track */}
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{
              width: `${(currentSection / sections.length) * 100}%`,
            }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500 ease-in-out"
          ></div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-between -mt-2">
          {sections.map((section, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentSection;
            const isCompleted =
              completedSections.includes(stepNumber) ||
              stepNumber < currentSection;

            return (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-full 
                    transition-all duration-300 ease-in-out
                    ${
                      isCompleted
                        ? "bg-blue-500 text-white"
                        : isActive
                        ? "bg-white border-2 border-blue-500 text-blue-500"
                        : "bg-white border border-gray-300 text-gray-400"
                    }`}
                >
                  {isCompleted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="text-xs">{stepNumber}</span>
                  )}
                </div>
                <span
                  className={`text-xs mt-1 hidden md:block ${
                    isActive ? "text-blue-500 font-medium" : "text-gray-500"
                  }`}
                >
                  {section.split(" ")[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
