import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-12 px-5 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT SECTION */}
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Let's Connect
          </h1>
          <p className="text-gray-200 text-sm md:text-base">
            Feel free to reach out via email or follow me on social platforms
          </p>
        </div>

        {/* RIGHT SECTION */}
        <ul className="flex flex-col md:flex-row gap-6 items-center">
          <li className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300">
            <MdOutlineEmail size={25} className="hover:scale-110 transition-transform duration-300" />
            <a href="mailto:sajibdashtrg@gmail.com" className="text-gray-200 hover:text-white">
              sajibdashtrg@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-blue-300 transition-all duration-300">
            <FaLinkedin size={25} className="hover:scale-110 transition-transform duration-300" />
            <a href="https://www.linkedin.com/in/sajib-dash

" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
              linkedin.com/in/sajibdas
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-gray-300 transition-all duration-300">
            <FaGithub size={25} className="hover:scale-110 transition-transform duration-300" />
            <a href="https://github.com/sajibdas126" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
              github.com/sajibdas126
            </a>
          </li>
        </ul>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Sajib Dash. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
