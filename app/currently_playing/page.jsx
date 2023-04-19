import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Poster from "@/components/Poster";
import TitleComp from "@/components/TitleComp";
import { sanityClient } from "@/lib/client";

const currently_playing = async () => {
  // hero fetch
  const query =
    '*[_type == "movie" && ("recommend" in category[]->title)]{_id,title,slug,poster,backdrop_poster}';
  const movieData = await sanityClient.fetch(query, {
    next: { revalidate: 60 },
  });

  // currently playing fetch
  const queryCurrently =
    '*[_type == "movie" && ("currently_playing" in category[]->title)]{_id,title,slug,releaseDate,poster,backdrop_poster, adult, original_language}';
  const movieDataCurrently = await sanityClient.fetch(queryCurrently, {
    next: { revalidate: 60 },
  });

  return (
    <>
      {/* hero section  */}
      <Hero movies={movieData} />

      {/* currently playing  */}
      <div className="px-20 mt-20">
        <TitleComp text={"Currently playing"} current={true} />
        <div className="grid gap-10 mt-10 grid-cols-fluid">
          {movieDataCurrently.map((items) => (
            <Poster posterData={items} key={items._id} />
          ))}
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </>
  );
};

export default currently_playing;
