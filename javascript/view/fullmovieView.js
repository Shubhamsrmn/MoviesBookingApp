// import * as view from "../view.js";
// const btn_container = document.querySelector(".btn-container");
// const movie_parent = document.querySelector(".full-movie-content");
// const movie_parent2 = document.querySelector(".full-movie-details");
// export const bookpopup = document.querySelector(".book-pop-up");
// export const closetheaters = document.querySelector(".theater-close-btn");
// export let fullContentImage;
// export function renderFullMovieItem(newMovies, index) {
//   view.parent.classList.add("display-hidden");
//   btn_container.classList.add("display-hidden");
//   movie_parent.classList.remove("display-hidden");
//   view.closeMoviebtn.classList.remove("display-hidden");
//   const markup1 = `<div class="full-content-des">
//     <img
//       class="full-content-img"
//       src="${newMovies[index].image}"
//       alt=""
//     />
//   </div>
//   <div class="full-content-des full-content-container">
//     <div class="entity-container">
//       <span><i class="ri-movie-fill"></i></span>
//       <span>${newMovies[index].fullTitle}</span>
//     </div>
//     <div class="entity-container">
//       <span><i class="ri-star-fill"></i></span>
//       <span>Rating : ${newMovies[index].imDbRating}/10 <sub>${newMovies[index].imDbRatingCount} votes</sub></span>
//     </div>
//     <div class="entity-container">
//       <span><i class="ri-film-line"></i></span>
//       <span>Genres : ${newMovies[index].genres}</span>
//     </div>
//     <div class="entity-container">
//       <span><i class="ri-calendar-line"></i></span>
//       <span>Release Date : ${newMovies[index].releaseState}</span>
//     </div>
//     <div class="entity-container">
//       <span> <i class="ri-time-fill"></i></span>
//       <span>Runtime : ${newMovies[index].runtimeStr}</span>
//     </div>
//     <div class="entity-container">
//       <button class="book-btn btn">
//         <span class="container-icon"
//           ><i class="ri-coupon-2-fill"></i>Book Tickets
//         </span>
//       </button>
//     </div>
//   </div>
//     `;
//   const markup2 = `<div class="big-entity">
//     <span><i class="ri-book-read-fill"></i></span>
//     <span>
//       StoryLine : ${newMovies[index].plot}</span
//     >
//   </div>
//   <div class="big-entity">
//     <span><i class="ri-user-star-fill"></i></span>
//     <span>
//       Star-Cast: ${newMovies[index].stars}.</span
//     >
//   </div>
//   <div class="big-entity">
//     <span><i class="ri-user-settings-fill"></i></span>
//     <span>
//       Directors: ${newMovies[index].directors}.</span
//     >
//   </div>`;
//   movie_parent.insertAdjacentHTML("afterbegin", markup1);
//   movie_parent2.insertAdjacentHTML("afterbegin", markup2);
//   fullContentImage = document.querySelector(".full-content-img");
// }
// export function closeFullMovieItem() {
//   view.parent.classList.remove("display-hidden");
//   btn_container.classList.remove("display-hidden");
//   movie_parent.classList.add("display-hidden");
//   view.closeMoviebtn.classList.add("display-hidden");
//   view.clearDisplay(movie_parent, ".full-content-des");
//   view.clearDisplay(movie_parent2, ".big-entity");
//   location.hash = view.starHashcode;
// }
// export function changepopuptitle(str) {
//   const bookpopuptitle = document.querySelector(".popup-title");
//   bookpopuptitle.innerHTML = str;
// }
// export function addEventHandlertheaterdisplay(handler) {
//   bookpopup.addEventListener("click", handler);
// }
// export function addEventHandlertheaterclosebtn(handler) {
//   closetheaters.addEventListener("click", handler);
// }
import * as view from "../view.js";
export const full_movie_parent = document.querySelector(".full-movie-content");
export const full_movie_parent2 = document.querySelector(".full-movie-details");
export const closeFullMoviebtn = document.querySelector(".close-movie-btn");
export const bookTicketpopup = document.querySelector(".book-pop-up");
export const bookTicketClosebtn = document.querySelector(".close-mov-type");
export const fullmoviesection = document.querySelector(
  ".full-movie-content-section"
);
export let fullContentImage;
export let bookTicketbtn;
// -------------------------------functions------------------------------------------
export function renderFullMovieItem(newMovies, index) {
  view.addDisplayHide(view.parent);
  view.addDisplayHide(view.btn_container);
  view.removeDisplayHide(full_movie_parent);
  view.removeDisplayHide(closeFullMoviebtn);
  const markup1 = `<div class="full-content-des">
    <img
      class="full-content-img"
      src="${newMovies[index].image}"
      alt=""
    />
  </div>
  <div class="full-content-des full-content-container">
    <div class="entity-container">
      <span><i class="ri-movie-fill"></i></span>
      <span>${newMovies[index].fullTitle}</span>
    </div>
    <div class="entity-container">
      <span><i class="ri-star-fill"></i></span>
      <span>Rating : ${newMovies[index].imDbRating}/10 <sub>${newMovies[index].imDbRatingCount} votes</sub></span>
    </div>
    <div class="entity-container">
      <span><i class="ri-film-line"></i></span>
      <span>Genres : ${newMovies[index].genres}</span>
    </div>
    <div class="entity-container">
      <span><i class="ri-calendar-line"></i></span>
      <span>Release Date : ${newMovies[index].releaseState}</span>
    </div>
    <div class="entity-container">
      <span> <i class="ri-time-fill"></i></span>
      <span>Runtime : ${newMovies[index].runtimeStr}</span>
    </div>
    <div class="entity-container">
      <button class="book-btn btn">
        <span class="container-icon"
          ><i class="ri-coupon-2-fill"></i>Book Tickets
        </span>
      </button>
    </div>
  </div>
    `;
  const markup2 = `<div class="big-entity">
    <span><i class="ri-book-read-fill"></i></span>
    <span>
      StoryLine : ${newMovies[index].plot}</span
    >
  </div>
  <div class="big-entity">
    <span><i class="ri-user-star-fill"></i></span>
    <span>
      Star-Cast: ${newMovies[index].stars}.</span
    >
  </div>
  <div class="big-entity">
    <span><i class="ri-user-settings-fill"></i></span>
    <span>
      Directors: ${newMovies[index].directors}.</span
    >
  </div>`;
  full_movie_parent.insertAdjacentHTML("afterbegin", markup1);
  full_movie_parent2.insertAdjacentHTML("afterbegin", markup2);
  fullContentImage = document.querySelector(".full-content-img");
}
export function renderHdFullMovieimg(url) {
  fullContentImage.src = url;
}
export function changeBookTicketpopuptitle(str) {
  const bookTicketpopuptitle = document.querySelector(".popup-title");
  bookTicketpopuptitle.innerHTML = str;
}
export function hideFullMovieItem() {
  view.addDisplayHide(full_movie_parent);
  view.addDisplayHide(full_movie_parent2);
  view.addDisplayHide(closeFullMoviebtn);
}
export function showFullMovieItem() {
  view.removeDisplayHide(full_movie_parent);
  view.removeDisplayHide(full_movie_parent2);
  view.removeDisplayHide(closeFullMoviebtn);
}
export function clearFullMovieItem() {
  view.removeDisplayHide(view.parent);
  view.removeDisplayHide(view.btn_container);
  view.addDisplayHide(closeFullMoviebtn);
  view.clearDisplay(full_movie_parent, ".full-content-des");
  view.clearDisplay(full_movie_parent2, ".big-entity");
  location.hash = view.initialHashcode;
}
// -------------Event handlers-----------------------------------------------------
export function addEventHandlerBookTicketbtn(handler) {
  bookTicketbtn = document.querySelector(".book-btn");
  bookTicketbtn.addEventListener("click", handler);
}
export function addEventHandlerBookTicketPopupclose(handler) {
  bookTicketClosebtn.addEventListener("click", handler);
}
export function addEventHandlerCloseFullMovie(handler) {
  closeFullMoviebtn.addEventListener("click", handler);
}
export function addEventHandlerbookpopupbtns(handler) {
  bookTicketpopup.addEventListener("click", handler);
}
