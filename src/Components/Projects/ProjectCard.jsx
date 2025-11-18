import React from "react";

const ProjectCard = ({ title, images = [], demoLink, codeLink }) => {
  return (
    <div className="group w-80 bg-[#0d0f1a] rounded-2xl shadow-lg shadow-black/50 overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl">

      {/* Image */}
      <div className="w-full h-80 overflow-hidden bg-cover">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
        ))}
      </div>

      {/* Content */}
      <div className="p-5 text-center space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-all duration-300">
          {title}
        </h3>

        {/* Buttons */}
        <div className=" flex flex-col md:flex-row justify-center gap-4 pt-2">
          
          {/* Live Demo */}
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600/80 text-white rounded-xl shadow-md hover:bg-indigo-500 transition-all duration-300"
          >
            Live Demo
          </a>

          {/* View Code */}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white rounded-xl shadow-md hover:bg-gray-600 transition-all duration-300"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
