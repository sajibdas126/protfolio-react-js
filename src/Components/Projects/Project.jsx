import React from "react";
import ProjectCard from "./ProjectCard";
import p1 from "../../assets/project-1.png";
import p2 from "../../assets/project-2.png";
import p3 from "../../assets/project-3.png";

const Project = () => {
  return (
    <div
      id="Projects"
      className="p-10 md:p-24 bg-gray-900 text-white justify-center items-center"
    >
      <h1 className="text-2xl text-center md:text-4xl font-bold">Projects</h1>

      <div className="py-12 flex flex-wrap justify-center gap-8">

        <ProjectCard
          title="Bd Electronics"
          images={[p1]}
          demoLink="https://6917794d114926f86c691eae--serene-jalebi-00a5de.netlify.app/"
          codeLink="https://github.com/sajibdas126/bd-electronics.git"
        />

        <ProjectCard
          title="Movie Loading Website"
          images={[p2]}
          demoLink="https://dramatic-1.vercel.app/"
          codeLink="https://github.com/sajibdas126/dramatic.git"
        />

        <ProjectCard
          title="A Ecommerce Website"
          images={[p3]}
          demoLink="https://e-commercsbd.vercel.app/"
          codeLink="https://github.com/sajibdas126/e-commercs.git"
        />
        
      </div>
    </div>
  );
};

export default Project;
