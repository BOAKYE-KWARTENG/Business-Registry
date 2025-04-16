import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <div className="py-3 text-xs text-white font-medium">
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-1 md:gap-2">
        <span>© 2025 BK Softwares. All Rights Reserved.</span>
        <span className="hidden md:inline">|</span>
        <Link to="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <span className="hidden md:inline">|</span>
        <Link to="/terms-conditions" className="hover:underline">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
