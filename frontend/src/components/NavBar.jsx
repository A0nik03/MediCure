import React, { useEffect, useState } from "react";
import { BiSolidHelpCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [active, setActive] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const activeTab = tabs.findIndex((tab) => tab.path === location.pathname);
    if (activeTab !== -1) {
      setActive(activeTab);
    }
  }, [location.pathname, tabs]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed h-[8vh] w-full top-0 flex items-center p-2 bg-base-200 text-white z-50">
      {/* Logo */}
      <div className="flex items-center w-1/4 sm:w-1/6">
        <img
          src="logo.png"
          className="h-full max-h-32 w-auto object-cover"
          alt="Company Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex w-4/6 justify-center items-center gap-4">
        {tabs.map((tab, index) => (
          <div key={tab.label} className="flex h-full flex-col items-center gap-2">
            <Link
              to={tab.path}
              onClick={() => setActive(index)}
              className={`px-4 py-1 text-lg font-semibold flex flex-col hover:scale-[1.07] items-center gap-1 ${
                active === index
                  ? "text-teal-500 font-bold"
                  : "text-gray-400"
              } cursor-pointer transition-all duration-300`}
            >
              {tab.label}
              {active === index && (
                <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              )}
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="sm:hidden flex justify-end items-center w-3/4">
        {isMobileMenuOpen ? (
          <HiX
            className="text-teal-500 cursor-pointer text-3xl"
            onClick={toggleMobileMenu}
          />
        ) : (
          <HiOutlineMenu
            className="text-teal-500 cursor-pointer text-3xl"
            onClick={toggleMobileMenu}
          />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[8vh] left-0 w-full bg-base-200 flex flex-col items-center gap-2 py-4 shadow-md sm:hidden">
          {tabs.map((tab, index) => (
            <Link
              key={tab.label}
              to={tab.path}
              onClick={() => {
                setActive(index);
                setMobileMenuOpen(false);
              }}
              className={`text-lg font-semibold ${
                active === index
                  ? "text-teal-500 font-bold"
                  : "text-gray-400"
              } cursor-pointer transition-all duration-300`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      )}

      {/* Extras */}
      <div className="hidden sm:flex w-1/6 justify-end items-center">
        <BiSolidHelpCircle
          className="text-teal-500 cursor-pointer hover:scale-[1.1] transition-transform duration-300 text-3xl"
          aria-label="Help Icon"
        />
      </div>
    </div>
  );
};

export default NavBar;
