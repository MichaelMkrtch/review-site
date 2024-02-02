import { API_TOKEN } from "@/secrets";

type FetchDataParams = {
  signal: AbortSignal;
  query: any;
};

export async function fetchData({ signal, query }: FetchDataParams) {
  const params = new URLSearchParams({
    query,
    include_adult: "false",
    language: "en-US",
    page: "1",
  });

  let url = `https://api.themoviedb.org/3/search/movie?${params}`;

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
      let error = new Error("An error occured while fetching data!");
      throw error;
    }

    const data = await response.json();

    const results = data.results.filter((movie: { [key: string]: any }) => {
      return (
        query &&
        movie &&
        movie.title &&
        movie.title.toLowerCase().includes(query)
      );
    });

    return results;
  } catch (error) {
    console.log(error);
  }
}
