const SeatNumbers = ({
  seatText,
  seatArr,
  selectedSeat,
  newSelectedSeat,
  handleSelectedSeat,
}) => {
  return (
    <div className="flex items-center w-full">
      <p className="flex-1 text-sm uppercase text-light">{seatText}</p>
      <div className="flex items-center justify-center gap-x-3 flex-[3]">
        {seatArr.map((item, index) => (
          <span
            className={`block h-5 w-5 rounded-full ${
              selectedSeat.includes(seatArr[index])
                ? "bg-[#393939] pointer-events-none"
                : ""
            } ${
              newSelectedSeat.includes(seatArr[index])
                ? "bg-[#8D090D]"
                : !selectedSeat.includes(seatArr[index])
                ? "bg-[#A4A4A4]"
                : ""
            } cursor-pointer`}
            key={item}
            onClick={() => handleSelectedSeat(item)}
          ></span>
        ))}
      </div>
      <p className="uppercase text-[#4A4A4A] text-sm flex-1 text-right">
        {seatText}
      </p>
    </div>
  );
};

export default SeatNumbers;
