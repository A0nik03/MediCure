import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  MdOutlineLocationOn,
  MdOutlineMedicalServices,
  MdOutlinePriorityHigh,
  MdOutlineSearch,
  MdOutlineUploadFile,
  MdOutlineVerified,
} from "react-icons/md";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      label: "Easy Medicine Search",
      path: "/medication",
      icon: <MdOutlineSearch size={35} className="text-teal-400" />,
      description:
        "Search for critical medicines and injections by name, category, or type.",
    },
    {
      label: "Verified Suppliers & Hospitals",
      path: "/verified-suppliers",
      icon: <MdOutlineVerified size={35} className="text-teal-400" />,
      description:
        "Ensures authenticity with strict verification processes for suppliers and hospitals.",
    },
    {
      label: "Secure Prescription Upload",
      path: "/upload-prescription",
      icon: <MdOutlineUploadFile size={35} className="text-teal-400" />,
      description:
        "Upload prescriptions for validation to ensure proper usage and compliance.",
    },
    {
      label: "Priority-based Emergency Handling",
      path: "/emergency-requests",
      icon: <MdOutlinePriorityHigh size={35} className="text-teal-400" />,
      description:
        "Flag urgent requirements to notify verified suppliers immediately.",
    },
    {
      label: "Rare Injection Assistance",
      path: "/rare-injections",
      icon: <MdOutlineMedicalServices size={35} className="text-teal-400" />,
      description:
        "Dedicated section for rare injections with hospital collaboration and approval.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Fjalla One']">
      <NavBar />
      {/* Search Bar */}
      <div className="max-w-6xl mx-auto mb-6 mt-20">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm shadow-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto overflow-hidden mb-20">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-black mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 mb-6">
            At Medicure, we specialize in providing information about rare
            medicines that are difficult to find. Our goal is to bridge the gap
            between those in need and the resources they require.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg cursor-pointer hover:bg-teal-50 shadow shadow-teal-50 border border-teal-100 transition-all duration-300"
                onClick={() => navigate(`${service.path}`)}
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-medium text-gray-700 w-3/4">{service.label}</h1>
                  {service.icon}
                </div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
