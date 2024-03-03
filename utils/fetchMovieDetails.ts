import { API_TOKEN } from "@/secrets.ts";

type FetchMovieDetailsParams = {
  id: number;
};

export interface Movie {
  id: number;
  title: string;
  directors: { name: string }[];
  releaseDate: string;
  posterPath: string;
  backdrops: { file_path: string }[];
}

export async function fetchMovieDetails({ id }: FetchMovieDetailsParams) {
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits%2Cimages`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      let error = new Error("An error occurred while fetching movie details!");
      throw error;
    }

    const data = await response.json();

    data.images = data.images.backdrops.slice(0, 3);
    data.credits = data.credits.crew.filter(
      (crewMember: { job: string; department: string }) =>
        crewMember.job === "Director" && crewMember.department === "Directing",
    );

    const movieDetails: Movie = {
      id: data.id,
      title: data.title,
      directors: data.credits,
      releaseDate: data.release_date.slice(0, 4),
      posterPath: data.poster_path,
      backdrops: data.images,
    };

    return movieDetails;
  } catch (error) {
    console.log(error);
  }
}
