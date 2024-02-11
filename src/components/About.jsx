import React from "react";
import college from "../assets/college.jpg";
import collegeLogo from "../assets/college-logo.png";
import nbaLogo from "../assets/nba-logo.png";
import Years from "../assets/28-years.png";
import { CountdownToFebruary28, CountdownTimer } from "./CountdownToFebruary28";

const About = () => {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const targetDate = new Date("February 11, 2024 13:15:00").getTime(); // Set target date to February 11, 2024, 1:15 PM
  return (
    <div>
      <div className="min-h-[93vh] bg-[#E4F0F5] py-12 ">
        <h2
          data-aos="fade-top"
          className=" text-black font-mont text-2xl font-medium text-center mb-2 lg:text-3xl lg:font-semibold lg:mb-12"
        >
          About
        </h2>
        <div className="container max-w-screen-lg mx-auto px-3 lg:px-0 lg:flex lg:gap-4">
          <div
            data-aos="fade-right"
            className="left lg:w-1/2 bg-college h-[40vh] lg:h-[60vh] bg-cover bg-right bg-opacity-50 relative"
          >
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 text-white font-mont flex flex-col items-center justify-center">
              <div className="flex items-center">
                <img
                  className="w-[55px] h-[55px] object-cover object-center"
                  src={collegeLogo}
                  alt=""
                />

                <img
                  className="w-[70px] h-[70px] object-cover object-center"
                  src={nbaLogo}
                  alt=""
                />
              </div>
              <h2 className="text-3xl font-bold uppercase text-center leading-7 mb-2 ">
                Vaish College of Engineering
              </h2>
              <img
                className="w-[120px] h-[120px] object-cover object-center absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] lg:hidden"
                src={Years}
                alt=""
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="right lg:w-1/2 font-mont  pt-24 px-3 lg:pt-4"
          >
            <h3 className="text-xl font-bold uppercase">About TechnoFest</h3>
            <p className="font-sans text-md mt-2">
              Welcome to TechnoFest, the premier fest hosted by Vaish College of
              Engineering! Established in 1995, Vaish College of Engineering
              takes pride in its first-ever TechnoFest, celebrating innovation,
              talent, and community spirit.
            </p>
            <h3 className="text-xl font-bold uppercase mt-6">Our Mission</h3>
            <p className="font-sans text-md mt-2">
              TechnoFest aims to create an inclusive platform for students to
              showcase their talents, explore their interests, and foster
              collaboration. As a college certified by the National Board of
              Accreditation (NBA), we uphold the highest standards of academic
              excellence and innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[93vh] bg-[#0e1538] py-12 border text-white">
        <div className="container max-w-screen-lg mx-auto px-4 lg:px-0">
          <div className="">
            <h2
              data-aos="fade-top"
              className=" text-white font-mont text-2xl font-bold text-center mb-2 lg:text-3xl lg:font-semibold lg:mb-12"
            >
              Join Us
            </h2>
            <p className="font-sans text-md mt-2">
              Be a part of TechnoFest and experience the excitement! Whether
              you're a student, faculty member, or an enthusiast, there's
              something for everyone at our fest. Save the dates and join us
              from February 28th to March 1st, 2024, for an unforgettable
              celebration of talent and innovation.
            </p>
            <div className="w-full flex flex-col items-center">
              <h3 className="mt-14 text-2xl mb-4 font-bold uppercase">
                Starting Soon
              </h3>
              <p className="font-sans text-md mt-2">
                Join us for TechnoFest on February 28th - March 1st, 2024! The
                countdown is on!
              </p>
              {/* <CountdownTimer targetDate={targetDate} /> */}
              <CountdownToFebruary28 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
