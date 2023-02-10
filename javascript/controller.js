// import * as model from "./model.js";
// import * as view from "./view.js";
// import * as theaterview from "./view/theaterview.js";
// import * as fullmovieview from "./view/fullmovieView.js";
// let moviesList;
// let index;
// let Id;
// (async function () {
//   displayingList(model.getLatestMoviesList, "", "newMovies");
//   view.addEventHandlerSearch(function handler() {
//     fullmovieview.closeFullMovieItem();
//     displayingList(model.getSearchMoviesList, view.input.value, "searchMovies");
//   });
// })();
// async function displayingList(funcName, query, arrName) {
//   view.clearDisplay(view.parent, ".movies-item");
//   view.hidingPagesbtn();
//   view.loader.classList.remove("display-hidden");
//   await funcName(query).then(() => {
//     assignMoviesList(arrName);
//     view.loader.classList.add("display-hidden");
//   });
// }
// async function assignMoviesList(value) {
//   index = 0;
//   moviesList = model.state[value];
//   view.renderHeading(model.headingText[value]);
//   view.render(moviesList, index);
//   index += 4;
// }
// (function pagination() {
//   view.addEventHandlerNext(function handler() {
//     view.render(moviesList, index);
//     index += 4;
//   });
//   view.addEventHandlerPrev(function handler() {
//     view.render(moviesList, index - 8);
//     index -= 4;
//   });
// })();

// (function managingHashChange() {
//   view.addEventHandlerMovieItem(async function handler() {
//     const id = location.hash.slice(1);
//     location.hash = view.starHashcode;
//     const url = [];
//     if (moviesList[id] !== undefined) {
//       url[0] = moviesList[id].image;
//       fullmovieview.renderFullMovieItem(moviesList, id);
//       await model.getMovieImage(url);
//       fullmovieview.fullContentImage.src = url[1];
//       view.addEventHandlerBooking(function handler() {
//         view.fullmoviesection.classList.add("blur-effect");
//         fullmovieview.bookpopup.classList.remove("display-hidden");
//         fullmovieview.changepopuptitle(moviesList[id].fullTitle);
//         Id = id;
//       });
//     }
//   });
//   fullmovieview.addEventHandlertheaterdisplay(function handler(e) {
//     if (e.target) {
//       if (e.target.classList.contains("mov-type-btn")) {
//         view.sectionmain.classList.add("display-hidden");
//         view.bookbtnclose.click();
//         fullmovieview.closeFullMovieItem();
//         theaterview.parent.classList.remove("display-hidden");
//         theaterview.renderTheaters(
//           model.theatersDetails,
//           theaterview.movieTiming.value,
//           theaterview.priceRange.value
//         );
//         theaterview.renderdatePanel();
//         theaterview.renderBookingHeading(
//           moviesList[Id].fullTitle,
//           moviesList[Id].genreList
//         );
//         theaterview.addEventHandlerFilter(function (e) {
//           theaterview.renderTheaters(
//             model.theatersDetails,
//             theaterview.movieTiming.value,
//             theaterview.priceRange.value
//           );
//         });
//       }
//     }
//   });
//   fullmovieview.addEventHandlertheaterclosebtn(function () {
//     view.sectionmain.classList.remove("display-hidden");
//     theaterview.parent.classList.add("display-hidden");
//   });
//   view.addEventHandlerCloseMovie(function handler() {
//     fullmovieview.closeFullMovieItem();
//   });
// })();
// (async function bookingMovies() {
//   theaterview.addEventHandlerToggleleft(function () {
//     const id = +theaterview.currentday.id - 1 + "";
//     if (id < "0") return;
//     theaterview.updateCurrentDay(id);
//   });
//   theaterview.addEventHandlerToggleright(function () {
//     const id = +theaterview.currentday.id + 1 + "";
//     if (id >= "4") return;
//     theaterview.updateCurrentDay(id);
//   });
//   view.addEventHandlerBookingclose(function handler() {
//     view.fullmoviesection.classList.remove("blur-effect");
//     fullmovieview.bookpopup.classList.add("display-hidden");
//   });
// })();
import * as model from "./model.js";
import * as view from "./view.js";
import * as theaterview from "./view/theaterview.js";
import * as fullmovieview from "./view/fullmovieView.js";
let moviesList;
let index;
let Id;
(function settingUpAll() {
  // Adding movies next and previous btn
  view.addEventHandlerNextbtn(function handler() {
    view.render(model.state.newMovies, index);
    index += 4;
  });
  view.addEventHandlerPrevbtn(function handler() {
    view.render(model.state.newMovies, index - 8);
    index -= 4;
  });
  // Adding movies search btn
  view.addEventHandlerSearchbtn(function handler() {
    // fullmovieview.closeFullMovieItem();
    index = 0;
    view.showLoader();
    view.hideNxtPrvbtn();
    model.getSearchMoviesList(view.input.value).then(() => {
      view.hideLoader();
      view.renderTitle(model.headingText.searchMovies);
      view.render(model.state.searchMovies, index);
      index += 4;
    });
  });
  view.addEventHandlerMovieItem(async function handler() {
    const id = location.hash.slice(1);
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
(function showingLatestMovies() {
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
// ------------------------- Full-Movies-content functions-----------------------
(function () {
  fullmovieview.addEventHandlerBookTicketPopupclose(function handler() {
    fullmovieview.fullmoviesection.classList.remove("blur-effect");
    view.addDisplayHide(fullmovieview.bookTicketpopup);
  });
  fullmovieview.addEventHandlerCloseFullMovie(function handler() {
    view.removeDisplayHide(view.sectionmain);
    fullmovieview.hideFullMovieItem();
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
