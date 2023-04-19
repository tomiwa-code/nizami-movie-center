"use client";

import { SeatContext } from "@/useContext/context";
import Image from "next/image";
import { useContext, useState } from "react";
import Payment from "./Payment";
import Success from "./Success";

const SelectedSeat = ({ title }) => {
  const { bookedDetails, handleBookedDetailsChange } = useContext(SeatContext);

  // adding suffix
  function addSuffix(num) {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return num + "th";
    } else if (lastDigit === 1) {
      return num + "st";
    } else if (lastDigit === 2 && lastTwoDigits !== 12) {
      return num + "nd";
    } else if (lastDigit === 3 && lastTwoDigits !== 13) {
      return num + "rd";
    } else {
      return num + "th";
    }
  }
  const regex = /([A-Za-z])/;

  // remove seat function
  const handleSeatRemove = (seat) => {
    handleBookedDetailsChange((prev) => ({
      ...prev,
      seat_selected: prev.seat_selected.filter((item) => item !== seat),
    }));
  };

  // show purchase form
  const [showPurchaseForm, setPurchaseForm] = useState(false);
  const handlePopUpForm = () => {
    setPurchaseForm((prev) => !prev);
  };

  return (
    <>
      {bookedDetails.date !== "" &&
        bookedDetails.time !== "" &&
        bookedDetails.seat_selected.length > 0 && (
          <div className="absolute top-[180px] left-[20%] flex flex-col items-center -translate-x-1/2 bg-dark py-6 w-[400px] h-[500px]">
            <p className="uppercase text-light text-base">selected seats</p>
            {/* seats  */}
            <div className="mt-10 flex flex-col gap-y-5 w-full h-[400px] overflow-auto pb-6">
              {bookedDetails.seat_selected.map((seat) => (
                <div
                  className="flex items-center justify-center text-light w-[70%] mx-auto"
                  key={seat}
                >
                  <span className="block h-4 w-4 rounded-full bg-[#A4A4A4]"></span>
                  <div className="flex-1 flex items-center justify-center space-x-3">
                    <p className="capitalize text-base font-medium">
                      row {seat.split(regex)[1]} /{" "}
                      {addSuffix(Number(seat.split(regex)[2]))} seat
                    </p>
                    <p className="text-base font-medium">NGN 1500</p>
                  </div>

                  <div
                    className="relative w-3.5 h-3.5"
                    onClick={() => handleSeatRemove(seat)}
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close"
                      priority={true}
                      width={1000}
                      height={1000}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              <button
                className="w-[200px] capitalize bg-[#8D090D] text-light rounded-md py-3"
                onClick={handlePopUpForm}
              >
                purchase (NGN {bookedDetails.seat_selected.length * 1500})
              </button>
              <p className="text-sm text-[#6E6E6E] text-center">
                Time left to purchase: 10:15
              </p>
            </div>
          </div>
        )}

      {/* purchase from popup  */}
      {showPurchaseForm && (
        <Payment
          handlePopUpForm={handlePopUpForm}
          amount={bookedDetails.seat_selected.length}
          ticketDetails={bookedDetails}
          movie_title={title}
        />
      )}

      {/* success messagge  */}
      <Success />
    </>
  );
};

export default SelectedSeat;
