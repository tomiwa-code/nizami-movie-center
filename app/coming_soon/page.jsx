import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Poster from "@/components/Poster";
import TitleComp from "@/components/TitleComp";
import { sanityClient } from "@/lib/client";

const page = async () => {
  // hero fetch
  const query =
    '*[_type == "movie" && ("recommend" in category[]->title)]{_id,title,slug,poster,backdrop_poster}';
  const movieData = await sanityClient.fetch(query, {
    next: { revalidate: 60 },
  });

  // upcoming movies
  const queryLatest =
    '*[_type == "movie" && ("latest" in category[]->title)] | order(releaseDate){_id,title,slug,releaseDate,poster,backdrop_poster, adult, original_language}';
  const movieDataLatest = await sanityClient.fetch(queryLatest, {
    next: { revalidate: 60 },
  });

  return (
    <>
      {/* hero section  */}
      <Hero movies={movieData} />

      {/* coming soon  */}
      <div className="px-20 mt-20">
        <TitleComp text={"Coming soon"} current={true} />
        <div className="grid gap-10 mt-10 grid-cols-fluid">
          {movieDataLatest.map((items) => (
            <Poster posterData={items} key={items._id} />
          ))}
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </>
  );
};

export default page;
