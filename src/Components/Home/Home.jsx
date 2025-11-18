import React from "react";
import bgimage from "../../assets/bg-1.jpg";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row items-center bg-gray-900 w-full gap-10 p-10 md:p-20">
      
      {/* LEFT TEXT SECTION */}
      <div className="text-center md:text-left md:w-1/2 space-y-5 animate-fadeIn">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Front End Developer
          </span>
        </h1>

        {/* 👇 Your Name Added */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200">
          Hi, I'm Sajib Dash 👋
        </h2>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          I craft modern, user-focused web applications using React.js and
          JavaScript, combining clean layouts, thoughtful typography, and smooth
          interactions. Every interface is designed to deliver aesthetic appeal
          and seamless usability for fast, responsive user experiences across
          devices.
        </p>

        <button
          onClick={() => window.open("/SajibDash-Resume.pdf", "_blank")}
          className="mt-3 py-3 px-6 text-white bg-gradient-to-r 
             from-green-500 to-teal-500 rounded-full font-semibold 
             shadow-xl hover:scale-105 hover:shadow-green-400/50 
             transition-all duration-300"
        >
          Download CV
        </button>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-72 h-72 md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 duration-300">
          <img
            src={bgimage}
            alt="developer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
