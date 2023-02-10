export const state = {
  newMovies: [],
  searchMovies: [],
};
export const headingText = {
  newMovies: "Lets Watch Most-Awaiting Movies in Theaters.",
  searchMovies: "Your Searched Movies Are Here.",
};
export const theatersDetails = [
  {
    theaterName: "cinepolis : nexus Western Mall.",
    timingArr: ["9 AM", "12 PM", "3 PM", "6 PM"],
    priceArr: ["150", "200", "250", "300"],
  },
  {
    theaterName: "cinePro : Season Mall.",
    timingArr: ["1 PM", "3 PM", "9 PM"],
    priceArr: ["100", "200", "250"],
  },
  {
    theaterName: "iMAX : Premium Mall.",
    timingArr: ["12 PM", "3 PM", "6 PM", "9 PM"],
    priceArr: ["100", "250", "300", "300"],
  },
  {
    theaterName: "InfinityMax : Galaxy-Side Mall.",
    timingArr: ["9 AM", "6 PM", "9 PM"],
    priceArr: ["100", "200", "300"],
  },
  {
    defaultTiming: [0, 1, 2, 3],
    morningTiming: [0, 3],
    afternoonTiming: [1],
    nightTiming: [0, 2, 3],
    lateNightTiming: [1, 2, 3],
  },
];

export async function getLatestMoviesList(str) {
  const request = await fetch(
    "https://imdb-api.com/en/API/InTheaters/k_8mt90ri5"
  );
  const response = await request.json();
  state.newMovies = response.items;
  console.log(state.newMovies);
}
export async function getSearchMoviesList(searchQuery) {
  const request = await fetch(
    `https://imdb-api.com/en/API/SearchMovie/k_8mt90ri5/${searchQuery}`
  );
  const response = await request.json();
  state.searchMovies = response.results;
}
export async function getMovieImage(url) {
  const request = await fetch(
    `https://imdb-api.com/API/ResizeImage?apiKey=k_8mt90ri5&size=400x650&url=${url[0]}`
  );
  url[1] = request.url;
}
