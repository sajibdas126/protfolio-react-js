import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Navbar></Navbar>{" "}
      </div>

      <div>
        {" "}
        <Home></Home>
      </div>

      <div>
        {" "}
        <About></About>
      </div>

      <div>
        <Experience></Experience>
      </div>

      <div>
        <Project></Project>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
