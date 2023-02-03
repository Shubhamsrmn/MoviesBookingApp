import * as model from "./model.js";
import * as view from "./view.js";
let index = 0;
(async function () {
  await model.getLatestMoviesList();
  view.render(model.state.newMovies, index);
  index += 4;
})();

(function () {
  view.addEventHandlerRight(function handler() {
    view.render(model.state.newMovies, index);
    index += 4;
  });
})();
