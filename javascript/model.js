export const state = {
  newMovies: [],
};
export async function getLatestMoviesList() {
  const request = await fetch(
    "https://imdb-api.com/en/API/InTheaters/k_8mt90ri5"
  );
  const response = await request.json();
  state.newMovies = response.items;
}
