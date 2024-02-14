import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseLineIcon from "remixicon-react/CloseLineIcon";

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
    {
      name: "Technical Quiz",
      team_size: 3,
      category: "Technical Events",
    },
    {
      name: "Technical Debate",
      team_size: 2,
      category: "Technical Events",
    },
    {
      name: "Management Games",
      team_size: 4,
      category: "Technical Events",
    },
    {
      name: "On The Spot Coding",
      team_size: 1,
      category: "Technical Events",
    },
    {
      name: "Exhibition of Projects",
      team_size: 3,
      category: "Technical Events",
    },
    {
      name: "Logo Designing",
      team_size: 1,
      category: "Technical Events",
    },
    {
      name: "AD Mad",
      team_size: 2,
      category: "Technical Events",
    },
    {
      name: "Startup Ideas",
      team_size: 3,
      category: "Technical Events",
    },
    {
      name: "Group Discussion",
      team_size: 3,
      category: "Technical Events",
    },
    {
      name: "App & Web Development",
      team_size: 2,
      category: "Technical Events",
    },
    {
      name: "E-Sports",
      team_size: 4,
      category: "Technical Events",
    },
    {
      name: "Earning by Learning",
      team_size: 3,
      category: "Technical Events",
    },
    {
      name: "Solo Dance",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Duet Dance",
      team_size: 2,
      category: "Cultural Events",
    },
    {
      name: "Group Dance",
      team_size: 6,
      category: "Cultural Events",
    },
    {
      name: "Solo Song",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Duet Song",
      team_size: 2,
      category: "Cultural Events",
    },
    {
      name: "Group Song",
      team_size: 6,
      category: "Cultural Events",
    },
    {
      name: "Click the Fest (Photography)",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Mimicry",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Poster Making",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Halloween Show",
      team_size: 2,
      category: "Cultural Events",
    },
    {
      name: "Mehendi",
      team_size: 2,
      category: "Cultural Events",
    },
    {
      name: "Rangoli",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Best out of waste",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Collage Making",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Volta Face",
      team_size: 1,
      category: "Cultural Events",
    },
    {
      name: "Couple Cricket",
      team_size: 1,
      category: "Sports Events",
    },
    {
      name: "Table Tennis",
      team_size: 1,
      category: "Sports Events",
    },
    {
      name: "Chess",
      team_size: 1,
      category: "Sports Events",
    },
    {
      name: "Badminton",
      team_size: 1,
      category: "Sports Events",
    },
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
                  // Validate full name
                  if (!value) {
                    return "Name is required.";
                  } else if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(value)) {
                    return "Invalid full name format";
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
                  } else if (!/^[A-Za-z0-9]+\/[A-Za-z0-9]+\/\d+$/.test(value)) {
                    return "Invalid roll number format";
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
  const eventsByCategory = events.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {});
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
          {/* Add the code to display categories and events here */}
          <div>
            {Object.entries(eventsByCategory).map(([category, events]) => (
              <div key={category}>
                <h3 className="text-md font-medium mb-1.5">{category} -</h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1.5 mb-4">
                  {events.map((event, index) => (
                    <div
                      className="rounded-lg px-2 py-1 cursor-pointer text-sm flex"
                      key={index}
                      onClick={() => {
                        setData((prevData) => ({
                          ...prevData,
                          selectedEvents: prevData.selectedEvents.includes(
                            event.name
                          )
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
                        backgroundColor: data.selectedEvents.includes(
                          event.name
                        )
                          ? "#FA7F5C"
                          : "transparent",
                        color: data.selectedEvents.includes(event.name)
                          ? "white"
                          : "black",
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
                          <CloseLineIcon color="white" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* ////////// */}
          {errorMessage && (
            <div className="error pb-2 text-sm text-red-500">
              {errorMessage}
            </div>
          )}
          {/* ////////// */}
          {renderTeamDetails(values)} {/* Pass values to renderTeamDetails */}
          <div className="flex flex-col gap-1.5">
            <button
              className="bg-[#FA7F5C] py-2 text-white rounded-md"
              type="submit"
              disabled={isSubmitting || data.selectedEvents.length === 0}
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
