import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex gap-5 justify-around bg-[#465697] text-white p-10 md:-12 items-center "
    >
      <div>
        <h1 className="text-2xl md:text-6xl">Footer</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          sajibdashtrg@gmail.com
        </li>
        <li className="flex gap-2 items-center">
          <FaLinkedin size={20} />
          Linkdin.com/sajibdas
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          Github.com/sajibdas126
        </li>
      </ul>
    </div>
  );
};

export default Footer;
