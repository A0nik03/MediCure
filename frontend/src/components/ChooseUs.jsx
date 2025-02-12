import React from "react";
import { FaBed } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { GiMedicines } from "react-icons/gi";
import { GiCycle } from "react-icons/gi";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaBed />,
      title: "24/7 Emergency Medication Care",
      description:
        "We provide 24/7 emergency medication care with Medicure. Our team is always ready to help you.",
    },
    {
      icon: <BsClockFill />,
      title: "Emergency assistance time of 15 minutes or less",
    },
    { icon: <GiCycle />, title: "24/7 Support" },
    {
      icon: <GiMedicines />,
      title: "Biggest fleet of ambulances across India",
    },
  ];

  return (
    <div className="h-screen w-screen mb-20">
      <h1 className="text-[1.8rem] text-center font-bold pt-10">
        Why Choose Us?
      </h1>
      <div>
        <div className="w-full flex justify-center mt-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6 flex items-center gap-7 w-80">
              <div className="flex items-center text-5xl text-blue-400 justify-center">
                {feature.icon}
              </div>
              <h3 className="text-[1.1rem] font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>

        <div className="relative w-full h-[70vh] flex items-center">
          <div className="z-20 absolute left-[23%] top-[38%] h-5 w-10 flex flex-col">
            <img src="zigzag.png" className="object-cover h-3 w-full" alt="" />
            <img src="zigzag.png" className="object-cover h-3 w-full" alt="" />
            <img src="zigzag.png" className="object-cover h-3 w-full" alt="" />
          </div>
          <div className="absolute left-[24%] top-[10%] z-10 w-[20rem] h-[13rem] bg-amber-300 border-4 border-white rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-[40%] left-[36%] w-[23rem] h-[15rem] bg-amber-300 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562411053-1d8bdfe771c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2N3x8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div
            className={`absolute z-20 left-[42%] bottom-8 w-44 py-2 hover:tracking-widest text-center border-[3px] border-white text-xl hover:bg-teal-600 bg-teal-500 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer`}
          >
            Subscribe
          </div>
          <div className="z-20 absolute right-[39%] bottom-24 h-5 w-10 flex flex-col">
            <img src="zigzag.png" className="object-cover h-3 w-full" alt="" />
            <img src="zigzag.png" className="object-cover h-3 w-full" alt="" />
            <img src="zigzag.png" className="object-cover h-3 w-full" alt="" />
          </div>
          <img src="choose.png" className="absolute h-80 bottom-10 right-24" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
