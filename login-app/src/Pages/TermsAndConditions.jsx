import React from "react";
import Navbar from "../Components/Navbar";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-8">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-black mb-6 mt-6">
          Terms & Conditions
        </h1>

        {/* Content Container */}
        <div className="w-full max-w-3xl lg:w-3/5 md:w-2/3 bg-white p-12 rounded-lg">
          <section className="space-y-6">
            <h2 className="text-2xl font-medium">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Welcome to BK Softwares. By accessing or using our services, you
              agree to comply with and be bound by the following terms and
              conditions. Please read them carefully.
            </p>

            <h2 className="text-2xl font-medium">1. Use of Services</h2>
            <p className="text-sm md:text-base leading-relaxed">
              You agree to use our services only for lawful purposes and in a
              way that does not infringe the rights of others or restrict or
              inhibit their use and enjoyment of the services.
            </p>

            <h2 className="text-2xl font-medium">2. Intellectual Property</h2>
            <p className="text-sm md:text-base leading-relaxed">
              All content, trademarks, and data on this website, including but
              not limited to software, text, graphics, logos, and images, are
              the property of BK Softwares or its licensors and are protected by
              applicable intellectual property laws.
            </p>

            <h2 className="text-2xl font-medium">3. User Accounts</h2>
            <p className="text-sm md:text-base leading-relaxed">
              When you create an account with us, you must provide accurate and
              complete information. You are responsible for maintaining the
              confidentiality of your account and password and for restricting
              access to your account.
            </p>

            <h2 className="text-2xl font-medium">4. Limitation of Liability</h2>
            <p className="text-sm md:text-base leading-relaxed">
              BK Softwares shall not be held liable for any direct, indirect,
              incidental, or consequential damages arising out of the use or
              inability to use our services.
            </p>

            <h2 className="text-2xl font-medium">5. Termination</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We reserve the right to terminate or suspend your access to our
              services immediately, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach the
              terms.
            </p>

            <h2 className="text-2xl font-medium">6. Governing Law</h2>
            <p className="text-sm md:text-base leading-relaxed">
              These terms shall be governed and construed in accordance with the
              laws of [Your Country/State], without regard to its conflict of
              law provisions.
            </p>

            <h2 className="text-2xl font-medium">7. Changes to Terms</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We reserve the right to modify or replace these terms at any time.
              If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect.
            </p>

            <h2 className="text-2xl font-medium">8. Contact Us</h2>
            <p className="text-sm md:text-base leading-relaxed">
              If you have any questions about these terms, please contact us at:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@bksoftwares.com"
                  className="text-blue-600 hover:underline"
                >
                  support@bksoftwares.com
                </a>
              </li>
              <li>Address: Awoshie</li>
            </ul>
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

export default TermsAndConditions;
