import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// import stepTwoValidationSchema from "./StepTwoValidationSchema";

const StepTwo = ({
  next,
  prev,
  data,
  setData,
  initialValues,
  setInitialValues,
}) => {
  const events = [
    { name: "Technical Quiz", team_size: 3 },
    { name: "Technical Debate", team_size: 2 },
    { name: "On the spot coding", team_size: 1 },
    { name: "Exhibition of Projects", team_size: 2 },
    { name: "Logo Designing", team_size: 1 },
    { name: "App and Web Dev", team_size: 2 },
    { name: "E-sports", team_size: 4 },
    { name: "Solo Dance", team_size: 1 },
    { name: "Poster Making", team_size: 1 },
    { name: "Best out of waste", team_size: 1 },
  ];
  const [errorMessage, setErrorMessage] = useState("");

  const extractTeamDetails = (values) => {
    // Extract team details from form values
    const teamDetails = {};
    data.selectedEvents.forEach((eventName) => {
      teamDetails[eventName] = [];
      if (values.teamDetails && values.teamDetails[eventName]) {
        for (let i = 0; i < values.teamDetails[eventName].length; i++) {
          teamDetails[eventName].push({
            name: values.teamDetails[eventName][i]?.name || "",
            rollNo: values.teamDetails[eventName][i]?.rollNo || "",
            phone: values.teamDetails[eventName][i]?.phone || "",
          });
        }
      }
    });
    return teamDetails;
  };
  const handleSubmit = (values) => {
    if (data.selectedEvents.length === 0) {
      setErrorMessage("You have to select at least 1 event.");
      return;
    }
    const teamDetails = extractTeamDetails(values);
    next(
      {
        ...values,
        selectedEvents: data.selectedEvents,
        teamDetails: teamDetails,
      },
      true
    );
  };

  // let initialValues = ;

  const renderTeamDetails = (values) => {
    return data.selectedEvents.map((eventName) => {
      const teamSize = data.teamDetails[eventName]?.length + 1 || 0;
      if (!teamSize || teamSize === 1) return null;

      const memberFields = [];
      const numTeamMembers = teamSize - 1;

      for (let i = 0; i < numTeamMembers; i++) {
        memberFields.push(
          <div key={`${eventName}-${i}`}>
            <p className="mb-1.5 text-sm">Member {i + 1}</p>
            <div className="flex gap-2">
              <Field
                className="border py-1 px-1.5 w-[50%] focus:border-gray-400 outline-none"
                name={`teamDetails.${eventName}[${i}].name`}
                placeholder="Name"
                validate={(value) => {
                  if (!value) {
                    return "Name is required.";
                  }
                }}
              />
              <Field
                className="border py-1 px-1.5 w-[50%] focus:border-gray-400 outline-none"
                name={`teamDetails.${eventName}[${i}].rollNo`}
                placeholder="Roll No."
                validate={(value) => {
                  if (!value) {
                    return "Roll No. is required.";
                  }
                }}
              />
            </div>
            <Field
              className="border py-1 px-1.5 mt-2 w-full focus:border-gray-400 outline-none mb-3"
              name={`teamDetails.${eventName}[${i}].phone`}
              placeholder="Phone No."
              validate={(value) => {
                if (!value) {
                  return "Phone No. is required.";
                } else if (!/^\d{10}$/.test(value)) {
                  return "Invalid phone number. Must be a 10-digit number.";
                }
              }}
            />
            <ErrorMessage
              name={`teamDetails.${eventName}[${i}].name`}
              component="div"
              className="error text-xs text-red-400 pb-2"
            />
            <ErrorMessage
              name={`teamDetails.${eventName}[${i}].rollNo`}
              component="div"
              className="error text-xs text-red-400 pb-2"
            />
            <ErrorMessage
              name={`teamDetails.${eventName}[${i}].phone`}
              component="div"
              className="error text-xs text-red-400 pb-2"
            />
          </div>
        );
      }

      return (
        <div className="mt-4" key={eventName}>
          <h3 className="">
            {eventName} <span className="italic">(Team Details)</span>
          </h3>
          <div className="pt-4 pb-2.5">{memberFields}</div>
        </div>
      );
    });
  };

  return (
    <Formik
      initialValues={{ ...data, teamDetails: initialValues }}
      // validationSchema={stepTwoValidationSchema()}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form>
          {/* ////////// */}
          <h2 className="text-lg font-medium mb-4">Event Details</h2>
          <div className="flex flex-wrap gap-x-2 gap-y-1.5 mb-4">
            {events.map((event, index) => (
              <div
                className="rounded-lg px-2 py-1 cursor-pointer text-sm"
                key={index}
                onClick={() => {
                  setErrorMessage("");
                  setData((prevData) => ({
                    ...prevData,
                    selectedEvents: prevData.selectedEvents.includes(event.name)
                      ? prevData.selectedEvents.filter(
                          (eventName) => eventName !== event.name
                        )
                      : [...prevData.selectedEvents, event.name],
                    teamDetails: {
                      ...prevData.teamDetails,
                      [event.name]: Array(event.team_size - 1).fill({
                        name: "",
                        rollNo: "",
                        phone: "",
                      }),
                    },
                  }));
                }}
                style={{
                  backgroundColor: data.selectedEvents.includes(event.name)
                    ? "skyblue"
                    : "transparent",
                }}
              >
                {event.name}
                {data.selectedEvents.includes(event.name) && (
                  <span
                    style={{ marginLeft: "5px" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setData((prevData) => ({
                        ...prevData,
                        selectedEvents: prevData.selectedEvents.filter(
                          (eventName) => eventName !== event.name
                        ),
                        teamDetails: {
                          ...prevData.teamDetails,
                          [event.name]: undefined,
                        },
                      }));
                    }}
                  >
                    ❌
                  </span>
                )}
              </div>
            ))}
          </div>
          {errorMessage && (
            <div className="error pb-2 text-sm text-red-500">
              {errorMessage}
            </div>
          )}
          {/* ////////// */}
          {renderTeamDetails(values)} {/* Pass values to renderTeamDetails */}
          <div className="flex flex-col gap-1.5">
            <button
              className="bg-green-600 py-2 text-white rounded-md"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              className="text-sm"
              onClick={() => {
                const teamDetails = extractTeamDetails(values);
                const updatedInitialValues = {
                  ...initialValues,
                  ...teamDetails,
                };

                setInitialValues(updatedInitialValues);

                prev({
                  ...values,
                  selectedEvents: data.selectedEvents,
                  teamDetails: teamDetails,
                });
              }}
            >
              or{" "}
              <span className=" text-sm underline underline-offset-2">
                Go Back
              </span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
