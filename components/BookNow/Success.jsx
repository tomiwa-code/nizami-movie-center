import { axiosInstance } from "@/axios/axiosInsatance";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

const Success = () => {
  const [transactionRef, setTransactionRef] = useState(null);
  const [transactionDetails, setTransactionsDetails] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //   get the necessary parameters
  useEffect(() => {
    setIsLoading(true);
    const params = new URLSearchParams(window.location.search);
    if (params.get("reference")) {
      setTransactionRef(params.get("reference"));
    }
  }, []);

  // validate the transationId
  useEffect(() => {
    const verifyTransId = async () => {
      try {
        if (transactionRef) {
          const res = await axiosInstance.get(`verify/${transactionRef}`);
          const { id, metadata } = await res.data.data;
          setTransactionsDetails({ id, metadata });
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data);
      }
    };
    verifyTransId();
  }, [transactionRef]);

  return (
    <>
      {transactionRef && (
        <div className="inset-0 absolute flex items-center justify-center">
          {/* dark overlay  */}
          <div className="absolute inset-0 z-10 bg-black bg-opacity-80"></div>

          {/* popup box for loading  */}
          <div className="relative z-20 bg-[#F1F1F1] w-[430px] h-[250px] flex items-center justify-center rounded-md">
            {isLoading ? (
              <DotLoader color="#121212" size={30} />
            ) : error.status === false ? (
              <div className="text-center">
                <p className="font-medium text-lg mb-5">{error.message}</p>
                <Link
                  href={"/"}
                  className="px-6 py-2.5 bg-[#8D090D] text-light rounded-md"
                >
                  Go home
                </Link>
              </div>
            ) : (
              <div className="px-6 text-center space-y-2">
                <div className="absolute top-5 right-5 w-4 h-4">
                  <Image
                    src={"/close.svg"}
                    alt="close button"
                    width={1000}
                    height={1000}
                    style={{ cursor: "pointer" }}
                    onClick={() => setTransactionRef(null)}
                  />
                </div>
                <h2 className="font-semibold text-lg">Congratulations!</h2>
                <p className="text-base text-[#8D090D] font-semibold capitalize">
                  {transactionDetails.metadata.name}
                </p>
                <p className="">
                  You've bought{" "}
                  {transactionDetails.metadata.seat_selected.length} tickets to
                  see{" "}
                  <span className="font-semibold">
                    {transactionDetails.metadata.movie} on{" "}
                    {transactionDetails.metadata.date} at{" "}
                    {transactionDetails.metadata.time}
                  </span>
                  . Please, take a screenshot and show before the entering to
                  the theatre
                </p>
                <p className="text-sm font-semibold">
                  Transaction ID: {transactionDetails.id}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
