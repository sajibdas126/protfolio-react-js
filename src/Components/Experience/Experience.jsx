import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="Experience" className="p-10 md:p-24 bg-gray-900">
      <h1 className="text-2xl md:text-4xl text-center font-bold text-white mb-12">
        Experience & Skills
      </h1>

      {/* SKILLS */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {[ 
          { icon: <FaHtml5 size={50} />, color: "#E34F26" },
          { icon: <FaCss3Alt size={50} />, color: "#1572B6" },
          { icon: <FaJs size={50} />, color: "#F7DF1E" },
          { icon: <FaReact size={50} />, color: "#61DAFB" },
          { icon: <FaFigma size={50} />, color: "#F24E1E" },
        ].map((skill, idx) => (
          <div
            key={idx}
            className="p-5 bg-gray-800 rounded-2xl flex items-center justify-center
                       hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            {React.cloneElement(skill.icon, { color: skill.color })}
          </div>
        ))}
      </div>

      {/* EXPERIENCE CARDS */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {/* Google */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-white mb-2">Frontend Developer</h2>
          <p className="text-sm text-gray-300 mb-3">Sept 2025 - Present</p>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>Developed responsive user interfaces using React.js and Tailwind CSS</li>
            <li>Implemented modern interactive features for web applications</li>
          </ul>
        </div>

        {/* Netflix */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-white mb-2">Frontend Developer</h2>
          <p className="text-sm text-gray-300 mb-3">Sept 2025 - Present</p>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>Created dynamic UI components with React.js</li>
            <li>Optimized front-end performance for streaming platform</li>
          </ul>
        </div>

        {/* Amazon */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-white mb-2">Frontend Developer</h2>
          <p className="text-sm text-gray-300 mb-3">Sept 2025 - Present</p>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>Built and maintained interactive web interfaces using React.js</li>
            <li>Ensured responsive design across multiple devices</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
