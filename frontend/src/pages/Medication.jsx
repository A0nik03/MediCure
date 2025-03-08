import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pagination from "@mui/material/Pagination";
import axios from "../utils/axios";

const Medication = () => {
  const [medicines,SetMedicines] = useState([]);

  const GetMedicines = async () => {
    try {
      const response = await axios.get("medicine/get-medicines");
      if(response.status === 200){
        console.log(response.data);
        SetMedicines(response.data.medicines);
      }
    } catch (error) {
      console.error(`Error Fetching Medicines: ${error.message}`);
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 4;
  const totalPages = Math.ceil(medicines.length / itemsPerPage);

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedMedicines = filteredMedicines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleGetDirections = (location) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`,
      "_blank"
    );
  };

  useEffect(() => {
    GetMedicines();
  },[]);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between font-['Fjalla One']">
      <NavBar />
      <div className="">
        {/* Search Bar */}
        <div className="max-w-6xl mx-auto mb-6 mt-20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for rare medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

        {/* Most Searched Medicines */}
        <div className="max-w-6xl h-[85vh] mx-auto overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-black mb-6">
              Most Searched Medicines
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {paginatedMedicines.map((medicine, index) => (
                <div
                  key={index}
                  className="bg-white p-4 h-52 rounded-lg border border-teal-100 shadow shadow-teal-50 flex flex-col items-center"
                >
                  <div className="w-full flex">
                    <div className="w-1/2 h-full flex items-center">
                      <img
                        src={medicine.image}
                        alt={medicine.name}
                        className="w-44 h-44 rounded-sm border border-gray-300"
                      />
                    </div>
                    <div className="w-1/2 flex flex-col items-start">
                      <h2 className="text-lg font-medium text-gray-700">
                        {medicine.name}
                      </h2>
                      <p className="text-sm text-gray-600 mb-2">
                        {medicine.details}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        Location: {medicine.location}
                      </p>
                      <button
                        onClick={() => handleGetDirections(medicine.location)}
                        className="px-4 py-2 w-full bg-white border border-teal-100 rounded-full shadow-sm shadow-teal-50 flex items-center justify-center text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 cursor-pointer"
                      >
                        Directions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
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
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
            {/* Pagination */}
            <div className="mt-6 mb-6 flex justify-center">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                color="standard"
              />
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default Medication;
