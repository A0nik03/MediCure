// NavBar.jsx
import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navTabs = [
    { label: "Home", path: "/", id: "nav-home" },
    { label: "Services", path: "/services", id: "nav-services" },
    { label: "About", path: "/about", id: "nav-about" },
    { label: "Contact", path: "/contact", id: "nav-contact" },
  ];

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const currentTab = navTabs.findIndex((tab) => tab.path === location.pathname);
    setActiveTab(currentTab !== -1 ? currentTab : 0);
  }, [location.pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full h-[8vh] text-gray-800 z-10"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-full px-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="Home">
              <img
                src="logo.png"
                className="h-28 sm:h-40 w-auto object-contain"
                alt="Company Logo"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-center gap-6">
            {navTabs.map((tab, index) => (
              <Link
                key={tab.id}
                to={tab.path}
                onClick={() => setActiveTab(index)}
                className={`relative px-3 py-2 text-lg font-medium transition-all duration-300 hover:text-teal-300 ${
                  activeTab === index ? "text-teal-500" : "text-gray-600"
                }`}
                aria-current={activeTab === index ? "page" : undefined}
              >
                {tab.label}
                {activeTab === index && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-teal-500" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden p-2"
            onClick={toggleSidebar}
            aria-label="Toggle navigation menu"
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? (
              <HiX className="text-teal-500 text-2xl" />
            ) : (
              <HiOutlineMenu className="text-teal-500 text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navTabs={navTabs}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 sm:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default NavBar;