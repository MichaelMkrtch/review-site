import { API_TOKEN } from "@/secrets.ts";

type FetchBackdropsParams = {
  signal: AbortSignal;
  id: number;
};

export async function fetchBackdrops({ signal, id }: FetchBackdropsParams) {
  const url = `https://api.themoviedb.org/3/movie/${id}/images`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    signal: signal,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      let error = new Error("An error occured while fetching images!");
      throw error;
    }

    const data = await response.json();

    const backdrops = data.backdrops;

    const topBackdrops = backdrops.sort(
      (a: { [key: string]: any }, b: { [key: string]: any }) =>
        b.vote_average - a.vote_average,
    );

    topBackdrops.slice(0, 3);

    const randomIndex = Math.floor(Math.random() * 3);
    return topBackdrops[randomIndex].file_path;
  } catch (error) {
    console.log(error);
  }
}
