import { urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";

const Poster = ({ posterData }) => {
  const { poster, title, slug, original_language, releaseDate, adult } =
    posterData;

  // Rewrite the date to fit the UI
  const inputDate = releaseDate;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateParts = inputDate.split("-");
  const month = months[parseInt(dateParts[1]) - 1];
  const day = dateParts[2];

  return (
    <div className="relative rounded-md overflow-hidden w-[300px] h-[450px]  before:absolute before:z-10 before:inset-0 before:bg-gradient-to-t before:from-dark before:to-transparent group">
      <Image
        src={urlFor(poster)}
        alt={title}
        priority={true}
        fill={true}
        sizes="(max-width: 768px) 100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute z-20 space-y-1 bottom-14 left-8">
        <p className="text-base font-medium text-white capitalize">{title}</p>
        <p className="text-sm font-light text-white capitalize">
          {day} {month}
        </p>
        <p className="text-xs font-semibold text-white capitalize">
          {adult === false ? "6+" : "18+"}
        </p>
        <div className="flex">
          <p className="px-3 py-1 text-xs text-white capitalize rounded bg-gray bg-opacity-20">
            {original_language}
          </p>
        </div>
      </div>
      {/* book now button  */}
      <Link
        href={`/book_now/${slug.current}`}
        className="absolute z-20 px-6 py-3 text-xs text-white capitalize duration-300 bg-red-700 rounded -bottom-10 group-hover:bottom-14 right-8"
      >
        book now
      </Link>
    </div>
  );
};

export default Poster;
