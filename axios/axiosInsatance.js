import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.paystack.co/transaction",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
    "Content-Type": "application/json",
  },
});
