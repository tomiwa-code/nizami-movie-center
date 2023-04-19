"use client";

import { urlFor } from "@/lib/client";
import { SeatContext } from "@/useContext/context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = ({ movies }) => {
  const [viewPoster, setViewPoster] = useState("");
  const [backPoster, setBackPoster] = useState(null);

  // Generate a random number between 5 and 10
  const randomNumber = Math.floor(Math.random() * 6) + 5;

  useEffect(() => {
    // get the id of the active poster
    const currentId = movies.find((items) => items._id === viewPoster);
    setBackPoster(currentId);
  }, [viewPoster]);

  useEffect(() => {
    const randomPoster = movies[randomNumber];
    setViewPoster(randomPoster._id);
    setBackPoster(randomPoster);
  }, []);

  const { handleBookedDetailsChange } = useContext(SeatContext);
  useEffect(() => {
    handleBookedDetailsChange({
      date: "",
      time: "",
      seat_selected: [],
    });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: viewPoster !== "" ? 6 : 8,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* hero image  */}
      <div className="absolute top-0 left-0 w-full h-full before:z-10 before:absolute before:bg-dark before:bg-opacity-50 before:inset-0">
        {backPoster && (
          <Image
            src={urlFor(backPoster.backdrop_poster)}
            fill={true}
            priority={true}
            alt={"hero poster"}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={urlFor(backPoster.backdrop_poster)}
          />
        )}
      </div>
      {/* today and soon  */}
      <div className="absolute z-20 space-y-3 top-[40%]">
        <div className="flex items-center">
          <div className="w-32 h-[1px] bg-light"></div>
          <p className="text-base italic uppercase text-light">today</p>
        </div>
        <div className="flex items-center">
          <div className="w-24 h-[1px] bg-light"></div>
          <p className="text-xs italic uppercase text-light">soon</p>
        </div>
      </div>
      {/* movie slide  */}
      <div className="absolute left-0 right-0 z-10 bottom-20">
        {/* bottom line  */}
        <div className="absolute z-[-1] bottom-10 w-full h-[1px] bg-light bg-opacity-30"></div>
        {/* movies posters  */}
        <Carousel
          responsive={responsive}
          centerMode={true}
          showDots={false}
          infinite={true}
          transitionDuration={700}
          className="hero-carousel"
        >
          {movies.map(({ _id, title, poster, slug }) => (
            <div
              className={`relative w-36 overflow-hidden rounded h-48 cursor-pointer duration-300 before:absolute before:z-10 before:inset-0 before:bg-gradient-to-t before:from-dark before:to-transparent ${
                viewPoster === _id ? "w-72 h-96 rounded-none" : ""
              }`}
              onClick={() => setViewPoster(_id)}
              key={_id}
            >
              <Image
                src={urlFor(poster)}
                alt={title}
                priority={true}
                fill={true}
                sizes="(max-width: 768px) 100vw"
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={urlFor(poster)}
              />
              <div
                className={`absolute z-10 ${
                  viewPoster === _id ? "bottom-8 opacity-100" : "-bottom-28"
                } w-[200px] left-1/2 -translate-x-1/2 duration-500 opacity-0`}
              >
                <p className="mb-5 text-base capitalize text-light">{title}</p>
                <Link
                  href={`/book_now/${slug.current}`}
                  className="px-10 py-3 text-xs text-white capitalize bg-red-700 rounded"
                >
                  book now
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-[150%] absolute -bottom-20 -left-20 bg-dark blur-xl h-40 z-0"></div>
    </div>
  );
};

export default Hero;
