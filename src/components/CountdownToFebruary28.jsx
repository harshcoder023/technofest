// import React from "react";
// import { useEffect, useState } from "react";

// const useCountdown = (targetDate) => {
//   const countDownDate = new Date(targetDate).getTime();

//   const [countDown, setCountDown] = useState(
//     countDownDate - new Date().getTime()
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountDown(countDownDate - new Date().getTime());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countDownDate]);

//   return getReturnValues(countDown);
// };

// const getReturnValues = (countDown) => {
//   // calculate time left
//   const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//   return [days, hours, minutes, seconds];
// };
// const ExpiredNotice = () => {
//   return (
//     <div className="expired-notice">
//       <span>Expired!!!</span>
//       <p>Please select a future date and time.</p>
//     </div>
//   );
// };

// const ShowCounter = ({ days, hours, minutes, seconds }) => {
//   return (
//     <div className="show-counter">
//       <a
//         href="https://tapasadhikary.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="countdown-link"
//       >
//         <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
//         <p>:</p>
//         <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
//         <p>:</p>
//         <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
//         <p>:</p>
//         <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
//       </a>
//     </div>
//   );
// };

// const DateTimeDisplay = ({ value, type, isDanger }) => {
//   return (
//     <div className={isDanger ? "countdown danger" : "countdown"}>
//       <p>{value}</p>
//       <span>{type}</span>
//     </div>
//   );
// };

// const CountdownTimer = ({ targetDate }) => {
//   const [days, hours, minutes, seconds] = useCountdown(targetDate);

//   if (days + hours + minutes + seconds <= 0) {
//     return <ExpiredNotice />;
//   } else {
//     return (
//       <ShowCounter
//         days={days}
//         hours={hours}
//         minutes={minutes}
//         seconds={seconds}
//       />
//     );
//   }
// };

// export default CountdownTimer;

import React from "react";
import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex gap-3 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-[#FA7F5C] px-5 py-4 rounded-md absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={`countdown ${
        isDanger ? "danger" : ""
      } flex flex-col items-center`}
    >
      <p className="text-3xl">{value}</p>
      <span className="text-sm">{type}</span>
    </div>
  );
};

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export const CountdownToFebruary28 = () => {
  // Target date is February 28, 2024, 12:00 am
  const targetDate = new Date("2024-02-28T00:00:00").getTime();

  return <CountdownTimer targetDate={targetDate} />;
};
