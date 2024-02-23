import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Esport = () => {
  return (
    <div className="lg:min-h-[85vh] min-h-[60vh] bg-[#0e1538] pt-12 pb-16 ">
      <h2
        // data-aos="fade-top"
        className=" text-white font-mont uppercase text-3xl font-[800] text-center  lg:text-3xl lg:font-semibold mb-2"
      >
        Featured Events
      </h2>
      <p className="text-white text-center mb-12 text-sm">
        Discover the Thrilling Lineup of Events Awaited!
      </p>
      <div className="container max-w-screen-lg mx-auto px-3 lg:px-0">
        <div className="lg:w-[800px] mx-auto">
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
            <div className="lg:h-[400px] h-[450px] relative">
              <img
                src="https://img.freepik.com/free-photo/apocalyptic-destruction-war-zone-landscape_23-2150985678.jpg?t=st=1708592779~exp=1708596379~hmac=a5d88e742906605a6c0c08cae161ffdabb8c48ccd45025a04bfb54293e2a7290&w=996"
                alt=""
                className="absolute w-full h-full left-0 top-0 object-cover object-bottom"
              />
              <div className="text absolute z-10 w-full h-full left-0 top-0 flex justify-center items-center flex-col">
                <h3 className="font-mont font-extrabold uppercase text-white  text-5xl drop-shadow-lg shadow-black">
                  Esports
                </h3>
                <div className=" text-white flex flex-col items-center">
                  <p className="mb-8 mt-1 drop-shadow-2xl w-[80%] lg:w-full  shadow-black font-semibold lg:font-medium">
                    {" "}
                    Survivor, it's time to lock in your spot in the Battle
                    Royale.
                  </p>
                  <a
                    href="https://forms.gle/Fj9w3KECyPNczVRT7"
                    className="text-white bg-gray-900  font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  >
                    Join Mission
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:h-[400px] h-[450px] relative">
              <img
                src="https://static.vecteezy.com/system/resources/previews/029/290/604/non_2x/ai-generative-dj-playing-and-mixing-music-in-nightclub-party-at-night-edm-dance-music-club-with-crowd-of-young-people-free-photo.jpg"
                alt=""
                className="absolute w-full h-full left-0 top-0 object-cover object-bottom"
              />
              <div className="text absolute z-10 w-full h-full left-0 top-0 flex justify-center items-center flex-col">
                <h3 className="font-mont font-extrabold uppercase text-white  text-5xl drop-shadow-lg shadow-black">
                  DJ NIGHT
                </h3>
                <div className=" text-white flex flex-col items-center">
                  <p className="mb-8 mt-1 drop-shadow-2xl w-[80%] lg:w-full  shadow-black font-semibold lg:font-medium">
                    {" "}
                    Get Your Squad Ready: DJ Night is the Place to Be!
                  </p>
                  {/* <a
                    href="https://forms.gle/Fj9w3KECyPNczVRT7"
                    className="text-white bg-gray-900  font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  >
                    Join Mission
                  </a> */}
                </div>
              </div>
            </div>
            <div className="lg:h-[400px] h-[450px] relative">
              <img
                src="https://www.koimoi.com/wp-content/new-galleries/2023/02/ddlj-box-office-re-release-shah-rukh-khan-kajols-magic-shows-a-300-jump-9977-days-later-this-classic-is-still-earning-in-double-digits-lakhs-0001.jpg"
                alt=""
                className="absolute w-full h-full left-0 top-0 object-cover object-bottom"
              />
              <div className="text absolute z-10 w-full h-full left-0 top-0 flex justify-center items-center flex-col">
                <h3 className="font-mont font-extrabold uppercase text-white  lg:text-3xl drop-shadow-lg shadow-black lg:leading-7 text-[22px] leading-6">
                  Bollywood Extravaganza: <br /> Lights, Camera, Action! 🎬
                </h3>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Esport;
