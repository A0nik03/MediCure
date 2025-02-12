import React from "react";
import { IoCall } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-full w-full bg-[#e5f6f7] flex flex-col md:flex-row items-center pt-20 md:pt-24 px-5">
      {/* Text Section */}
      <div className="md:w-1/2 w-full p-5 md:p-20 flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl md:text-5xl font-bold text-black text-center">
          24/7 Emergency Medication Care with Medicure
        </h1>
        <p className="text-xl md:text-3xl font-semibold text-teal-500 text-center">
          For Emergency Medical Services
        </p>
        <p className="text-sm md:text-xl font-normal text-black text-center w-full md:w-[80%] mb-5 md:mb-10">
          Help / Rescues the Patient in case of the Emergency situation by doing
          just a click. Mediboy comes right in front of the door for help.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full md:w-auto justify-center">
          <div
            className="w-full md:w-33 py-3 hover:tracking-widest text-center hover:bg-teal-600 bg-teal-500 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
          >
            Subscribe
          </div>
          <div className="w-full md:w-48 py-3 flex text-center hover:tracking-widest bg-white border-2 border-teal-400 hover:border-blue-400 hover:text-blue-400 text-teal-400 font-bold rounded-lg transition-all duration-300 cursor-pointer justify-center gap-1">
            <IoCall size={22} />
            <p>+919826389201</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0">
        <img
          src="./header.png"
          className="w-[90%] md:w-[80%] h-auto object-cover rounded-2xl"
          alt="Header"
        />
      </div>
    </div>
  );
};

export default Header;
