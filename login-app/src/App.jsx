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
import HomePage from "./Pages/HomePage";
import BusinessRegistrationForm from "./forms/BusinessRegistrationForm";

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
      </Routes>
    </Router>
  );
}

export default App;
