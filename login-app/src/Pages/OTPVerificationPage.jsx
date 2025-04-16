import React, { useState } from "react";
import Background from "../assets/Background.jpg";
import OTPVerificationImage from "../assets/OTP-verification-image.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const OTPVerificationPage = () => {
  // Email would typically come from route state or global state
  const [email] = useState("kwarteng...@gmail.com");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      // Only allow numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input when a digit is entered
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some((digit) => !digit)) {
      setError("Please enter the complete 6-digit code");
      return;
    }
    setError("");
    // Handle OTP verification
    console.log("Verifying OTP:", otp.join(""));
  };

  const handleResend = () => {
    setIsResending(true);
    // Simulate resend delay
    setTimeout(() => {
      console.log("Resending code to:", email);
      setIsResending(false);
    }, 1500);
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
          {/* OTP Verification Image */}
          <div className="flex justify-center mb-8">
            <img
              src={OTPVerificationImage}
              alt="OTP Verification"
              className="h-14 w-auto"
            />
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold mb-2">OTP Verification</h1>
          <p className="text-gray-600 mb-10">
            Enter the 6-digit code sent to {email}
          </p>

          {/* OTP Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Input Fields */}
            <div className="flex justify-between space-x-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onFocus={(e) => e.target.select()}
                  className="w-12 h-12 text-center border border-gray-300 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              ))}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 
                        focus:ring-blue-500 focus:ring-offset-2 transition-colors cursor-pointer"
            >
              Verify
            </button>

            {/* Resend Code Link */}
            <div className="text-center text-sm">
              Didn't receive code?{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={isResending}
                className={`text-blue-600 hover:underline focus:outline-none cursor-pointer ${
                  isResending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isResending ? "Sending..." : "Resend"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OTPVerificationPage;
