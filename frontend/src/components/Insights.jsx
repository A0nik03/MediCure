import React from "react";

const Insights = () => {
  const data = [
    { value: "800k+", label: "Lives Assisted" },
    { value: "500+", label: "Cities in India" },
    { value: "15,000", label: "Fleet Size" },
    { value: "200k+", label: "COVID Patients Assisted" },
    { value: "8m+", label: "Subscribers" },
  ];

  return (
    <div className="w-full flex justify-center items-center mt-14 mb-14 px-4">
      <div className="relative max-w-6xl w-full border-2 rounded-2xl flex flex-col justify-center items-center p-12 bg-[#fafafa]">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full text-center">
          {data.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-2xl ${
                index === 0 ? "bg-teal-100" : "bg-gray-50"
              } flex flex-col items-center justify-center`}
            >
              <span
                className={`text-2xl md:text-3xl font-bold ${
                  index === 0 ? "text-teal-600" : "text-black"
                }`}
              >
                {item.value}
              </span>
              <span
                className={`text-sm md:text-md mt-2 ${
                  index === 0 ? "text-teal-600" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Headings */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#fafafa] rounded-2xl">
          <h1 className="text-lg md:text-xl font-bold text-center">
            MediCure Insights
          </h1>
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#fafafa] rounded-2xl">
          <h1 className="text-sm md:text-md font-normal text-gray-500 text-center">
            Response Time:{" "}
            <span className="text-teal-500 font-bold">
              Less than 15 mins
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Insights;
