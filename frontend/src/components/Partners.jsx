import React from "react";
import {
  FaBuilding,
  FaCogs,
  FaHooli,
  FaChartLine,
  FaImdb,
  FaMicrosoft,
  FaMedkit,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import {
  SiGodaddy,
  SiOracle,
  SiTata,
  SiInfosys,
  SiCisco,
  SiNokia,
} from "react-icons/si";
import { GiHeartBottle } from "react-icons/gi";

const companies = [
  { name: "DLF", icon: <FaBuilding className="text-6xl sm:text-8xl text-blue-600" /> },
  { name: "Cisco", icon: <SiCisco className="text-6xl sm:text-8xl text-green-600" /> },
  { name: "Nokia", icon: <SiNokia className="text-6xl sm:text-8xl text-blue-400" /> },
  { name: "Gartner", icon: <FaChartLine className="text-6xl sm:text-8xl text-purple-600" /> },
  { name: "HCL", icon: <FaHooli className="text-6xl sm:text-8xl text-red-500" /> },
  { name: "Godrej", icon: <SiGodaddy className="text-6xl sm:text-8xl text-green-500" /> },
  { name: "Infosys", icon: <SiInfosys className="text-6xl sm:text-8xl text-blue-700" /> },
  { name: "TCS", icon: <SiTata className="text-6xl sm:text-8xl text-orange-500" /> },
  { name: "Wipro", icon: <FaCogs className="text-6xl sm:text-8xl text-gray-500" /> },
  { name: "IBM", icon: <FaImdb className="text-6xl sm:text-8xl text-black" /> },
  { name: "Microsoft", icon: <FaMicrosoft className="text-6xl sm:text-8xl text-blue-600" /> },
  { name: "Oracle", icon: <SiOracle className="text-6xl sm:text-8xl text-red-600" /> },
];

const OurPartners = () => {
  return (
    <div className="relative py-12 sm:py-20 bg-[#fafafa] flex flex-col items-center">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-8 sm:mb-12">
        Our Partners
      </h2>
      <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            {company.icon}
          </div>
        ))}
      </div>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-5 mt-16">
        <div>
          <p className="text-[1rem] tracking-wider font-semibold text-center mb-3">
            Book Medicines
          </p>
          <div
            className="w-48 sm:w-52 py-3 hover:tracking-widest text-center hover:bg-teal-600 bg-teal-500 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
          >
            Subscribe
          </div>
        </div>
        <div>
          <p className="text-[1rem] tracking-wider font-semibold text-center mb-3">
            Call Our Assistance
          </p>
          <div className="w-48 sm:w-52 py-3 flex text-center hover:tracking-widest bg-white border-2 border-teal-500 hover:border-blue-400 hover:text-blue-400 text-teal-400 font-bold rounded-lg transition-all duration-300 cursor-pointer justify-center gap-1">
            <IoCall size={22} />
            <p>+919826389201</p>
          </div>
        </div>
      </div>
      <FaMedkit
        size={60}
        className="absolute text-teal-300 opacity-40 rotate-45 bottom-6 left-10 sm:bottom-10 sm:left-52"
      />
      <GiHeartBottle
        size={60}
        className="absolute text-red-300 opacity-40 rotate-45 bottom-6 right-10 sm:bottom-10 sm:right-52"
      />
    </div>
  );
};

export default OurPartners;
