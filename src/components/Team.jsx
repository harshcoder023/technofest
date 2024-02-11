import React from "react";

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
      social: "https://www.instagram.com/s_tayal_01/",
    },
    {
      name: "Harsh Goyal",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=sph",
      social: "https://www.instagram.com/harsh_goyal_2702/",
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
      social: "",
    },
    {
      name: "Maanik Sharma",
      image: "https://wallpapercave.com/wp/wp12140288.jpg",
      social: "https://www.instagram.com/maanik_23/",
    },
    {
      name: "Sahil",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=sph",
      social: "",
    },
  ];
  return (
    <div className=" w-full bg-[#E4F0F5] py-12 min-h-[93vh]">
      <div className="container max-w-screen-lg mx-auto px-4 lg:px-0">
        <h2
          data-aos="fade-"
          className=" text-black font-mont text-2xl font-medium text-center mb-4 lg:mb-8 lg:text-3xl lg:font-semibold"
        >
          Meet the Team
        </h2>
        <p className="font-sans text-center ">
          Get to know the dedicated team behind TechnoFest 2024! Comprising 7
          passionate members, including our esteemed guide, Mr. Alok Gupta.
          Together, we're bringing you an unforgettable event experience.
        </p>
        <div className="mentor flex justify-center w-full pt-6  ">
          <a href="">
            <div className="flex  items-center lg:gap-8 gap-6 border-b-[1px] border-gray-300 pb-6 px-4">
              <div className="image lg:w-32  w-28 lg:h-32  h-28 rounded-full overflow-hidden ">
                <img
                  src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <h3 className="font-mont text-2xl font-medium">
                  Mr. Alok Gupta
                </h3>
                <span className="font-sans inline-block text-md font-medium">
                  Lead Mentor
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="members lg:w-[85%] lg:mx-auto  flex flex-wrap gap-12 lg:gap-16 justify-center pt-6">
          {teamMembers.map((member, index) => (
            <a key={index} href={member.social}>
              <div className="member lg:w-32  w-28  flex flex-col items-center gap-4">
                <div className="image w-full lg:h-32  h-28 rounded-full overflow-hidden ">
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
