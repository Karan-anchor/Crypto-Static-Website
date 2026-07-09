import React, { useState } from "react";
import DI from "../assets/DI.avif";
import FT from "../assets/FT.webp";
import SD from "../assets/SD.jpg";

const OM = () => {
  const [activeOption, setActiveOption] = useState(1);

  const options = [
    {
      id: 1,
      title: "Digital Innovation",
      img: DI,
    },
    {
      id: 2,
      title: "Future Tech",
      img: FT,
    },
    {
      id: 3,
      title: "Smart Design",
      img: SD,
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center px-4 py-20">

      {/* Heading */}
      <div className="text-center space-y-6 max-w-5xl mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our
          </span>

          <span className="ml-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Mission
          </span>
        </h2>

        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed">
          To revolutionize the digital landscape through innovative solutions
          that bridge
          <span className="mx-2 px-2 py-1 rounded-lg bg-purple-500/20">
            human creativity
          </span>
          and
          <span className="mx-2 px-2 py-1 rounded-lg bg-blue-500/20">
            technological excellence
          </span>
          empowering businesses to thrive in an ever-evolving digital ecosystem.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl">

        {/* Left Buttons */}
        <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveOption(option.id)}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                activeOption === option.id
                  ? "bg-gradient-to-br from-purple-500 to-blue-500 scale-105 shadow-xl"
                  : "bg-black/30 hover:bg-purple-500/20 hover:scale-95"
              }`}
            >
              <span
                className={`font-semibold ${
                  activeOption === option.id
                    ? "text-white"
                    : "text-purple-300"
                }`}
              >
                {option.title}
              </span>
            </button>
          ))}
        </div>

        {/* Center Content */}
        <div className="relative max-w-2xl text-center order-1 md:order-2">

          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-30"></div>

          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">

            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Next Generation Solutions
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Transform your digital experience with our cutting-edge technology
              stack and innovative design approach.
            </p>

            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full font-bold transition duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
              Explore More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full sm:w-4/5 md:w-96 order-3">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl">

            <img
              src={options.find((o) => o.id === activeOption)?.img}
              alt={options.find((o) => o.id === activeOption)?.title}
              className="w-full h-[450px] object-cover transition duration-500 hover:scale-110"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4">

              <h3 className="text-white text-xl font-bold">
                {options.find((o) => o.id === activeOption)?.title}
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OM;