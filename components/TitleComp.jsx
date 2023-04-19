import Link from "next/link";

const TitleComp = ({ text, current, linked }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-1">
        <p className="text-xl text-white font-medium">{text}</p>
      </div>
      <div className="flex-1 flex items-center justify-end text-[#989898] space-x-2">
        {!current && (
          <>
            <Link href={linked} className="text-sm font-semibold">
              see more
            </Link>
            <span className="flex items-center w-5 h-5">
              <img src="/arrow.svg" alt="arrow" />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default TitleComp;
