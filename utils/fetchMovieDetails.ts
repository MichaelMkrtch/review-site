import { API_TOKEN } from "@/secrets.ts";

type FetchMovieDetailsParams = {
  id: number;
};

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

    return data;
  } catch (error) {
    console.log(error);
  }
}
