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
const Team = () => {
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
      name: "Sahil",
      image: Sahil,
      social:
        "https://www.linkedin.com/in/sahil-dhillon-294a05208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 2nd Year",
    },
    {
      name: "Shreysh",
      image: Shreysh,
      social:
        "https://www.linkedin.com/in/shreyashgupta14?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      class: "B.Tech CSE 3rd Year",
    },
    {
      name: "Yash",
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
          className=" text-[#232b2b] font-mont text-3xl font-[800] uppercase text-center mb-7 lg:text-3xl lg:font-semibold lg:mb-12"
        >
          Meet the team
        </h2>
        <p className="font-sans text-center ">
          Get to know the dedicated team behind TechnoFest 2024! Comprising 7
          passionate members, including our esteemed guide, Mr. Alok Gupta.
          Together, we're bringing you an unforgettable event experience.
        </p>
        <div className="mentor flex justify-center w-full pt-6  ">
          <a
            href="https://www.linkedin.com/in/er-alok-gupta-53927bb4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <div className="flex  items-center lg:gap-8 gap-6 max-[410px]:gap-10 border-b-[1px] border-gray-300 pb-6 px-4">
              <div className="image lg:w-32  w-28 lg:h-32  h-28 rounded-full overflow-hidden ">
                <img
                  src={Alok}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <span className="font-sans inline-block text-xs px-2 py-1 text-white font-medium rounded-lg bg-[#FA7F5C]">
                  Lead Mentor
                </span>
                <h3 className="font-mont text-2xl max-[410px]:text-xl  font-medium mt-1">
                  Mr. Alok Gupta
                </h3>
                <span className="font-sans inline-block text-md font-medium">
                  AP, CSE
                </span>
              </div>
            </div>
          </a>
        </div>

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

                <h3 className="font-mont text-md font-semibold text-center leading-5 mt-4 md:mb-2 mb-1">
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
