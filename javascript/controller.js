import * as model from "./model.js";
import * as view from "./view.js";
let moviesList;
let index;
function renderFirst(isfirst) {
  index = 0;
  if (isfirst) moviesList = model.state.newMovies;
  else moviesList = model.state.searchMovies;
  view.render(moviesList, index);
  index += 4;
}
(async function () {
  await model.getLatestMoviesList();
  renderFirst(true);
  view.addEventHandlerSearch(async function handler() {
    await model.getSearchMoviesList(view.input.value);
    renderFirst(false);
  });
})();

(function () {
  view.addEventHandlerNext(function handler() {
    view.render(moviesList, index);
    index += 4;
  });
  view.addEventHandlerPrev(function handler() {
    view.render(moviesList, index - 8);
    index -= 4;
  });
})();
