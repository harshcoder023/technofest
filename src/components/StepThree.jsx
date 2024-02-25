import React from "react";
import check from "../assets/check.png";
import Confetti from "react-confetti";

const StepThree = ({ errorMessage }) => {
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div>
        <div className="py-8 text-center text-lg flex flex-col gap-8 items-center justify-center">
          <div className=" w-20 h-20">
            <img className="w-full h-full object-cover" src={check} alt="" />
          </div>
          {errorMessage ? (
            <div className="error-message">
              <p>Error: {errorMessage}</p>
            </div>
          ) : (
            <div className="">
              <h1 className="text-lg font-medium lg:text-xl">
                Thank You for Participating!
              </h1>
              <p className="text-[16px] lg:text-[17px] leading-5 py-2.5 ">
                Your registration has been successfully submitted.
              </p>
              <p className="text-[16px] ">#technofest2024 🎉</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StepThree;
