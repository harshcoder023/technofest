import React, { useContext } from "react";
import { eventContext } from "../utils/Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryEvents = () => {
  const { category } = useParams();
  const { eventData } = useContext(eventContext);
  const getEventsByCategory = (category) => {
    // Filter the events array based on the provided category
    const filteredEvents = eventData.filter(
      (event) => event.category === category
    );
    return filteredEvents;
  };

  const eventsInCategory = getEventsByCategory(category);
  const formattedCategoryName = category
    .split("-") // Split by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(" "); // Join with spaces
  // console.log(eventsInCategory);
  return (
    <div className="w-full min-h-[100vh] pb-12 pt-[7vh] lg:pb-0 bg-[#0e1538] font-mont">
      <h2 className="text-xl uppercase font-[700] text-center pt-12 mb-8 lg:text-2xl text-white">
        {formattedCategoryName}
      </h2>
      <div className="flex lg:gap-4 gap-x-3 gap-y-3 flex-wrap items-center justify-center w-full">
        {eventsInCategory.map((event, index) => (
          <Link to={`/events/${event.id}`} key={index}>
            <div className="card w-[190px] max-[410px]:w-[165px] h-[215px] lg:w-[250px] lg:h-[250px] bg-white rounded-md shadow  overflow-hidden">
              <div className="w-full h-[120px] lg:h-[150px]">
                <img
                  src={event.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-3 pt-3 lg:pt-3">
                <h3 className="text-sm uppercase leading-4 font-[600]  lg:mb-0.5 lg:text-[15px]">
                  {event.name}
                </h3>
                <span className="text-xs font-medium lg:text-[13px]">
                  {event.timing}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryEvents;
