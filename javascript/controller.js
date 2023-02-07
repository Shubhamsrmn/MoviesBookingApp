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
  displayingList(model.getLatestMoviesList, "", "newMovies");
  view.addEventHandlerSearch(function handler() {
    displayingList(model.getSearchMoviesList, view.input.value, "searchMovies");
  });
})();

async function displayingList(funcName, query, arrName) {
  view.clearDisplay(view.parent, ".movies-item");
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
  view.addEventHandlerMovieItem(async function handler() {
    const id = location.hash.slice(1);
    location.hash = view.starHashcode;
    const url = [];
    if (moviesList[id] !== undefined) {
      url[0] = moviesList[id].image;
      view.renderFullMovieItem(moviesList, id);
      await model.getMovieImage(url);
      view.fullContentImage.src = url[1];
    }
  });
  view.addEventHandlerCloseMovie(function handler() {
    view.closeFullMovieItem();
  });
})();
