const PaymentForm = ({ ticketDetails, handleInputOnChange, movie_title }) => {
  //   destructure booked details
  const { date, time, seat_selected } = ticketDetails;

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="uppercase font-semibold text-lg text-center">order</h2>
      <div className="space-y-1 text-center mt-2">
        <p className="text-sm text-gray font-medium">{movie_title}</p>
        <p className="text-sm text-gray">
          Date: {date} Time: {time} Nos: {seat_selected.length} seats
        </p>
      </div>
      <div className="mt-6 space-y-3">
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium">
            Name and surname
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputOnChange}
            className="rounded-md w-full outline-none border border-lighterGray bg-transparent py-2.5 px-3"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputOnChange}
            className="rounded-md w-full outline-none border border-lighterGray bg-transparent py-2.5 px-3"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="promo" className="font-medium">
            Promo code
          </label>
          <div className="flex gap-x-5 items-center">
            <input
              type="text"
              name="promo"
              id="promo"
              className="rounded-md w-full outline-none border border-lighterGray bg-transparent py-2.5 px-3"
              required
            />
            <button className="rounded-md px-6 py-2.5 border border-lighterGray font-medium">
              Apply
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="font-medium">
            Cell phone
          </label>
          <div className="flex gap-x-5 items-center">
            <p className="rounded-md px-5 py-2.5 border border-lighterGray font-medium">
              +234
            </p>
            <input
              type="number"
              name="phone"
              id="phone"
              onChange={handleInputOnChange}
              className="rounded-md w-full outline-none border border-lighterGray py-2.5 px-3 bg-transparent"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
