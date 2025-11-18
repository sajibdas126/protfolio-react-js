import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center px-10 py-5 md:px-20 bg-gray-800 text-white">
      <span className="text-2xl font-bold tracking-wide">Sajib<span className="text-red-500">Dash</span> </span>

      <ul
        className={` ${
          menu ? " block" : "hidden"
        } mx-24 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#Home" className="block p-2 hover:text-blue-400 transition">
          Home
        </a>

        <a href="#About" className="block p-2 hover:text-blue-400 transition">
          About
        </a>

        <a
          href="#Experience"
          className="block p-2 hover:text-blue-400 transition"
        >
          Experience
        </a>

        <a
          href="#Projects"
          className="block p-2 hover:text-blue-400 transition"
        >
          Projects
        </a>

        <a href="#Footer" className="block p-2 hover:text-blue-400 transition">
          Contact
        </a>
      </ul>
      {!menu ? (
        <IoIosMenu
          size={30}
          className="md:hidden transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(!menu);
          }}
        />
      ) : (
        <IoMdClose
          size={30}
          onClick={() => {
            openMenu(!menu);
          }}
          className="md:hidden transition-all duration-300 cursor-pointer"
        />
      )}
    </nav>
  );
};

export default Navbar;
