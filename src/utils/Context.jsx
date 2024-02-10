import React, { createContext, useState } from "react";

export const eventContext = createContext();

const Context = (props) => {
  const events = [
    // Technical Events
    {
      id: 0,
      name: "On the spot coding",
      details: [
        "Participants must be in teams of two.",
        "Questions will cover various technical topics.",
        "Prizes for the top three teams.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "9:00 AM - 12:00 PM",
      category: "technical-events",
    },
    {
      id: 1,
      name: "Coding Competition",
      details: [
        "Participants must bring their own laptops.",
        "Coding challenge will focus on algorithms and problem-solving.",
        "Top coder will receive a special prize.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "1:00 PM - 4:00 PM",
      category: "technical-events",
    },
    // Sports Events
    {
      id: 2,
      name: "Football Tournament",
      details: [
        "Teams must have a minimum of 7 players.",
        "Matches will be played in knockout format.",
        "Final match will be held under floodlights.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "10:00 AM - 6:00 PM",
      category: "sports-events",
    },
    {
      id: 3,
      name: "Badminton Singles",
      details: [
        "Open to all participants.",
        "Matches will be played in best-of-three sets.",
        "Shuttles will be provided by the organizers.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "2:00 PM - 5:00 PM",
      category: "sports-events",
    },
    // Cultural Events
    {
      id: 4,
      name: "Solo Singing Competition",
      details: [
        "Participants can choose any song of their choice.",
        "Performance duration should not exceed 5 minutes.",
        "Judges will evaluate based on voice quality and stage presence.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "3:00 PM - 6:00 PM",
      category: "cultural-events",
    },
    {
      id: 5,
      name: "Solo Singing Competition",
      details: [
        "Participants can choose any song of their choice.",
        "Performance duration should not exceed 5 minutes.",
        "Judges will evaluate based on voice quality and stage presence.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "3:00 PM - 6:00 PM",
      category: "cultural-events",
    },
    {
      id: 6,
      name: "Solo Singing Competition",
      details: [
        "Participants can choose any song of their choice.",
        "Performance duration should not exceed 5 minutes.",
        "Judges will evaluate based on voice quality and stage presence.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "3:00 PM - 6:00 PM",
      category: "cultural-events",
    },
    {
      id: 7,
      name: "Solo Singing Competition",
      details: [
        "Participants can choose any song of their choice.",
        "Performance duration should not exceed 5 minutes.",
        "Judges will evaluate based on voice quality and stage presence.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "3:00 PM - 6:00 PM",
      category: "cultural-events",
    },
    {
      id: 8,
      name: "Dance Battle",
      details: [
        "Participants must register in pairs.",
        "Dance styles include hip-hop, contemporary, and freestyle.",
        "Audience applause will determine the winner.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "7:00 PM - 10:00 PM",
      category: "cultural-events",
    },
  ];

  const [eventData, setEventData] = useState(events);

  return (
    <eventContext.Provider value={{ eventData, setEventData }}>
      {props.children}
    </eventContext.Provider>
  );
};

export default Context;
