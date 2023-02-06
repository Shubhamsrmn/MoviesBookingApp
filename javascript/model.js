export const state = {
  newMovies: [],
  searchMovies: [],
};
export const headingText = {
  newMovies: "Lets Watch Most-Awaiting Movies in Theaters.",
  searchMovies: "Your Searched Movies Are Here.",
};
export async function getLatestMoviesList(str) {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("t");
  //   }, 5000);
  // });

  const request = await fetch(
    "https://imdb-api.com/en/API/InTheaters/k_8mt90ri5"
  );
  const response = await request.json();
  state.newMovies = response.items;
  console.log(state.newMovies[0]);
}
export async function getSearchMoviesList(searchQuery) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("t");
    }, 5000);
  });
  // const request = await fetch(
  //   `https://imdb-api.com/en/API/SearchMovie/k_8mt90ri5/${searchQuery}`
  // );
  // const response = await request.json();
  // state.searchMovies = response.results;
  // console.log(state.searchMovies[0]);
}
