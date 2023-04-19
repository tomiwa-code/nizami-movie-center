"use client";

import { SeatContext } from "@/useContext/context";
import { useState } from "react";

const Container = ({ children }) => {
  const [bookedDetails, setBookedDetails] = useState({
    date: "",
    time: "",
    seat_selected: [],
  });

  const handleBookedDetailsChange = (newBookedDetails) => {
    setBookedDetails(newBookedDetails);
  };

  return (
    <SeatContext.Provider value={{ bookedDetails, handleBookedDetailsChange }}>
      {children}
    </SeatContext.Provider>
  );
};

export default Container;
