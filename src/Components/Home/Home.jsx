import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse  md:flex-row  bg-gray-800 w-full  items-start p-10 md:p-20">
      <div className=" text-center md:text-left md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          Hello' I am Sajib
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          eaque ex facilis. Voluptatem illum rerum cupiditate! Soluta totam
          autem maxime. Praesentium labore dolores accusamus quisquam, nam
          beatae cumque quidem aliquam?
        </p>
        <button
          className="mt-5 md:md-10 text-white  py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
        duration-300 hov scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>
      <div>
        <img className="w-" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
