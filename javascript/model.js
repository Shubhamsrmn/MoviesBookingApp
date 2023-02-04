export const state = {
  newMovies: [],
  searchMovies: [],
};
export async function getLatestMoviesList() {
  const request = await fetch(
    "https://imdb-api.com/en/API/InTheaters/k_8mt90ri5"
  );
  const response = await request.json();
  state.newMovies = response.items;
}
export async function getSearchMoviesList(searchQuery) {
  const request = await fetch(
    `https://imdb-api.com/en/API/SearchMovie/k_8mt90ri5/${searchQuery}`
  );
  const response = await request.json();
  console.log(response);
  state.searchMovies = response.results;
}
