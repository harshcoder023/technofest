import React from "react";
import Lottie from "react-lottie";
import Data from "../animations/Animation - 1707033212018.json";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
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
      className="  bg-[#0e1538] py-12 h-[70vh] lg:h-[50vh] relative"
      id="contact"
    >
      <div data-aos="fade-" className="absolute bottom-[-70px] right-0">
        <Lottie
          className=" bg-transparent"
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
      <h2
        data-aos="fade-"
        className=" text-white font-mont text-2xl font-medium text-center mb-4 lg:mb-8 lg:text-3xl lg:font-semibold"
      >
        Contact
      </h2>
      <div className="container text-white w-[80%] mx-auto">
        <div className="mb-6">
          <h3 className="flex gap-4">
            <span className=" flex gap-2">
              <PhoneFillIcon color="#fff" /> Phone :{" "}
            </span>
            <a href="">9485518900</a>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
