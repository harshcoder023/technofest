import React, { createContext, useState } from "react";

export const eventContext = createContext();

const Context = (props) => {
  const events = [
    // Technical Events
    {
      id: 0,
      name: "Technical Quiz",
      details: [
        "Each team can have three students",
        "The medium of quiz will be English only",
        "There will be a Pen-Paper test for screening purpose in case of more than 10 teams",
        "Only 10 teams shall be selected for the next round (Puzzle Round)",
        "If there is any tie amongst the teams in the Pen-Paper round, then decision shall be taken through a special oral test amongst the tied teams only.",
        "The quiz will be based on aptitude, reasoning, technical and management fields.",
        "Selected teams will go for next Rounds.",
      ],
      image:
        "https://cdn.pixabay.com/photo/2019/05/22/20/06/brainstorm-4222409_640.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Anurag Seghal (8569803596), for any queries.",
      team_size: 2,
    },
    {
      id: 1,
      name: "Technical Debate",
      details: [
        "Debate can have Team of 2 participants either boys, girls or both",
        "The medium of expression will English and Hindi",
        "One speaker shall speak for the motion and the other against",
        "The subject of the debate will be announced 24 hours before the programme and the participants shall speak after drawing lots to decide who is to speak first, second and so on.",
        "Time allotted is not less than 3 minutes And not more than 4 minutes",
      ],
      image:
        "https://cdn.pixabay.com/photo/2019/04/23/04/50/consulting-4148449_640.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Nimit Shekhawat (9467015594) and Chhavi Kapoor (9991074299), for any queries.",
      team_size: 2,
    },
    // Sports Events
    {
      id: 2,
      name: "Management Games",
      details: [
        "A single team comprising of either three or four participants",
        "Duration of event will be 01:30 hours.",
      ],
      image:
        "https://img.freepik.com/free-photo/friends-together-play-board-games-table-football_146671-15405.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=ais",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator: "Harsh Goyal",
      team_size: 2,
    },
    {
      id: 3,
      name: "On The Spot Coding",
      details: [
        "The students will be given source code and he needs to debug the code",
        "The students will be given real life problem and he needs design its algorithm",
        "The students will develop the program using any programing language",
        "The students will be given source code and he needs to identify the language of the code",
      ],
      image:
        "https://img.freepik.com/free-photo/person-working-html-computer_23-2150040424.jpg?size=626&ext=jpg&ga=GA1.1.9092553.1705229888&semt=ais",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Siddharth (8813055897), for any queries.",
      team_size: 2,
    },
    // Cultural Events
    {
      id: 4,
      name: "Exhibition of Projects",
      details: [
        "Projects will be showcased in team",
        "The students will present and demonstrate the prototype of projects",
      ],
      image:
        "https://media.istockphoto.com/id/1059427712/photo/the-late-teenager-boy-explaining-to-the-group-of-kids-and-adults-how-the-electricity-works.jpg?s=612x612&w=0&k=20&c=NuUym1wYmdpN15b0M0CmjaFKWEYKYR2zr4KHURIhyX4=",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Shryesh (9034967083) and Mudit (9468227175), for any queries.",
      team_size: 2,
    },
    {
      id: 5,
      name: "Logo Designing",
      details: [
        "Each participant need to prepare one digital LOGO using any technique",
        "2 hours will be allotted to each participant",
      ],
      image:
        "https://media.istockphoto.com/id/1493711508/photo/asian-woman-graphic-designer-concentrate-on-working-in-offices-at-night.jpg?s=2048x2048&w=is&k=20&c=CjFwpYdvkII78RVBcZ97ZUVG2Rq55EHZSNxW9qYIX70=",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Garvit (9350026513), for any queries.",
      team_size: 2,
    },
    {
      id: 6,
      name: "AD Mad",
      details: [
        "A single team comprising of two participants",
        "Each team need to prepare digital advertisement",
        "2 hours will be allotted to each team",
      ],
      image:
        "https://www.consultantsreview.com/newstransfer/upload/6l6gtrsz_83105515-dizain-advertising.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Harsh (9996923353), for any queries.",
      team_size: 2,
    },
    {
      id: 7,
      name: "Startup Ideas",
      details: [
        "A single team comprising of either two or three participants",
        "Each team need to present their ideas using Power point presentation",
      ],
      image:
        "https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/startupidea4.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Anmol (9728405909), for any queries.",
      team_size: 2,
    },
    {
      id: 8,
      name: "Group Discussion",
      details: [
        "Group event",
        "Topic will be provided before 3 hours from the commencement of event",
        "Duration of event will be 30 minutes",
      ],
      image: "https://miro.medium.com/v2/resize:fit:1144/0*XLeoYbOa9fjeCjiO",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Harsh Goyal (9485518900) and Keshav (8570886181), for any queries.",
      team_size: 2,
    },
    {
      id: 9,
      name: "App & Web Development",
      details: [
        "Judging criteria will evaluate creativity, functionality, user experience with prizes awarded accordingly.",
      ],
      image:
        "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator: "Harsh Goyal",
      team_size: 2,
    },
    {
      id: 10,
      name: "E-Sports",
      details: [
        "The in-game rooms that are going to be created for the tournament are going to be for squad participation only.",
        "The team can be formed with maximum 4 players; the minimum requirement for the team will be at least 2 players.",
        "The players can play on android/iOS Mobile only (no tablet or iPad will be allowed)",
        "Only in-game voice chat should be used after the game is started till its completion.",
        "Any use of unfair means such as Aim bot, Trigger bot, ESP will result into team disqualification.",
      ],
      image:
        "https://www.sportspromedia.com/wp-content/uploads/2023/01/Esports-India-1.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Paramveer (8053485953) and Sumit (8398858499), for any queries.",
      team_size: 2,
    },
    {
      id: 11,
      name: "Earning by Learning",
      details: [
        "Participants need to set up a food court and Gaming stall",
        "Income and expenditure will rest with the participant itself",
      ],
      image:
        "https://i.pinimg.com/736x/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "technical-events",
      coordinator:
        "Contact our coordinators, Akhilesh Shekhawat (9416210194) and Anurag Seghal (8569803596), for any queries.",
      team_size: 2,
    },
    {
      id: 12,
      name: "Solo Dance",
      details: [
        "Each participant can perform dance on any song.",
        "The theme should not be offensive.",
        "The time allotted for the event is minimum 4 minutes and maximum 6 minutes.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 13,
      name: "Duet Dance",
      details: [
        "Each team (either two boys/girls or boy-girl) can perform dance on any song.",
        "The theme should not be offensive.",
        "The time allotted for the event is minimum 4 minutes and maximum 6 minutes.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 14,
      name: "Group Dance",
      details: [
        "Each team (not more than 6 members) can perform dance on any song.",
        "The theme should not be offensive.",
        "The time allotted for the event is minimum 6 minutes and maximum 8 minutes.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 15,
      name: "Solo Song",
      details: [
        "Each participant can sing any song.",
        "The theme should not be offensive.",
        "The time allotted for the event is minimum 3 minutes and maximum 5 minutes.",
      ],
      image:
        "https://c1.wallpaperflare.com/preview/649/726/465/j-cole-music-rap-rapper.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 16,
      name: "Duet Song",
      details: [
        "Each team (either two boys/girls or boy-girl) can sing any song.",
        "The theme should not be offensive.",
        "The time allotted for the event is minimum 3 minutes and maximum 5 minutes.",
      ],
      image: "https://pbs.twimg.com/media/F-Rr36QXcAAdYFg.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 17,
      name: "Group Song",
      details: [
        "Each team (not more than 6 members) can sing any song.",
        "The theme should not be offensive.",
        "The time allotted for the event is minimum 6 minutes and maximum 8 minutes.",
      ],
      image: "https://i.insider.com/59724b9cb4ec01cb168b466e?width=700",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 18,
      name: "Click the Fest (Photography)",
      details: [
        "The participant has to bring his/her own digital camera. The participant shall bring data cable also.",
        "The digital camera should have memory card which will be formatted before the commencement of the contest.",
        "The time limit will be 2:30 hours.",
        "The participant has to capture five photographs on the theme given.",
      ],
      image:
        "https://media.istockphoto.com/id/1459383811/photo/photographer-with-camera-on-tripod-at-sunset.jpg?s=612x612&w=0&k=20&c=_mxAB14gOALR3aS_znbhwH8WrQ-JqsG3HygKbWPtzVU=",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 19,
      name: "Mimicry",
      details: [
        "Each participant will be given maximum 5 minutes time but not less than 3 minutes for the performance.",
        "Use variety of sounds and voices imitated.",
      ],
      image:
        "https://media.licdn.com/dms/image/C5612AQHuCSeO_OZ3qQ/article-cover_image-shrink_720_1280/0/1596828778279?e=2147483647&v=beta&t=D7gZZh43hjmpvU3aoq5qYS2sHDb1vRsTOS6G9GPs-N4",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 20,
      name: "Poster Making",
      details: [
        "This event will be conducted on the spot and participants will be required to do poster making on the subject given.",
        "Participants will bring their own material.",
        "Duration will not be more than 2:30 hours.",
      ],
      image:
        "https://www.pmskillindiamission.org/assets/images/skills/poster-making.webp",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 21,
      name: "Halloween Show",
      details: [
        "This event can have participant combination (either one or two).",
        "The duration of the event will be minimum 2 minutes and maximum 4 minutes.",
        "The act must not be offensive.",
      ],
      image:
        "https://dnwp63qf32y8i.cloudfront.net/61611b908567a40ee273dd0be2294e24b51e0471",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 22,
      name: "Mehendi",
      details: [
        "This event will be required to have two participants – one artist and other is subject (Model).",
        "Mehendi tattoos are not allowed.",
        "Participant need to bring own material.",
        "Mehendi design must cover one hand till wrist.",
        "Duration will be 1:00 hour.",
      ],
      image:
        "https://media.assettype.com/Prabhatkhabar%2F2022-08%2F92f726f8-3ae6-4393-8120-108fd42ba176%2Fm3.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 23,
      name: "Rangoli",
      details: [
        "This event can have one participant.",
        "The event will be conducted on the spot.",
        "Duration will not be more than 2:30 hours.",
        "Participants will bring their own material.",
        "Only one medium shall be used - Flower petals, saw dust or rangoli colours.",
        "Participant shall have to prepare a rangoli within the space provided.",
      ],
      image:
        "https://media.assettype.com/Prabhatkhabar%2F2023-11%2Ffad6d46d-efd6-4cce-b58d-4f0dac6b1e41%2Fr2__1_.jpg?auto=format%2Ccompress&w=1200",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 24,
      name: "Best out of waste",
      details: [
        "This event can have one participant.",
        "The topic of the event will be announced 24 hours before the commencement of the event.",
        "The event will be conducted on the spot.",
        "Duration will not be more than 2:30 hours.",
        "Participants are required to bring their own waste material for operating the event.",
      ],
      image:
        "https://img.sheroes.in/img/uploads/sheroespage/logoes/1517993979cardboard-tube-monster.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 25,
      name: "Collage Making",
      details: [
        "This event can have one participant.",
        "The topic of collage will be announced 24 hours before the commencement of the event.",
        "The event will be conducted on the spot.",
        "Duration will not be more than 2:30 hours.",
        "Participants are required to bring their own scissors and other materials for operating collage.",
      ],
      image:
        "https://www.researchgate.net/publication/303035425/figure/fig2/AS:361302582804483@1463152656461/Collages-made-by-participants-in-the-first-collage-making-activity-experience-teaching.png",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 26,
      name: "Volta Face",
      details: [
        "This event can have one participant only.",
        "The participant will bring his/her own material.",
        "The duration of event is 1:30 hours.",
        "The oral explanation will be asked on the spot.",
        "Dermatologically safe colors are to be used.",
      ],
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "cultural-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 27,
      name: "Couple Cricket",
      details: ["The event will be conducted as per rules."],
      image: "https://www.weddingsutra.com/images/cricketer_kunal_01.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "sports-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 28,
      name: "Table Tennis",
      details: ["The event will be conducted as per rules."],
      image:
        "https://www.sportcal.com/wp-content/uploads/sites/32/2023/08/main64e8c3e155fce.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "sports-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 29,
      name: "Chess",
      details: ["The event will be conducted as per rules."],
      image:
        "https://assetsio.reedpopcdn.com/chess-playing-hand.jpeg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "sports-events",
      coordinator: "",
      team_size: 2,
    },
    {
      id: 30,
      name: "Badminton",
      details: ["The event will be conducted as per rules."],
      image:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2017-10/20/full/1508502526-7523.jpg",
      timing: "Timings to be announced soon. Stay tuned!",
      category: "sports-events",
      coordinator: "",
      team_size: 2,
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
