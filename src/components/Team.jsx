import React from "react";
import Shreysh from "../assets/shreysh.jpg";
import Nimit from "../assets/nimit.jpg";
import Siddharth from "../assets/siddharth.png";
import Alok from "../assets/alok.jpg";
import Harsh from "../assets/harsh.jpg";
import Sahil from "../assets/sahil.jpg";
import Yash from "../assets/yash.jpg";
import Tushar from "../assets/tushar.jpg";
import Anmol from "../assets/anmol.jpg";
import Tanishq from "../assets/tanishq.webp";
import Neha from "../assets/neha.jpg";
import Nikita from "../assets/nikita.jpg";
import Sejal from "../assets/sejal.jpg";
import Lakshay from "../assets/lakshay.jpg";
import Sachin from "../assets/sachin.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Team = () => {
  const coordinators = [
    {
      name: "Sejal",
      image: Sejal,
    },
    {
      name: "Nikita",
      image: Nikita,
    },
    {
      name: "Neha Ahlawat",
      image: Neha,
    },
    {
      name: "Tanishq",
      image: Tanishq,
    },
    {
      name: "Lakshay",
      image: Lakshay,
    },
    {
      name: "Sachin",
      image: Sachin,
    },
  ];
  const teamMembers = [
    {
      name: "Tushar Bhardwaj",
      image: Tushar,
      social: "https://www.instagram.com/tushartom7/",
      class: "B.Tech CSE 3rd Year",
    },
    {
      name: "Siddharth Tayal",
      image: Siddharth,
      social:
        "https://www.linkedin.com/in/siddharth-tayal-65203a266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 3rd Year",
    },
    {
      name: "Harsh Goyal",
      image: Harsh,
      social:
        "https://www.linkedin.com/in/harsh-goyal-2b6062266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 3rd Year",
    },
    {
      name: "Anmol",
      image: Anmol,
      social: "https://www.instagram.com/anmol_._ahuja/",
      class: "B.Tech CSE 3rd Year",
    },
    {
      name: "Nimit Shekhawat",
      image: Nimit,
      social:
        "https://www.linkedin.com/in/nimit-shekhawat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 3rd Year",
    },
    {
      name: "Maanik Sharma",
      image: "https://wallpapercave.com/wp/wp12140288.jpg",
      social:
        "https://www.linkedin.com/in/maanik-sharma-914795266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 3rd Year",
    },
    {
      name: "Shreyash",
      image: Shreysh,
      social:
        "https://www.linkedin.com/in/shreyashgupta14?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 3rd Year",
    },
    {
      name: "Sahil",
      image: Sahil,
      social:
        "https://www.linkedin.com/in/sahil-dhillon-294a05208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 2nd Year",
    },

    {
      name: "Yashmit",
      image: Yash,
      social:
        "https://www.linkedin.com/in/yashmit-narang-87a68626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 2nd Year",
    },
  ];
  return (
    <div className=" w-full bg-[#E4F0F5] py-12 min-h-[93vh]">
      <div className="container max-w-screen-lg mx-auto px-4 lg:px-0">
        <h2
          // data-aos="fade-top"
          className=" text-[#232b2b] font-mont text-3xl font-[800] uppercase text-center mb-7 lg:text-3xl lg:font-semibold lg:mb-6"
        >
          Meet the team
        </h2>

        <div className="lg:w-[600px] mx-auto mb-6 lg:mb-8">
          <Carousel
            autoPlay
            emulateTouch
            infiniteLoop
            stopOnHover
            showArrows
            showIndicators
            showStatus
            useKeyboardArrows
            showThumbs={false}
            swipeable
            interval={2000}
          >
            {coordinators.map((coordinator, index) => {
              return (
                <div key={index} className="lg:h-[500px] h-[450px] relative">
                  <img
                    src={coordinator.image}
                    className={`h-full w-full object-cover ${
                      index === 0 || index === 1 || index === 3
                        ? "object-top"
                        : ""
                    }`}
                  />
                  {/* <p className="legend">Neha Ahlawat</p> */}
                  <h3 className="text-center bg-black absolute bottom-[40px] w-[80%] py-2 text-white left-1/2 translate-x-[-50%] rounded-md">
                    {coordinator.name}
                  </h3>
                </div>
              );
            })}
          </Carousel>
        </div>

        <p className="font-sans text-center ">
          Meet the fantastic team behind TechnoFest 2024, with special thanks to
          our teacher,{" "}
          <a
            href="https://www.linkedin.com/in/er-alok-gupta-53927bb4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="underline font-medium"
          >
            Mr. Alok Gupta
          </a>
          , for his support & guidance. With 9 dedicated members, we're thrilled
          to bring you an unforgettable event experience!
        </p>

        <div className="members lg:w-[85%] lg:mx-auto  flex flex-wrap gap-y-12 gap-x-24 max-[410px]:gap-x-20 lg:gap-16 justify-center pt-6">
          {teamMembers.map((member, index) => (
            <a key={index} href={member.social}>
              <div className="member lg:w-32  w-28  flex flex-col items-center ">
                <div
                  className={`image w-full lg:h-32  h-28 rounded-full ${
                    index == 0 ? "border-[#FA7F5C] border-[2px]" : ""
                  } overflow-hidden`}
                >
                  <img
                    src={member.image}
                    alt=""
                    className={`w-full h-full object-cover  ${
                      index == 1 ||
                      index == 7 ||
                      index == 0 ||
                      index == 5 ||
                      index == 3
                        ? "object-top"
                        : "object-center"
                    }`}
                  />
                </div>

                <h3 className="font-mont text-md font-semibold text-center leading-5 mt-4 mb-1 text-nowrap">
                  {member.name}
                </h3>
                <h4 className="text-[13px] text-black text-center font-medium text-nowrap">
                  {member.class}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
