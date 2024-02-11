import React from "react";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
import Data3 from "../animations/Animation - 1707026607235.json";
import EventSection from "../components/EventSection";
import Accordion from "../components/Accordion";
import Contact from "./Contact";
import About from "./About";
import Prizes from "./Prizes";
import { Link } from "react-router-dom";
const Home = () => {
  const words = ["Events...", "Expert Talks...", "Celebrity Performances..."];

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: Data3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="home" className="overflow-hidden font-mont mt-[7vh]">
      <div className="h-[93vh] relative flex items-center justify-center  w-full text-white">
        {" "}
        <div className=" absolute h-[100%] w-full flex items-center justify-center -z-10">
          <Lottie options={defaultOptions3} />
        </div>
        <div className="flex flex-col items-center">
          <h1
            data-aos="fade-up"
            className="text-5xl lg:text-6xl font-extrabold"
          >
            TechnoFest
          </h1>
          <span className="text-[16px] lg:text-xl">28th Feb - 1st March</span>
          <p
            data-aos="fade-down"
            className="text-[16px] w-full text-center pt-4 pb-6 lg:text-xl"
          >
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
          <div className="">
            <a href="">
              <button className="bg-white text-black px-2 py-2 lg:py-2.5 text-[14px] w-[120px] lg:w-[140px] uppercase font-medium ">
                Schedule
              </button>
            </a>
            <Link to="/registeration-form">
              <button className="bg-[#FA7F5C] text-white px-2 py-2 lg:py-2.5 text-[14px] w-[120px] lg:w-[140px] uppercase font-medium">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <About />
      <EventSection />
      <Prizes />
      <Accordion />
      <Contact />
    </div>
  );
};

export default Home;
