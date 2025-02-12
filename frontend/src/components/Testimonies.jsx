import React from "react";

const Testimonies = () => {
  return (
    <div className="min-h-[70vh] w-screen bg-gradient-to-b from-teal-100 to-[#fafafa] flex justify-center items-center px-4 sm:px-8">
      <div className="h-[80%] w-full max-w-5xl bg-[#2e2d40] flex flex-col sm:flex-row overflow-hidden rounded-2xl shadow-lg">
        {/* Image Section */}
        <div className="sm:w-1/2 w-full h-64 sm:h-full">
          <img
            src="https://images.unsplash.com/photo-1576766125535-b04e15fd0273?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover"
            alt="Testimonial Background"
          />
        </div>

      
        <div className="relative sm:w-1/2 w-full h-full bg-[#2e2d40] text-white flex flex-col p-6 sm:p-12">
    
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-6 mt-4">
              Happy Customers
            </h1>
            <p className="text-sm sm:text-md font-normal leading-relaxed">
              Using this product has been life-changing. The intuitive interface
              and seamless functionality have streamlined my workflow, saving me
              countless hours every week.
            </p>
          </div>

  
          <div>
            <p className="text-xs sm:text-sm font-normal italic tracking-wider mt-5">
              - Anshika, Delhi
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 mt-4">
            <div className="h-1 w-8 rounded-full bg-white"></div>
            <div className="h-1 w-8 rounded-full bg-gray-500"></div>
            <div className="h-1 w-8 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
