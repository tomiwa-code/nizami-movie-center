"use client";
import ImageComp from "../Image";
import image60 from "../../images/image60.png";
import image62 from "../../images/image62.png";
import image621 from "../../images/image621.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const HomeSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderArr = [
    {
      id: 1,
      img: image60,
      title: "operetta",
      name: "Arshin Mal Alan",
      text: "Arshin Mal Alan is a 4-act operetta composed by Azerbaijanicomposer Uzeyir Hajibeyov. The libretto of the work was alsowritten by Uzeyir Hajibeyov in 1913 in St. Petersburg. Thepremiere of the opera was held on October 25, 1913 at the HajiZeynelabidin Tagiyev Theater in Baku.",
    },
    {
      id: 2,
      img: image62,
      title: "MUSICAL COMEDY",
      name: "If not that one, then this one",
      text: `In the late 1940s and early 1950s, the main focus of the Baku Film Studio was on documentary and journalistic films, during which time only the feature films "Fatali Khan" and "Lights of Baku" were made.The comedy was staged by Azad Amirov, who also acted the leading part (Mashadi Ibad) in Shusha, in 1912. In his memories Hajibeyov noted Amirov's beautiful performance of this role.`,
    },
    {
      id: 3,
      img: image621,
      title: "DRAMA",
      name: "Nabat",
      text: "The film was commissioned by the Ministry of Culture and Tourism in 2014. The authors of the script are Elkhan Nabiyev and Elchin Musaoglu, cinematographer Abdulrahim Basharat, set designer Shahin Hasanli, composer Hamed Sabet, executive producer Arif Safarov, producer Mushfig Hatamov.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(5);

  return (
    <div className="px-20 mt-16">
      <div className="relative mb-16">
        <div className="absolute flex items-center px-[150px] -top-6 gap-x-[125px] z-10">
          <p
            className={`text-xs font-medium ${
              currentIndex === 5 ? "text-light" : "text-gray"
            }`}
          >
            1940
          </p>
          <p
            className={`text-xs font-medium ${
              currentIndex === 3 ? "text-light" : "text-gray"
            }`}
          >
            1950
          </p>
          <p
            className={`text-xs font-medium ${
              currentIndex === 4 ? "text-light" : "text-gray"
            }`}
          >
            1960
          </p>
          <p
            className={`text-xs font-medium ${
              currentIndex === 2 ? "text-light" : "text-gray"
            }`}
          >
            1970
          </p>
          <p className="text-xs font-medium text-gray">1980</p>
          <p className="text-xs font-medium text-gray">1990</p>
          <p className="text-xs font-medium text-gray">2000</p>
        </div>
        <div className="absolute flex items-center px-40 -translate-y-1/2 top-1/2 gap-x-36 z-10">
          <span
            className={`block w-2 h-2 rounded-full ${
              currentIndex === 5 ? "bg-light" : "bg-gray"
            }`}
          ></span>
          <span
            className={`block w-2 h-2 rounded-full ${
              currentIndex === 3 ? "bg-light" : "bg-gray"
            }`}
          ></span>
          <span
            className={`block w-2 h-2 rounded-full ${
              currentIndex === 4 ? "bg-light" : "bg-gray"
            }`}
          ></span>
          <span className="block w-2 h-2 rounded-full bg-gray"></span>
          <span className="block w-2 h-2 rounded-full bg-gray"></span>
          <span className="block w-2 h-2 rounded-full bg-gray"></span>
          <span className="block w-2 h-2 rounded-full bg-gray"></span>
        </div>
        <div
          className={`w-full h-[1px] bg-lightGray relative ${
            currentIndex === 5
              ? "before:w-[160px]"
              : currentIndex === 3
              ? "before:w-[320px]"
              : currentIndex === 4
              ? "before:w-[470px]"
              : ""
          }  before:absolute  before:h-[1px] before:bg-light duration-500`}
        ></div>
      </div>
      <Carousel
        responsive={responsive}
        showDots={false}
        swipeable={false}
        draggable={false}
        infinite={true}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={700}
        beforeChange={(nextSlide) => {
          setCurrentIndex(nextSlide);
        }}
        className="w-full"
      >
        {sliderArr.map(({ id, img, title, text, name }) => (
          <div className="flex w-full" key={id}>
            <div className="flex-1">
              <div className="w-[500px] h-[420px] overflow-hidden relative">
                <ImageComp src={img} alt="rectangle" />
              </div>
            </div>
            <div className="flex items-center justify-center flex-1 text-light">
              <div className="w-[400px]">
                <div className="space-y-2">
                  <p className="text-xs italic font-light tracking-wide uppercase">
                    {title}
                  </p>
                  <p className="text-xl font-medium capitalize">{name}</p>
                </div>
                <p className="mt-5 text-sm">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSlider;
