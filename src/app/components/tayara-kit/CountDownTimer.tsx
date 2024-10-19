/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import Divider, { Orientation } from "./Divider";

export interface TimeOptions {
  days: number | string;
  hours: number | string;
  minutes: number;
  seconds: number;
}

interface CountDownTimerProps {
  targetDateTime: string; // Accept a specific date and time as a prop
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({ targetDateTime }) => {
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const setNewTime = () => {
    const countdownDate: any = dayjs(targetDateTime);
    const currentTime: any = dayjs();
    const distanceToDate = countdownDate - currentTime;

    if (distanceToDate <= 0) {
      // Handle the case when the target date and time have passed
      return;
    }

    let days: any = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
    let hours: any = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes: any = Math.floor(
      (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds: any = Math.floor((distanceToDate % (1000 * 60)) / 1000);

    const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    days = `${days}`;
    if (numbersToAddZeroTo.includes(hours)) {
      hours = `0${hours}`;
    } else if (numbersToAddZeroTo.includes(minutes)) {
      minutes = `0${minutes}`;
    } else if (numbersToAddZeroTo.includes(seconds)) {
      seconds = `0${seconds}`;
    }

    setState({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [targetDateTime]);
  // const [state, setState] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   if (TodaysMatchs.length === 0) {
  //     window.location.reload();
  //     localStorage.removeItem('SelectedMatch');
  //     setSelectedMatch({});
  //   }
  // }, []);

  // const setNewTime = () => {
  //   const getSelectedMatch: any = localStorage.getItem('SelectedMatch');

  //   if (getSelectedMatch) {
  //     const selectedMatch = JSON.parse(getSelectedMatch);
  //     const countdownDate: any = dayjs(selectedMatch?.attributes.end);

  //     if (countdownDate) {
  //       const currentTime: any = dayjs();
  //       const distanceToDate = countdownDate - currentTime;

  //       if (distanceToDate <= 0) {
  //         setSelectedMatch(TodaysMatchs[0]);
  //         localStorage.setItem(
  //           'SelectedMatch',
  //           JSON.stringify(TodaysMatchs[0])
  //         );
  //         return;
  //       }

  //       let days: any = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
  //       let hours: any = Math.floor(
  //         (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       );
  //       let minutes: any = Math.floor(
  //         (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
  //       );
  //       let seconds: any = Math.floor((distanceToDate % (1000 * 60)) / 1000);

  //       const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //       days = `${days}`;
  //       if (numbersToAddZeroTo.includes(hours)) {
  //         hours = `0${hours}`;
  //       } else if (numbersToAddZeroTo.includes(minutes)) {
  //         minutes = `0${minutes}`;
  //       } else if (numbersToAddZeroTo.includes(seconds)) {
  //         seconds = `0${seconds}`;
  //       }

  //       setState({ days, hours, minutes, seconds });
  //     }
  //   }
  // };

  // useEffect(() => {
  //   setInterval(() => setNewTime(), 1000);
  // }, []);

  return (
    <div className="flex">
      <div className="flex text-white text-lg  lg:text-3xl mx-auto font-extrabold ">
        <div className=" flex flex-col items-center mx-[2px] ">
          <div className="">{state.days || "0"}</div>
          <small className="">Jours</small>
        </div>
        <div className=" flex flex-col items-center mx-[2px] ">
          <Divider
            orientation={Orientation.VERTICAL}
            className={` text-white !bg-neutral-500 !h-10 !mx-4 rotate-12' 
              `}
          />{" "}
        </div>
        <div className=" flex flex-col items-center mx-[2px] ">
          <div className="">{state.hours || "00"}</div>
          <small className="">Heures</small>
        </div>
        <div className=" flex flex-col items-center mx-[2px] ">
          <div className="">:</div>
        </div>
        <div className=" flex flex-col items-center mx-[2px] ">
          <div className="">{state.minutes || "00"}</div>
          <small className="">Minutes</small>
        </div>
        <div className=" flex flex-col items-center mx-[2px] ">
          <div className="">:</div>
        </div>
        <div className=" flex flex-col items-center mx-[2px] ">
          <div className="">{state.seconds || "00"}</div>
          <small className="">Secondes</small>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
