"use client";

import Image from "next/image";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import PaymentForm from "./PaymentForm";

const Payment = ({ handlePopUpForm, amount, ticketDetails, movie_title }) => {
  const [customerDetails, setCustomerDetails] = useState({
    email: "",
    name: "",
    phone: "",
  });

  //   disable form
  const [disableForm, setDisableForm] = useState(false);

  //   paystack public key
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  //   props to pass to paystack component
  const componentProps = {
    email: customerDetails.email,
    amount: 1500 * amount * 100,
    metadata: {
      name: customerDetails.name,
      phone: customerDetails.phone,
      movie: movie_title,
      ...ticketDetails,
    },
    publicKey,
    text: `Purchase (NGN ${1500 * amount})`,
    onSuccess: (response) => {
      setDisableForm(true);
      window.location.href = response.redirecturl;
    },
    onClose: () => {
      setDisableForm(false);
    },
  };

  // set state with the value of the inputs
  const handleInputOnChange = (e) => {
    setCustomerDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="inset-0 absolute flex items-center justify-center">
      {/* dark overlay  */}
      <div
        className="absolute inset-0 z-10 bg-black bg-opacity-80"
        onClick={() => handlePopUpForm()}
      ></div>
      {/* Purchase form */}
      <div
        className={`relative z-20 bg-[#F1F1F1] w-[500px] rounded-md py-10 ${
          disableForm ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div className="absolute top-5 right-5 w-4 h-4">
          <Image
            src={"/close.svg"}
            alt="close button"
            width={1000}
            height={1000}
            style={{ cursor: "pointer" }}
            onClick={() => handlePopUpForm()}
          />
        </div>

        {/* form input   */}
        <PaymentForm
          ticketDetails={ticketDetails}
          handleInputOnChange={handleInputOnChange}
          movie_title={movie_title}
        />

        {/* purchase  button  */}
        <div className="flex items-center justify-center mt-8 ">
          <PaystackButton
            className="w-[250px] capitalize bg-[#8D090D] text-light rounded-md py-2.5"
            {...componentProps}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
