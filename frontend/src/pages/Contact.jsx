import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
  <div className="min-h-screen bg-[#f9f9f9] font-[Work Sans] ">
    <NavBar />
    <div className="w-[80%] mx-auto mt-20 flex flex-col items-center mb-20">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-teal-600 mb-6 text-center">
        Get in Touch
      </h1>
      <p className="text-gray-600 text-center max-w-2xl">
        We'd love to hear from you! Whether you have a question about our
        services, need assistance, or just want to share your thoughts, feel
        free to reach out.
      </p>

      {/* Contact Form and Details Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-10 w-full max-w-6xl">
        <div className="flex-1 bg-white p-8 shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-2">
              Contact Details
            </h2>
            <p className="text-gray-600">
              Feel free to contact us through the following means:
            </p>
          </div>
          <div className="space-y-3">
            <p className="flex items-center gap-4 text-gray-600">
              <span className="text-teal-600 font-semibold">Email:</span>
              contact@medicure.com
            </p>
            <p className="flex items-center gap-4 text-gray-600">
              <span className="text-teal-600 font-semibold">Phone:</span>
              +1 (123) 456-7890
            </p>
            <p className="flex items-center gap-4 text-gray-600">
              <span className="text-teal-600 font-semibold">Address:</span>
              123 Medicure Street, Wellness City, HC 45678
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder</p>
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </div>
  );
};

export default Contact;
