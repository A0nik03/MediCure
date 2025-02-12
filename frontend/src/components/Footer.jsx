import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20 space-y-8">
        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-10 text-sm">
          {["Home", "Features", "Contact Us", "Privacy Policy"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-300 hover:text-teal-300 transition-transform transform hover:scale-105"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <ul className="flex justify-center md:justify-start gap-6">
          {[
            { label: "Facebook", icon: "fab fa-facebook" },
            { label: "Twitter", icon: "fab fa-twitter" },
            { label: "Instagram", icon: "fab fa-instagram" },
            { label: "LinkedIn", icon: "fab fa-linkedin" },
          ].map(({ label, icon }) => (
            <li key={label}>
              <a
                href="#"
                aria-label={label}
                className="text-gray-300 hover:text-teal-300 transition-transform transform hover:scale-110"
              >
                <i className={`${icon} text-2xl`} aria-hidden="true"></i>
                <span className="sr-only">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Mediator Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
