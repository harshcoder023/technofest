import React from "react";
import Data from "../animations/Animation - 1707146220634.json";
import Lottie from "react-lottie";
import { FaTrophy } from "react-icons/fa";
const Prizes = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="overflow-hidden min-h-[94vh] py-12 bg-[#0e1538] border"
      id="prizes"
    >
      <h2
        data-aos="fade-right"
        className=" text-white font-mont text-2xl font-medium text-center mb-2 lg:text-3xl lg:font-semibold"
      >
        Prizes
      </h2>

      <div className="border-t-[1px] lg:flex lg:justify-center border-gray-500">
        <div
          data-aos="fade-left"
          className=" flex items-center overflow-hidden justify-end md:w-[50vw]"
        >
          <Lottie
            className=" bg-transparent"
            options={defaultOptions}
            height={350}
            width={350}
          />
        </div>
      </div>

      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Prizes;
