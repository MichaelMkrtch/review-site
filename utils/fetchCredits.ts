import { API_TOKEN } from "@/secrets.ts";

type FetchCreditsParams = {
  signal: AbortSignal;
  id: number;
};

export async function fetchCredits({ signal, id }: FetchCreditsParams) {

  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

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
      let error = new Error("An error occurred while fetching credits!");
      throw error;
    }

    const data = await response.json();

    const director = data.crew.filter(
      (person: { job: string; known_for_department: string }) =>
        person.job === "Director" && person.known_for_department === "Directing",
    );
    return director;
  } catch (error) {
    console.log(error);
  }
}
