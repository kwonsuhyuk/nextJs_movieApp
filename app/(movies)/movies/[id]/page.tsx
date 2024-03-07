import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import Movievideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function genenrateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <Movievideos id={id} />
      </Suspense>
    </div>
  );
}
