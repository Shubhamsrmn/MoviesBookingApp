import * as model from "./model.js";
import * as view from "./view.js";
let moviesList;
let index;
async function assignMoviesList(value) {
  index = 0;
  moviesList = model.state[value];
  view.renderHeading(model.headingText[value]);
  view.render(moviesList, index);
  index += 4;
}
(async function () {
  // await model.getLatestMoviesList().then(() => {
  //   assignMoviesList("newMovies");
  //   view.loader.classList.add("display-hidden");
  // });
  // view.addEventHandlerSearch(async function handler() {
  //   await model.getSearchMoviesList(view.input.value).then(() => {
  //     assignMoviesList("searchMovies");
  //     view.loader.classList.add("display-hidden");
  //   });
  // });
  displayingList(model.getLatestMoviesList, "", "newMovies");
  view.addEventHandlerSearch(function handler() {
    displayingList(model.getSearchMoviesList, view.input.value, "searchMovies");
  });
})();

async function displayingList(funcName, query, arrName) {
  view.clearMoviesDisplay();
  view.hidingPagesbtn();
  view.loader.classList.remove("display-hidden");
  await funcName(query).then(() => {
    assignMoviesList(arrName);
    view.loader.classList.add("display-hidden");
  });
}
(function pagination() {
  view.addEventHandlerNext(function handler() {
    view.render(moviesList, index);
    index += 4;
  });
  view.addEventHandlerPrev(function handler() {
    view.render(moviesList, index - 8);
    index -= 4;
  });
})();

(function managingHashChange() {
  view.addEventHandlerMovieItem(function handler() {
    const id = location.hash.slice(1);
    view.renderFullMovieItem(moviesList, id);
  });
  view.addEventHandlerCloseMovie(function handler() {
    view.closeFullMovieItem();
  });
})();
