import React from "react";
import Lottie from "react-lottie";
import Data from "../animations/Animation - 1707029151421.json";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const FAQ = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const questionAnswerArray = [
    {
      question: ". What is TechFusion Fest?",
      answer:
        "TechFusion Fest is an annual extravaganza that brings together college students from various disciplines to showcase their talents in three major categories: Technical, Cultural, and Sports. It is a platform designed to foster creativity, innovation, and healthy competition among the youth.",
    },
    {
      question: " When and where will TechFusion Fest take place?",
      answer:
        "TechFusion Fest 2024 will be held on 28th Feb - 1st March at Vaish College of Engineering , Rohtak. The event promises a day filled with excitement, learning, and fun.",
    },
    {
      question: " What are the main events at TechFusion Fest?",
      answer:
        " TechFusion Fest comprises three main categories \n Technical Events: Engage in cutting-edge tech challenges, coding competitions, and innovative project showcases. \nCultural Events: Showcase your artistic talents through dance, music, drama, and various cultural performances. \nSports Events: Participate in friendly sports competitions, including indoor and outdoor games.",
    },
    {
      question: " Who can participate in TechFusion Fest?",
      answer:
        "TechFusion Fest is exclusively for college students. All undergraduate and postgraduate students are welcome to participate in the events. There is no participation fee, making it accessible to everyone.",
    },
    {
      question: "Is there any participation fee for the events?",
      answer:
        " No, there is no participation fee for any of the events at TechFusion Fest. We believe in providing an inclusive platform for students to showcase their skills without financial barriers.",
    },
    {
      question: " How can I register for TechFusion Fest?",
      answer:
        "Registration details is provided in this website itself. Follow the registration process and make sure to submit the required information accurately.",
    },
  ];
  return (
    <div
      className=" bg-[#0e1538] px-3 py-12 overflow-hidden min-h-[93vh] text-white border"
      id="doubts"
    >
      <div
        data-aos="fade-right"
        className="w-full text-center font-sans lg:flex lg:flex-col lg:items-center"
      >
        <h2 className="text-2xl lg:text-3xl lg:font-semibold font-medium font-mont">
          Do you have Questions ?
        </h2>
        <p className="text-sm py-2 lg:py-4 lg:text-[16px]">
          We have answers (well, most of the times!)
        </p>
        <p className="font-sans text-sm lg:text-[16px] lg:w-[60%]">
          Below you’ll find answers to the most common questions you may have on
          TechnoFest. If you still can’t find the answer you’re looking for,
          just DM us on our <a href="">Instagram Page</a>
        </p>
      </div>
      <div className=" flex flex-col  justify-center bg-[#0e1538]">
        <div className="relative border-b-[1px] border-gray-500  w-full h-[280px]">
          <div data-aos="" className=" absolute bottom-[-17px] w-full">
            <Lottie options={defaultOptions} height={280} width={280} />
          </div>
        </div>
        <div className="font-sans pt-8">
          <h3 className="text-center text-xl font-medium font-mont mb-6 lg:text-2xl">
            TechnoFest FAQs
          </h3>
          <div
            data-aos="fade-left"
            className="w-full px-4 lg:flex lg:justify-center"
          >
            <Accordion
              allowZeroExpanded={true}
              className="bg-white rounded-md overflow-hidden lg:w-[60%]"
            >
              {questionAnswerArray.map((item, index) => (
                <AccordionItem
                  key={index}
                  className="border-b-[1px] border-gray-300"
                >
                  <AccordionItemHeading className="font-sans">
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-4 pt-4 pb-5">
                    <p className=" text-gray-500 font-sans text-sm">
                      {item.answer}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
