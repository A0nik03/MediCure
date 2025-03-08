import React from "react";
import { BiSolidHelpCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose, activeTab, setActiveTab, navTabs }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-full bg-[#fafafa] text-gray-800 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 sm:hidden`}
      aria-hidden={!isOpen}
    >
      <div className="relative flex flex-col h-full p-4">
        {/* Close Icon */}
        <button
          aria-label="Close Sidebar"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          <AiOutlineClose className="text-2xl" />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0 mb-6">
          <Link to="/" onClick={onClose} aria-label="Home">
            <img
              src="logo.png"
              className="absolute h-28 top-0 w-auto object-contain"
              alt="Company Logo"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col items-center flex-grow gap-6 mt-20">
          {navTabs.map((tab, index) => (
            <Link
              key={tab.id}
              to={tab.path}
              onClick={() => {
                setActiveTab(index);
                onClose();
              }}
              className={`text-xl border-b-2 font-medium transition-colors duration-300  text-center pb-2 ${
                activeTab === index 
                  ? "text-teal-500 border-teal-500" 
                  : "text-gray-600 border-transparent"
              } hover:text-teal-300 hover:border-teal-300`}
              aria-current={activeTab === index ? "page" : undefined}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Help Icon */}
        <div className="mt-auto pb-4 flex justify-center">
          <button aria-label="Help" onClick={onClose}>
            <BiSolidHelpCircle className="text-teal-500 text-2xl hover:text-teal-300 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
