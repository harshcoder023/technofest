import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { db } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const MultiStepForm = () => {
  const registrationsCollectionRef = collection(db, "registrations");
  const [errorMessage, setErrorMessage] = useState();

  const [data, setData] = useState({
    fullName: "",
    rollNo: "",
    year: "1",
    course: "Btech CSE",
    phoneNo: "",
    email: "",
    selectedEvents: [],
    teamDetails: {},
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [initialValues, setInitialValues] = useState({
    "Technical Quiz": [{ name: "", rollNo: "", phone: "" }],
    "Coding Competition": [
      { name: "", rollNo: "", phone: "" },
      { name: "", rollNo: "", phone: "" },
      { name: "", rollNo: "", phone: "" },
    ],
    "Group Discussion": [
      { name: "", rollNo: "", phone: "" },
      { name: "", rollNo: "", phone: "" },
      { name: "", rollNo: "", phone: "" },
    ],
    Hackathon: [{ name: "", rollNo: "", phone: "" }],
    // Add more event names with initial values as needed
  });

  const makeRequest = async (formData) => {
    const modifiedFormData = {
      ...formData,
      submissionTime: serverTimestamp(), // Add a timestamp field to the form data
      teamDetails: Object.keys(formData.teamDetails).map((eventName) => ({
        eventName,
        members: formData.teamDetails[eventName],
      })),
    };

    console.log("Form data - ", modifiedFormData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error("Failed to submit form. Please try again later.");
      await addDoc(registrationsCollectionRef, modifiedFormData);
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error("Error adding document: ", error);
      setErrorMessage(error.message); // Assuming you have an error message state
      setCurrentStep((prev) => prev + 1); // Move to StepThree even if there's an error
    }
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
      setData={setData}
      initialValues={initialValues}
      setInitialValues={setInitialValues}
    />,
    <StepThree errorMessage={errorMessage} />,
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#0e1538] px-3 font-sans">
      <div className="px-7 shadow py-4 border bg-white rounded-md overflow-hidden w-full max-w-[800px]">
        {steps[currentStep]}
      </div>
    </div>
  );
};

export default MultiStepForm;
