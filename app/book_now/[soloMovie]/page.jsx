import DateTime from "@/components/BookNow/DateTime";
import SelectSeat from "@/components/BookNow/SelectSeat";
import SelectedSeat from "@/components/BookNow/SelectedSeat";
import { sanityClient, urlFor } from "@/lib/client";
import Image from "next/image";

export async function generateStaticParams() {
  const query = '*[_type == "movie"]';
  const movies = await sanityClient.fetch(query, { next: { revalidate: 60 } });

  return movies.map((movie) => ({
    soloMovie: movie.slug.current,
  }));
}

const page = async ({ params }) => {
  const { soloMovie } = params;
  const query = `*[_type == "movie" && slug.current == '${soloMovie}']`;
  const movie = await sanityClient.fetch(query, { next: { revalidate: 60 } });
  const cMovie = movie[0];

  return (
    <div className="flex w-full h-screen">
      <div className="w-[40%]">
        <div className="relative w-full h-full">
          <Image
            src={urlFor(cMovie.poster)}
            alt={cMovie.title}
            fill={true}
            priority={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        <div className="absolute py-3 border-b border-[#AB0A10] flex space-x-5 z-10 left-[80px] top-[120px]">
          <h2 className="text-base font-medium text-light">{cMovie.title}</h2>
          <p className="text-base font-medium text-light">1h. 18m.</p>
        </div>
        <SelectedSeat title={cMovie.title} />
      </div>
      <div className="w-[60%] flex items-center flex-col justify-center gap-y-8">
        {/* date and time  */}
        <DateTime />
        {/* selection of seat  */}
        <SelectSeat selectedSeat={cMovie.selected_seat} />
      </div>
    </div>
  );
};

export default page;
