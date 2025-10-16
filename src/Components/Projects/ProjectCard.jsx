import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:px-6  flex flex-col w-80 bg-[#0c0e19] shadow-lg  shadow-slate-900 rounded-2xl">
      <img className="px-4" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal ">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 grid md:grid-cols-2  gap- md:gap-4">
        <button
          className="mt-5 md:md-10 text-white  py-2 px-3 text-sm md:text-sm md:py-2 md:px-4 hover:opacity-85
        duration-300 hov scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
        <button
          className="mt-5 md:md-10 text-white  py-2 px-3 text-sm md:text-sm md:py-2 md:px-4 hover:opacity-85
        duration-300 hov scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
