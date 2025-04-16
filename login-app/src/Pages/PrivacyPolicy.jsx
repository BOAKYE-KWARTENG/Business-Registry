import React from "react";
import Navbar from "../Components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-8">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-black mb-6 mt-6">
          Privacy Policy
        </h1>

        {/* Content Container */}
        <div className="w-full max-w-3xl lg:w-3/5 md:w-2/3 bg-white p-12 rounded-lg">
          <section className="space-y-6">
            <h2 className="text-2xl font-medium">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed">
              At BK Softwares, we are deeply committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy outlines in detail how we collect, use,
              disclose, and safeguard your data when you interact with our
              services, including our website, applications, and any related
              platforms.
            </p>

            <h2 className="text-2xl font-medium">1. Information We Collect</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, payment details (if applicable), and other
                identifiers you provide when signing up, making inquiries, or
                using our services.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, device
                information, pages visited, and interactions with our services
                (collected via cookies and analytics tools).
              </li>
              <li>
                <strong>Third-Party Data:</strong> Information from
                authentication providers (e.g., Google, Facebook) if you choose
                to log in via social accounts.
              </li>
            </ul>

            <h2 className="text-2xl font-medium">
              2. How We Use Your Information
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Your data helps us:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Deliver Services: Process transactions, authenticate users, and
                provide customer support.
              </li>
              <li>
                Improve User Experience: Analyze trends, optimize performance,
                and personalize content.
              </li>
              <li>
                Communicate: Send updates, security alerts, and promotional
                materials (with consent).
              </li>
              <li>
                Ensure Security: Detect and prevent fraud, unauthorized access,
                or misuse of our services.
              </li>
            </ul>

            <h2 className="text-2xl font-medium">
              3. Data Sharing & Disclosure
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              We do not sell your personal information. Data may be shared only:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                With trusted third-party vendors (payment processors, cloud
                services) strictly for service delivery.
              </li>
              <li>
                When required by law (e.g., court orders, legal compliance).
              </li>
              <li>
                During business transfers (mergers/acquisitions), with
                confidentiality safeguards.
              </li>
            </ul>

            <h2 className="text-2xl font-medium">
              4. Data Protection Measures
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              We implement:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Encryption: SSL/TLS for data transmission.</li>
              <li>
                Access Controls: Restricted internal access to sensitive data.
              </li>
              <li>Regular Audits: Security assessments to mitigate risks.</li>
            </ul>

            <h2 className="text-2xl font-medium">5. Your Rights & Choices</h2>
            <p className="text-sm md:text-base leading-relaxed">You may:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access/Update your data via account settings.</li>
              <li>Opt Out of marketing communications.</li>
              <li>
                Request Deletion of personal information (subject to legal
                retention requirements).
              </li>
              <li>
                Disable Cookies through browser settings (may affect
                functionality).
              </li>
            </ul>

            <h2 className="text-2xl font-medium">6. Policy Updates</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We may revise this policy periodically. Significant changes will
              be notified via email or prominent website notices.
            </p>

            <h2 className="text-2xl font-medium">7. Contact Us</h2>
            <p className="text-sm md:text-base leading-relaxed">
              For questions, requests, or concerns about your privacy, contact:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:privacy@bksoftwares.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@bksoftwares.com
                </a>
              </li>
              <li>Address: Awoshie</li>
            </ul>

            <p className="text-sm md:text-base leading-relaxed">
              By using our services, you acknowledge and consent to the
              practices described in this policy.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          © 2025 BK Softwares. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
