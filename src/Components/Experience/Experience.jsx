import React from "react";
import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-gray-800 ">
      <h1 className="text-2xl text-center  md:text-4xl text-white font-bold ">
        Expreience
      </h1>

      <div className="flex flex-wrap  items-center justify-around">
        <div className="grid grid-cols-3  md:2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3Alt color="#1572b6" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#E34F26" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiNetflixFill color="#ff4438" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAmazon color="FF9900" size={50} />
          </span>
        </div>

        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285f4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin mb-2">
                Sept 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>Work as softower developer</li>
                <li>Sinior SDE developer</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10   bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Software Engineer, RiNetflixFill
              </h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>Work as softower developer</li>
                <li>Sinior SDE developer</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10   bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaAmazon color="FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Amazon</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>Work as softower developer</li>
                <li>Sinior SDE developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
