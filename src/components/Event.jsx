import React, { useContext } from "react";
import { eventContext } from "../utils/Context";
import { useParams } from "react-router-dom";

const Event = () => {
  const { eventData } = useContext(eventContext);
  const { id } = useParams();
  const event = eventData.find((obj) => obj.id == id);

  return (
    <div className="w-full min-h-[100vh] bg-[#0e1538] px-3 pt-[7vh] flex items-center justify-center font-mont">
      <div className="container max-w-[900px] mx-auto md:pt-0 lg:px-0 bg-white shadow rounded-md lg:flex overflow-hidden">
        <div className="h-[40vh] lg:h-[60vh] lg:w-1/2">
          <img
            className="w-full h-full object-cover object-center"
            src={event.image}
            alt=""
          />
        </div>
        <div className="px-4 py-4 lg:px-6 lg:py-8 lg:w-1/2">
          <span className="inline-block bg-green-600 text-white px-2 rounded-md text-xs py-1">
            {event.category}
          </span>
          <h1 className="text-lg font-[600] uppercase mt-2">{event.name}</h1>
          <p className="text-sm font-[500]">{event.timing}</p>
          <h3 className="text-md mt-2.5 font-medium">Event Details -</h3>
          <ul className="mb-4 list-inside list-disc mt-1 text-sm">
            {event.details.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Event;
