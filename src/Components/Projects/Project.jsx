import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div
      id="Projects"
      className="p-10 md:p-24 text-white bg-gray-800 justify-center items-center "
    >
      <h1 className="text-2xl text-center  md:text-4xl text-white font-bold">
        Projects
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Blogging Website"
          main="this is a blogging website created in and some component library  created in and some component library"
        />

        <ProjectCard
          title="Youtube Clon"
          main="this is a blogging website created in and some component library  created in and some component library"
        />

        <ProjectCard
          title="Facbook Colon"
          main="this is a blogging website created in and some component library  created in and some component library"
        />
      </div>
    </div>
  );
};

export default Project;
