import React from "react";
import Lottie from "react-lottie";
import Data from "../animations/Animation - 1707033212018.json";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import PhoneLineIcon from "remixicon-react/PhoneLineIcon";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
import PagesLineIcon from "remixicon-react/PagesLineIcon"
const Contact = () => {
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
      className="  bg-[#0e1538] py-12 h-[85vh] max-[410px]:h-[100vh] lg:h-[60vh] relative"
      id="contact"
    >
      <div data-aos="fade-" className="absolute bottom-[-70px] right-0">
        <Lottie
          className=" bg-transparent"
          options={defaultOptions}
          height={400}
          width={450}
        />
      </div>
      <h2
        // data-aos="fade-top"
        className=" text-white font-mont text-3xl font-[800] uppercase text-center mb-7 lg:text-3xl lg:font-semibold lg:mb-12"
      >
        Contact
      </h2>
      <div className="container text-white lg:w-[60%] w-[85%] mx-auto ">
        {/* <div className="mb-6">
          <h3 className="flex flex-col gap-4">
            <span className=" flex  gap-2">
              <PhoneFillIcon color="#fff" /> Phone :{" "}
            </span>
            <div className="flex">
              <div className="border-r border-gray-500 pr-3">
                <h4>
                  <a href="tel:7419293392">Niyati Jain (7419293392)</a>
                </h4>
                <h4>
                  <a href="tel:9812689211"> Dr. Aastha Jain (9812689211)</a>
                </h4>
              </div>
              <div className="pl-3 border-r border-gray-500 pr-3">
                <h4>
                  <a href="tel:9812314747"> Jyoti Sehgal (9812314747)</a>
                </h4>
                <h4>
                  <a href="tel:9812066800"> Alok Gupta (9812066800)</a>
                </h4>
              </div>
              <div className="pl-3">
                <h4>
                  <a href="tel:9416657744"> Dr. Sanjay Jindal (9416657744)</a>
                </h4>
                <h4>
                  <a href="tel:9034458153"> Akhil (9034458153)</a>
                </h4>
              </div>
            </div>
          </h3>
          <p className="text-sm mt-2">
            Feel free to call us for any inquiries or assistance.
          </p>
        </div>
        <div>
          <h3 className="flex gap-4">
            <span className=" flex gap-2">
              <InstagramFillIcon color="#fff" /> Instagram :{" "}
            </span>
            <a href="">@technofest</a>
          </h3>
          <p className="text-sm mt-2">
            Follow us on Instagram for updates, behind-the-scenes, and more!
          </p>
        </div> */}
        <div className="flex  lg:gap-20 justify-between lg:justify-start ">
          <div className="left">
            <h3 className="text-xl font-medium mb-4">Phone</h3>
            <div className="hidden lg:block">
              <h4 className="flex font-light items-center gap-2 text-[14px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:7419293392">Niyati Jain (7419293392)</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9812689211"> Dr. Aastha Jain (9812689211)</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9812314747"> Jyoti Sehgal (9812314747)</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9812066800"> Alok Gupta (9812066800)</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9416657744"> Dr. Sanjay Jindal (9416657744)</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9034458153"> Akhil (9034458153)</a>
              </h4>
            </div>
            <div className="lg:hidden">
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9416657744"> Dr. Sanjay Jindal</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[14px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:7419293392">Niyati Jain</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9812689211"> Dr. Aastha Jain</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9812314747"> Jyoti Sehgal</a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9812066800"> Alok Gupta</a>
              </h4>

              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PhoneFillIcon color="#fff" size={16} />
                <a href="tel:9034458153"> Akhil</a>
              </h4>
            </div>
          </div>
          <div className="right w-28 lg:w-auto">
            <h3 className="text-xl font-medium mb-4">Social</h3>
            <div>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <InstagramFillIcon color="#fff" size={16} />
                <a href="https://www.instagram.com/vcefest/" target="_blank">
                  vcefest
                </a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <InstagramFillIcon color="#fff" size={16} />
                <a href="https://www.instagram.com/vcertkofficial/" target="_blank">
                  vcertkofficial
                </a>
              </h4>
              <h4 className="flex font-light items-center gap-2 text-[15px]">
                <PagesLineIcon color="#fff" size={16} />
                <a href="https://vcertk.com/" target="_blank">
                  vcertk
                </a>
              </h4>
            </div>
          </div>
        </div>
        <p className="mt-8 font-light">
          {" "}
          Feel free to call us for any inquiries or assistance.
        </p>
        <p className="font-light">
          {" "}
          Follow us on Instagram for updates, behind-the-scenes, and more!
        </p>
      </div>
    </div>
  );
};

export default Contact;
