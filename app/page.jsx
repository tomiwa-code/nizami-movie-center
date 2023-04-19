import Hero from "@/components/Hero";
import Poster from "@/components/Poster";
import TitleComp from "@/components/TitleComp";
import rectangleImg from "../images/rectangle.png";
import image56 from "../images/image56.png";
import ImageComp from "@/components/Image";
import HomeSlider from "@/components/Home/HomeSlider";
import { sanityClient } from "@/lib/client";
import { latestNewsArr } from "@/data";
import Footer from "@/components/Footer";

export default async function Home() {
  // hero fetch
  const query =
    '*[_type == "movie" && ("recommend" in category[]->title)]{_id,title,slug,poster,backdrop_poster}';
  const movieData = await sanityClient.fetch(query, {
    next: { revalidate: 60 },
  });

  // currently playing fetch
  const queryCurrently =
    '*[_type == "movie" && ("currently_playing" in category[]->title)]{_id,title,slug,releaseDate,poster,backdrop_poster, adult, original_language}[0...4]';
  const movieDataCurrently = await sanityClient.fetch(queryCurrently, {
    next: { revalidate: 60 },
  });

  // upcoming movies
  const queryLatest =
    '*[_type == "movie" && ("latest" in category[]->title)] | order(-releaseDate){_id,title,slug,releaseDate,poster,backdrop_poster, adult, original_language}[0...4]';
  const movieDataLatest = await sanityClient.fetch(queryLatest, {
    next: { revalidate: 60 },
  });

  return (
    <>
      <div className="w-full">
        {/* hero section  */}
        <Hero movies={movieData} />

        {/* currently playing  */}
        <div className="px-20 mt-20">
          <TitleComp text={"Currently playing"} linked={"/currently_playing"} />
          <div className="grid gap-10 mt-10 grid-cols-fluid">
            {movieDataCurrently.map((items) => (
              <Poster posterData={items} key={items._id} />
            ))}
          </div>
        </div>

        {/* coming soon  */}
        <div className="px-20 mt-20">
          <TitleComp text={"Coming soon"} linked={"/coming_soon"} />
          <div className="grid gap-10 mt-10 grid-cols-fluid">
            {movieDataLatest.map((items) => (
              <Poster posterData={items} key={items._id} />
            ))}
          </div>
        </div>

        {/* slider  */}
        <div className="px-20 mt-20">
          <p className="text-xl font-medium text-light">
            Pearls of Azerbaijani cinema
          </p>
          <HomeSlider />
        </div>

        {/* about  */}
        <div className="mt-20 bg-[#1A1919] px-40 flex">
          <div className="flex items-center flex-1 text-light">
            <div className="w-[400px]">
              <div className="space-y-2">
                <p className="text-xl font-medium">About us</p>
                <p className="text-xs italic font-light tracking-wide">
                  2008-2018
                </p>
              </div>
              <p className="mt-5 text-sm">
                According to the State Program for the Development of
                Azerbaijani Cinema for 2008-2018, Nizami, one of the oldest
                cinemas in the country, was inaugurated on December 27, 2011
                after major reconstruction. In addition to the current
                repertoire of films, which includes the most interesting new
                films, presentations of national films...
              </p>
            </div>
          </div>
          <div className="flex justify-end flex-1">
            <div className="w-[500px] h-[420px] overflow-hidden relative">
              <ImageComp src={rectangleImg} alt="rectangle" />
            </div>
          </div>
        </div>

        {/* latest news  */}
        <div className="px-40 mt-20">
          <p className="text-xl font-medium text-light">Latest news</p>
          <div className="flex items-center mt-8 gap-x-10">
            <div className="relative flex-1">
              <div className="w-full h-[400px] overflow-hidden rounded-md relative">
                <ImageComp src={image56} alt="46" />
              </div>
              <div className="absolute px-10 bottom-16">
                <div className="flex items-end">
                  <p className="flex-1 text-base font-semibold capitalize text-light">
                    New American films on the screen of Nizami Cinema Center
                  </p>
                  <p className="flex-1 text-xs italic font-light text-right text-light">
                    25.06.2022
                  </p>
                </div>
                <p className="mt-5 text-sm text-light">
                  US-produced "Independence Day: Revival" at Nizami Cinema
                  Center. "Neighbours. 2 in wartime ”films have been shown.
                  "Independence Day: Revival" is based on a screenplay by
                  Nicholas Wright and directed by Roland Emmerich in the genres
                  of science fiction, adventure and war. Slogan: “We had 20
                  years to prepare.
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              {latestNewsArr.map(({ id, text, img, date }) => (
                <div className="flex items-center gap-x-6" key={id}>
                  <div className="w-[80px] h-[70px] flex-1 relative overflow-hidden rounded-md">
                    <ImageComp src={img} alt="46" />
                  </div>
                  <div className="space-y-2 flex-[5]">
                    <p className="text-xs italic font-light text-light">
                      {date}
                    </p>
                    <p className="text-sm font-light text-light">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </>
  );
}
