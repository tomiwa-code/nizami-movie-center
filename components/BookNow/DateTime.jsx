"use client";

import { SeatContext } from "@/useContext/context";
import { useContext } from "react";

const DateTime = () => {
  const { bookedDetails, handleBookedDetailsChange } = useContext(SeatContext);

  return (
    <>
      <div className="w-60% mx-auto border-b-[3px] border-[#525252] pb-8">
        <h2 className="mb-3 text-lg text-center text-light">Date</h2>
        <div className="flex gap-x-5">
          {[4, 11, 18, 25, 29, 30, 31].map((item) => (
            <div
              className={`${
                bookedDetails.date === item
                  ? "bg-[#A4A4A4] text-[#fff]"
                  : "bg-[#2B2B2B] text-light"
              }   w-[40px] h-[50px] rounded-3xl flex items-center justify-center`}
              key={item}
              onClick={() =>
                handleBookedDetailsChange((prev) => ({ ...prev, date: item }))
              }
            >
              <p className="opacity-80 cursor-pointer" value={"date"}>
                {item < 10 ? "0" + item : item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-60% mx-auto border-b-[3px] border-[#525252] pb-8">
        <h2 className="mb-3 text-lg text-center text-light">Time</h2>
        <div className="flex gap-x-5">
          {["11:00", "12:15", "13:15", "14:30", "16:00"].map((item) => (
            <div
              className={`${
                bookedDetails.time === item
                  ? "bg-[#A4A4A4] text-[#fff]"
                  : "bg-[#2B2B2B] text-light"
              } text-light w-[90px] h-[40px] rounded-3xl flex items-center justify-center`}
              key={item}
              onClick={() =>
                handleBookedDetailsChange((prev) => ({ ...prev, time: item }))
              }
            >
              <p className="opacity-80 cursor-pointer">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DateTime;
