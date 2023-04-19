"use client";

import Image from "next/image";
import Light from "../../images/light.png";
import { useContext } from "react";
import SeatNumbers from "./SeatNumbers";
import { SeatContext } from "@/useContext/context";

const SelectSeat = ({ selectedSeat }) => {
  // generating array for seats
  const startLetter = "a";
  const endLetter = "g";
  const startNumber = 1;
  const endNumber = { a: 12, b: 12, c: 12, d: 12, e: 10, f: 8, g: 6 };

  const result = {};

  for (
    let letter = startLetter.charCodeAt(0);
    letter <= endLetter.charCodeAt(0);
    letter++
  ) {
    const letterStr = String.fromCharCode(letter);
    const letterArray = [];

    for (let number = startNumber; number <= endNumber[letterStr]; number++) {
      letterArray.push(letterStr + number);
    }

    result[letterStr] = letterArray;
  }

  const AArray = result["a"];
  const BArray = result["b"];
  const CArray = result["c"];
  const DArray = result["d"];
  const EArray = result["e"];
  const FArray = result["f"];
  const GArray = result["g"];

  // const [newSelectedSeat, setNewSelectedSeat] = useState([]);
  const { bookedDetails, handleBookedDetailsChange } = useContext(SeatContext);

  const handleSelectedSeat = (seatPicked) => {
    // check if the seat is already selected
    const checkSeat = bookedDetails.seat_selected.includes(seatPicked);

    // if selected unselect; do otherwise
    if (!checkSeat) {
      handleBookedDetailsChange((prev) => ({
        ...prev,
        seat_selected: [...prev.seat_selected, seatPicked],
      }));
    } else {
      handleBookedDetailsChange((prev) => ({
        ...prev,
        seat_selected: prev.seat_selected.filter((item) => item !== seatPicked),
      }));
    }
  };

  return (
    <div className="h-[300px] relative">
      <div className="relative w-[400px] mx-auto">
        <Image
          src={Light}
          alt="light"
          width={1000}
          height={1000}
          priority={true}
        />
      </div>
      <div className="absolute space-y-3 top-20 w-[420px]  left-1/2 -translate-x-1/2">
        <SeatNumbers
          seatText={"g"}
          seatArr={GArray}
          selectedSeat={selectedSeat}
          newSelectedSeat={bookedDetails.seat_selected}
          handleSelectedSeat={handleSelectedSeat}
        />
        <SeatNumbers
          seatText={"f"}
          seatArr={FArray}
          selectedSeat={selectedSeat}
          newSelectedSeat={bookedDetails.seat_selected}
          handleSelectedSeat={handleSelectedSeat}
        />
        <SeatNumbers
          seatText={"e"}
          seatArr={EArray}
          selectedSeat={selectedSeat}
          newSelectedSeat={bookedDetails.seat_selected}
          handleSelectedSeat={handleSelectedSeat}
        />
        <SeatNumbers
          seatText={"d"}
          seatArr={DArray}
          selectedSeat={selectedSeat}
          newSelectedSeat={bookedDetails.seat_selected}
          handleSelectedSeat={handleSelectedSeat}
        />
        <SeatNumbers
          seatText={"c"}
          seatArr={CArray}
          selectedSeat={selectedSeat}
          newSelectedSeat={bookedDetails.seat_selected}
          handleSelectedSeat={handleSelectedSeat}
        />
        <SeatNumbers
          seatText={"b"}
          seatArr={BArray}
          selectedSeat={selectedSeat}
          newSelectedSeat={bookedDetails.seat_selected}
          handleSelectedSeat={handleSelectedSeat}
        />
        <SeatNumbers
          seatText={"a"}
          seatArr={AArray}
          selectedSeat={selectedSeat}
          newSelectedSeat={bookedDetails.seat_selected}
          handleSelectedSeat={handleSelectedSeat}
        />
      </div>
      <div className="flex space-x-5 items-center justify-center w-[400px] absolute -bottom-10">
        <p className="flex items-center space-x-2 text-base text-light">
          <span className="block h-3 w-3 rounded-full bg-[#A4A4A4]"></span>
          <span>Available</span>
        </p>
        <p className="flex items-center space-x-2 text-base text-light">
          <span className="block h-3 w-3 rounded-full bg-[#393939]"></span>
          <span>Booked</span>
        </p>
        <p className="flex items-center space-x-2 text-base text-light">
          <span className="block h-3 w-3 rounded-full bg-[#8D090D]"></span>
          <span>Selected</span>
        </p>
      </div>
    </div>
  );
};

export default SelectSeat;
