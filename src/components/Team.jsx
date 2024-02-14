import React from "react";
import Shreysh from "../assets/shreysh.jpeg";
const Team = () => {
  const teamMembers = [
    {
      name: "Tushar Bhardwaj",
      image:
        "https://media.gq-magazine.co.uk/photos/6362687ed85a7b93f28a0904/3:2/w_1011,h_674,c_limit/Sigma-grindset-patrick-bateman.jpeg",
      social: "https://www.instagram.com/tushartom7/",
    },
    {
      name: "Siddharth Tayal",
      image:
        "https://ibighit.com/bts/images/profile/proof/member/member-jk.jpg",
      social:
        "https://www.linkedin.com/in/siddharth-tayal-65203a266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Harsh Goyal",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=sph",
      social:
        "https://www.linkedin.com/in/harsh-goyal-2b6062266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Anmol",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=sph",
      social: "https://www.instagram.com/anmol_._ahuja/",
    },
    {
      name: "Nimit Shekhawat",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=sph",
      social:
        "https://www.linkedin.com/in/nimit-shekhawat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Maanik Sharma",
      image: "https://wallpapercave.com/wp/wp12140288.jpg",
      social:
        "https://www.linkedin.com/in/maanik-sharma-914795266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sahil",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=sph",
      social:
        "https://www.linkedin.com/in/sahil-dhillon-294a05208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Shreysh",
      image: Shreysh,
      social:
        "https://www.linkedin.com/in/shreyashgupta14?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Yash",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=sph",
      social: "",
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
                  src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <h3 className="font-mont text-2xl max-[410px]:text-xl  font-medium">
                  Mr. Alok Gupta
                </h3>
                <span className="font-sans inline-block text-md font-medium">
                  Lead Mentor
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="members lg:w-[85%] lg:mx-auto  flex flex-wrap gap-y-12 gap-x-24 max-[410px]:gap-x-20 lg:gap-16 justify-center pt-6">
          {teamMembers.map((member, index) => (
            <a key={index} href={member.social}>
              <div className="member lg:w-32  w-28  flex flex-col items-center gap-4">
                <div
                  className={`image w-full lg:h-32  h-28 rounded-full ${
                    index == 0 ? "border-[#FA7F5C] border-[2px]" : ""
                  } overflow-hidden`}
                >
                  <img
                    src={member.image}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <h3 className="font-mont text-md font-semibold text-center leading-5">
                  {member.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
