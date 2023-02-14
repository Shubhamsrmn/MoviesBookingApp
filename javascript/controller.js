import * as model from "./model.js";
import * as view from "./view.js";
import * as theaterview from "./view/theaterview.js";
import * as fullmovieview from "./view/fullmovieView.js";
let isSearchActive = false;
let moviesList;
let index;
let Id;
(function settingUpAll() {
  // Adding movies next and previous btn
  view.addEventHandlerHomebtn(function () {
    isSearchActive = false;
    showinglatestMovies();
  });
  view.addEventHandlerNextbtn(function handler() {
    if (isSearchActive) moviesList = model.state.searchMovies;
    else moviesList = model.state.newMovies;
    view.render(moviesList, index);
    index += 4;
  });
  view.addEventHandlerPrevbtn(function handler() {
    if (isSearchActive) moviesList = model.state.searchMovies;
    else moviesList = model.state.newMovies;
    view.render(moviesList, index - 8);
    index -= 4;
  });
  // Adding movies search btn
  view.addEventHandlerSearchbtn(function handler() {
    index = 0;
    theaterview.closetheaters.click();
    fullmovieview.bookTicketClosebtn.click();
    fullmovieview.closeFullMoviebtn.click();
    view.hideSearchPopup();
    view.showLoader();
    view.hideNxtPrvbtn();
    view.hideLatestMovies();
    model.getSearchMoviesList(view.input.value).then(() => {
      isSearchActive = true;
      view.hideLoader();
      view.showLatestMovies();
      view.renderTitle(model.headingText.searchMovies);
      view.render(model.state.searchMovies, index);
      index += 4;
    });
  });
  view.addEventHandlersearchpopupclosebtn(function () {
    view.hideSearchPopup();
  });
  view.addEventHandlerMovieItem(async function handler() {
    const id = location.hash.slice(1);
    history.back();
  history.replaceState(null, "", location.href.slice(0, -2));
    if (isSearchActive && model.state.searchMovies[id] !== undefined) {
      view.showSearchPopup(
        model.state.searchMovies[id].title,
        model.state.searchMovies[id].description
      );
      return;
    }
    if (model.state.newMovies[id] === undefined) return;
    const url = [];
    url[0] = model.state.newMovies[id].image;
    fullmovieview.renderFullMovieItem(model.state.newMovies, id);
    fullmovieview.showFullMovieItem();
    fullmovieview.addEventHandlerBookTicketbtn(function handler() {
      fullmovieview.fullmoviesection.classList.add("blur-effect");
      view.removeDisplayHide(fullmovieview.bookTicketpopup);
      fullmovieview.changeBookTicketpopuptitle(
        model.state.newMovies[Id].fullTitle
      );
    });
    await model.getMovieImage(url);
    fullmovieview.renderHdFullMovieimg(url[1]);
    Id = id;
  });
})();
(function GetNshowingLatestMovies() {
  index = 0;
  view.showLoader();
  view.hideNxtPrvbtn();
  model.getLatestMoviesList().then(() => {
    moviesList = model.state.newMovies;
    view.hideLoader();
    view.renderTitle(model.headingText.newMovies);
    view.render(model.state.newMovies, index);
    index += 4;
  });
})();
function showinglatestMovies() {
  theaterview.closetheaters.click();
  fullmovieview.bookTicketClosebtn.click();
  fullmovieview.closeFullMoviebtn.click();
  view.hideSearchPopup();
  index = 0;
  view.clearDisplay(view.parent, ".movies-item");
  view.renderTitle(model.headingText.newMovies);
  view.render(model.state.newMovies, index);
  index += 4;
}
// ------------------------- Full-Movies-content functions-----------------------
(function () {
  fullmovieview.addEventHandlerBookTicketPopupclose(function handler() {
    fullmovieview.fullmoviesection.classList.remove("blur-effect");
    view.addDisplayHide(fullmovieview.bookTicketpopup);
  });
  fullmovieview.addEventHandlerCloseFullMovie(function handler() {
    view.removeDisplayHide(view.sectionmain);
    fullmovieview.clearFullMovieItem();
  });
})();
// -----------------theaters-full functions--------------------------------------
(function () {
  fullmovieview.addEventHandlerbookpopupbtns(function handler(e) {
    if (e.target) {
      if (e.target.classList.contains("mov-type-btn")) {
        view.addDisplayHide(view.sectionmain);
        fullmovieview.bookTicketClosebtn.click();
        fullmovieview.hideFullMovieItem();
        view.removeDisplayHide(theaterview.parent);
        theaterview.renderTheaters(
          model.theatersDetails,
          theaterview.movieTiming.value,
          theaterview.priceRange.value
        );
        theaterview.renderdatePanel();
        theaterview.renderTheatersPageHeading(
          moviesList[Id].fullTitle,
          moviesList[Id].genreList
        );
        theaterview.addEventHandlerFilter(function (e) {
          theaterview.renderTheaters(
            model.theatersDetails,
            theaterview.movieTiming.value,
            theaterview.priceRange.value
          );
        });
      }
    }
  });
  theaterview.addEventHandlertheaterclosebtn(function () {
    view.clearDisplay(theaterview.dateparent, ".single-date");
    view.clearDisplay(theaterview.genrecontainer, ".single-genre");
    fullmovieview.showFullMovieItem();
    view.addDisplayHide(theaterview.parent);
    theaterview.resetFilters();
  });
  theaterview.addEventHandlerToggleleft(function () {
    const id = +theaterview.currentday.id - 1 + "";
    if (id < "0") return;
    theaterview.updateCurrentDay(id);
  });
  theaterview.addEventHandlerToggleright(function () {
    const id = +theaterview.currentday.id + 1 + "";
    if (id >= "4") return;
    theaterview.updateCurrentDay(id);
  });
})();
