import React from "react";
import { FaTools } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";
import { Link } from "react-router-dom";
const EventSection = () => {
  return (
    <div className=" w-full bg-[#E4F0F5] py-12 min-h-[93vh] " id="events">
      <h2
        // data-aos="fade-top"
        className=" text-[#232b2b] font-mont text-3xl font-[800] uppercase text-center mb-7 lg:text-3xl lg:font-semibold lg:mb-12"
      >
        Events
      </h2>
      <div className=" flex  flex-wrap items-center justify-center  pt-3 mb-8 w-full lg:gap-10 gap-8">
        <div className=" hover:-translate-y-4 duration-300">
          <Link
            to={"/category/cultural-events"}
            data-aos="fade-right"
            className="orderLight relative h-[150px] w-[250px] hover:-translate-y-4 hover:bg-[#FA7F5C] flex items-center justify-center bg-[#0e1538]  duration-300 overflow-hidden rounded-md "
          >
            <div className=" text-white text-lg z-10 items-center flex flex-col justify-center gap-2">
              <GiMusicalNotes className=" text-2xl" /> <h2> Cultural Events</h2>{" "}
              <span className="text-xs font-light">
                Click to see the events !
              </span>
            </div>
          </Link>
        </div>{" "}
        <div className=" hover:-translate-y-4 duration-300 ">
          <Link
            to={"/category/technical-events"}
            data-aos="fade-up"
            className="orderLight relative h-[150px] w-[250px] hover:-translate-y-4 hover:bg-[#FA7F5C] flex items-center justify-center bg-[#0e1538]  duration-300 overflow-hidden rounded-md"
          >
            <div className=" text-white text-lg z-10 items-center flex flex-col justify-center gap-2">
              <FaTools className=" text-2xl" /> <h2> Technical Events</h2>{" "}
              <span className="text-xs font-light">
                Click to see the events !
              </span>
            </div>
          </Link>
        </div>
        <div className=" hover:-translate-y-4 duration-300 ">
          <Link
            to={"/category/sports-events"}
            data-aos="fade-left"
            className="orderLight relative h-[150px] w-[250px] hover:-translate-y-4 hover:bg-[#FA7F5C] flex items-center justify-center bg-[#0e1538]  duration-300 overflow-hidden rounded-md"
          >
            <div className=" text-white text-lg z-10 items-center flex flex-col justify-center gap-2">
              <MdSportsCricket className=" text-2xl" /> <h2> Sports Events</h2>{" "}
              <span className="text-xs font-light">
                Click to see the events !
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-[300px] lg:w-[830px] mx-auto h-[250px] lg:h-[300px] border border-[black] rounded-md overflow-hidden flex flex-col items-center justify-center font-mont text-4xl leading-8 font-bold lg:text-5xl lg:leading-10"
      >
        <span>COMING</span>
        <span>SOON</span>
      </div>
    </div>
  );
};

export default EventSection;
