import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainAuthScreen from "./Pages/MainAuthScreen";
import LoginPage from "./Pages/LoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import CreateNewPasswordPage from "./Pages/CreateNewPasswordPage";
import OTPVerificationPage from "./Pages/OTPVerificationPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import HomePage from "./Pages/HomePage"; // Import HomePage
import BusinessRegistrationForm from "./forms/BusinessRegistrationForm";
import BusinessOwnersSection from "./forms/BusinessOwnersSection";
import BusinessAddressSection from "./forms/BusinessAddressSection";
import BusinessOperationDetailsSection from "./forms/BusinessOperationDetailsSection";
import SupportingDocumentsSection from "./forms/SupportingDocumentsSection";
import DeclarationsAndConsentSection from "./forms/DeclarationsAndConsentSection";
import ConfirmationCard from "./forms/ConfirmationCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MainAuthScreen" element={<MainAuthScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<CreateNewPasswordPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route
          path="/business-registration-form"
          element={<BusinessRegistrationForm />}
        />
        <Route
          path="/registration-owners"
          element={<BusinessOwnersSection />}
        />
        <Route
          path="/registration-address"
          element={<BusinessAddressSection />}
        />
        <Route
          path="/registration-operation-details"
          element={<BusinessOperationDetailsSection />}
        />
        <Route
          path="/registration-document-details"
          element={<SupportingDocumentsSection />}
        />
        <Route
          path="/registration-declarations-consent"
          element={<DeclarationsAndConsentSection />}
        />
        <Route path="/confirmation" element={<ConfirmationCard />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
