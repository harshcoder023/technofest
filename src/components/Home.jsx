import React from "react";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
import Data3 from "../animations/Animation - 1707026607235.json";
import EventSection from "../components/EventSection";
import Accordion from "../components/Accordion";
import Contact from "./Contact";
import About from "./About";
import Prizes from "./Prizes";
import Team from "./Team";
import { Link } from "react-router-dom";
const Home = () => {
  const words = [
    "Amazing Events 🎉",
    "Expert Talks",
    "Celebrity Performances 🔥",
  ];

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
        <div data-aos="fade-up" className="flex flex-col items-center">
          <h1 className="text-5xl lg:text-5xl max-[410px]:text-[42px] font-extrabold uppercase">
            Techno<span className="text-[#FA7F5C]">fest</span>
          </h1>
          <span className="text-[16px] lg:text-xl font-medium uppercase mt-2">
            28<sup>th</sup> Feb - 1<sup>st</sup> March
          </span>
          <p className="text-[16px] w-full text-center pt-4 pb-6 lg:text-xl">
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
            <a href="https://harshcoder023.github.io/Fest-Schedule-Page/">
              <button className="bg-white text-black px-3 py-3 lg:py-2.5 text-[15px] w-[120px] lg:w-[140px] uppercase font-medium ">
                Schedule
              </button>
            </a>
            <Link to="/registeration-form">
              <button className="bg-[#FA7F5C] text-white px-3 py-3 lg:py-2.5 text-[15px] w-[120px] lg:w-[140px] uppercase font-medium">
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
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
