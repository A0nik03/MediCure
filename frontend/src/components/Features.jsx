import React from "react";
import {
  MdOutlineSearch,
  MdOutlineVerified,
  MdOutlineUploadFile,
  MdOutlineLocationOn,
  MdOutlinePriorityHigh,
  MdOutlineMedicalServices,
} from "react-icons/md";

const Features = () => {
  const features = [
    {
      label: "Easy Medicine Search",
      path: "/search",
      icon: <MdOutlineSearch size={50} className="text-teal-400" />,
      description:
        "Search for critical medicines and injections by name, category, or type.",
    },
    {
      label: "Verified Suppliers & Hospitals",
      path: "/verified-suppliers",
      icon: <MdOutlineVerified size={50} className="text-teal-400" />,
      description:
        "Ensures authenticity with strict verification processes for suppliers and hospitals.",
    },
    {
      label: "Secure Prescription Upload",
      path: "/upload-prescription",
      icon: <MdOutlineUploadFile size={50} className="text-teal-400" />,
      description:
        "Upload prescriptions for validation to ensure proper usage and compliance.",
    },
    {
      label: "Live Order Tracking",
      path: "/order-tracking",
      icon: <MdOutlineLocationOn size={50} className="text-teal-400" />,
      description:
        "Monitor the status of your orders in real-time from request to delivery.",
    },
    {
      label: "Priority-based Emergency Handling",
      path: "/emergency-requests",
      icon: <MdOutlinePriorityHigh size={50} className="text-teal-400" />,
      description:
        "Flag urgent requirements to notify verified suppliers immediately.",
    },
    {
      label: "Rare Injection Assistance",
      path: "/rare-injections",
      icon: <MdOutlineMedicalServices size={50} className="text-teal-400" />,
      description:
        "Dedicated section for rare injections with hospital collaboration and approval.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-teal-100 w-full py-10 px-4">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
          {/* Section Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              App Features
            </h1>
            <p className="text-gray-500 mt-2 text-base md:text-lg">
              Book medicines in emergency or in advance. Experience our
              seamless platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md shadow-teal-200 p-6 flex flex-col items-start gap-4"
              >
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <h1 className="text-xl md:text-2xl font-bold">
                    {feature.label}
                  </h1>
                </div>
                <p className="text-gray-500 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
