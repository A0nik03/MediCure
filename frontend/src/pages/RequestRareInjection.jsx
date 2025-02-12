import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestRareInjection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    urgency: "Low",
    location: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/rareInjection/add-rare-injection",formData);

      if (response.status === 201) {
        toast.success("Request Submitted Successfully!");
        navigate("/rare-injections");
      }
    } catch (error) {
      toast.error("Error submitting request. Please try again.");
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fafafa] font-['Fjalla One']">
      <NavBar />

      <div className="min-w-6xl mx-auto mb-20 mt-20">
        <div className="bg-white p-8 rounded-lg shadow shadow-teal-50 border border-teal-100">
          <h1 className="text-2xl font-semibold text-black mb-6">
            Request a Rare Injection
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Injection Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter the name of the injection"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter the required quantity"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Urgency Level
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Contact Information
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact details"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-6 py-2 bg-teal-400 text-white rounded-full hover:bg-teal-500 transition-all duration-300"
              >
                Submit Request
              </button>
              <button
                type="button"
                onClick={() => navigate("/rare-injection-assistance")}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RequestRareInjection;
