import React from "react";
import { BsArrowRight } from "react-icons/bs";

const newsData = [
  {
    date: "NOVEMBER 12, 2024",
    title: "Medulance on 5G for healthcare and use cases",
    description:
      "Pranav Bajaj, Co-founder of Medulance, in an interview with ETTelecom at the publication's first edition of the '5G Industries Innovation Summit 2024'.",
  },
  {
    date: "JULY 20, 2024",
    title:
      "How Waterlogging Affects Emergency Medical Services and Ways to Mitigate It",
    description:
      "Waterlogging affects everyday life and becomes a significant challenge for emergency medical services (EMS). Flooded roads and waterlogged areas impede the swift and efficient operation of ambulances...",
  },
  {
    date: "NOVEMBER 1, 2024",
    title:
      "How a Former Zomato Professional Built a Rs. 200 Crore ‘Uber for Ambulances’",
    description:
      "Pranav Bajaj’s entry into the healthcare sector happened through a quirk of fate. After graduating from Shaheed Sukhdev College of Business Studies.",
  },
  {
    date: "OCTOBER 1, 2024",
    title:
      "5G & AI to transform healthcare in India, may benefit hinterlands the most: Industry",
    description:
      "Pranav Bajaj, Co-founder of emergency services provider Medulance said if from the ambulance, the patient data can be transmitted to the doctors at the emergency room.",
  },
];

const MedNews = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1626710115566-1be358df7197?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 100, 0.6)",
        backgroundBlendMode: "multiply",
      }}
      className="w-screen flex justify-center items-center py-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] max-w-screen-xl">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="relative p-6 bg-white/10 backdrop-blur-lg rounded-lg flex flex-col gap-3 text-white"
          >
            <p className="text-sm font-normal text-gray-300">{news.date}</p>
            <h2 className="text-lg font-semibold mt-1">{news.title}</h2>
            <p className="text-sm mt-2">{news.description}</p>
            <BsArrowRight
              size={30}
              className="absolute bottom-6 right-6 cursor-pointer hover:text-teal-400 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedNews;
