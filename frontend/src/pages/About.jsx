import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
    <NavBar/>
      {/* Main Content */}
      <main className="flex flex-col items-center py-12 px-6 mt-16 text-gray-700">
        {/* Header Section */}
        <section className="text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold text-teal-600">
            About Medicure
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            At Medicure, we redefine healthcare by merging technology and care
            to create a better world. Our mission is simple: make healthcare
            accessible, efficient, and compassionate for everyone.
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className="flex flex-col lg:flex-row mt-12 gap-8 w-full max-w-6xl">
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-teal-700">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We aim to empower individuals and communities with advanced
              healthcare solutions, prioritizing their well-being and
              accessibility.
            </p>
          </div>
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-teal-700">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To lead the global transformation of healthcare with technology,
              trust, and empathy at the forefront of everything we do.
            </p>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="mt-16 w-full max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              { title: "24/7 Support", text: "Always here to assist you." },
              {
                title: "Cutting-Edge Tech",
                text: "Using AI, IoT, and 5G to revolutionize care.",
              },
              {
                title: "Personalized Care",
                text: "Your comfort and concerns are our priority.",
              },
              { title: "Global Reach", text: "Expanding care across borders." },
              {
                title: "Skilled Professionals",
                text: "Dedicated experts driven by a shared vision.",
              },
              {
                title: "Eco-Friendly Solutions",
                text: "Caring for both you and the planet.",
              },
            ].map((highlight, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-medium text-teal-600">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default About;
