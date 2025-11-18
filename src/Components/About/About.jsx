import React from "react";
import AboutImg from "../../assets/bg-2.jpg";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="About" className="bg-gray-900 py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* IMAGE */}
        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src={AboutImg}
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="md:w-2/3 text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight 
                         bg-gradient-to-r from-purple-400 to-blue-400 
                         text-transparent bg-clip-text drop-shadow-lg">
            About Me
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I am a passionate Frontend Developer focused on crafting modern,
            user-friendly web applications using React.js, Next.js, and Tailwind CSS.
            I combine clean layouts, thoughtful typography, and smooth interactions 
            to deliver aesthetically appealing and seamless user experiences across devices.
          </p>

          <ul className="space-y-5">
            <li className="flex gap-3 items-start">
              <FaArrowRight className="mt-1 text-indigo-500" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Frontend Development
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-snug">
                  Creating responsive and dynamic user interfaces with React.js, 
                  Next.js, and Tailwind CSS for modern web experiences.
                </p>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <FaArrowRight className="mt-1 text-indigo-500" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  UI/UX Design
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-snug">
                  Designing clean, user-focused interfaces with attention to
                  typography, spacing, and intuitive interactions.
                </p>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <FaArrowRight className="mt-1 text-indigo-500" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Performance & Optimization
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-snug">
                  Optimizing web applications for speed, responsiveness, and
                  best practices for modern browsers.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
