// export const sectionmain = document.querySelector(".start-main-content");
// const prevMoviesbtn = document.querySelector(".prev-movies-btn");
// const nextMoviesbtn = document.querySelector(".next-movies-btn");
// const searchbtn = document.querySelector(".search-btn");
// export const closeMoviebtn = document.querySelector(".close-movie-btn");
// const heading = document.querySelector(".heading");
// export let bookbtn;
// export const starHashcode = location.hash;
// export const parent = document.querySelector(".grid-container");
// export const input = document.getElementById("search");
// export const loader = document.querySelector(".loader");
// export const bookbtnclose = document.querySelector(".close-mov-type");
// export const fullmoviesection = document.querySelector(
//   ".full-movie-content-section"
// );
// //
// // ---------------------- functions ----------------------------------------------
// //
// export function renderHeading(str) {
//   heading.innerHTML = str;
// }
// export async function render(newMovies, index) {
//   if (newMovies.length === 0) return;
//   clearDisplay(parent, ".movies-item");
//   if (index >= 4) prevMoviesbtn.classList.remove("visibility-hidden");
//   else prevMoviesbtn.classList.add("visibility-hidden");
//   if (index + 4 <= newMovies.length)
//     nextMoviesbtn.classList.remove("visibility-hidden");
//   else nextMoviesbtn.classList.add("visibility-hidden");
//   for (let curr = index; curr < index + 4; curr++) {
//     if (curr >= newMovies.length) break;
//     const markup = `<span class ="movies-item"><a href="#${curr}">
//     <img loading="lazy" src="${newMovies[curr].image}" alt="">
//     <p>${newMovies[curr].title}</p></a></span>`;
//     parent.insertAdjacentHTML("beforeend", markup);
//   }
// }
// export function hidingPagesbtn() {
//   heading.innerHTML = "";
//   nextMoviesbtn.classList.add("visibility-hidden");
//   prevMoviesbtn.classList.add("visibility-hidden");
// }

// // ---------------------------- utilities methods ------------------------
// //
// //
// export function clearDisplay(parentElement, className) {
//   const children = parentElement.querySelectorAll(`${className}`);
//   for (const cl of children) {
//     cl.remove();
//   }
// }
// // -------------------------------- event handlers --------------------
// //
// //
// export function addEventHandlerMovieItem(handler) {
//   window.addEventListener("hashchange", handler);
// }
// export function addEventHandlerNext(handler) {
//   nextMoviesbtn.addEventListener("click", handler);
// }
// export function addEventHandlerPrev(handler) {
//   prevMoviesbtn.addEventListener("click", handler);
// }
// export function addEventHandlerSearch(handler) {
//   searchbtn.addEventListener("click", handler);
// }
// export function addEventHandlerCloseMovie(handler) {
//   closeMoviebtn.addEventListener("click", handler);
// }
// export function addEventHandlerBooking(handler) {
//   bookbtn = document.querySelector(".book-btn");
//   bookbtn.addEventListener("click", handler);
// }
// export function addEventHandlerBookingclose(handler) {
//   bookbtnclose.addEventListener("click", handler);
// }
export const sectionmain = document.querySelector(".start-main-content");
export const parent = document.querySelector(".grid-container");
const loader = document.querySelector(".loader");
export const btn_container = document.querySelector(".btn-container");
const prevMoviesbtn = document.querySelector(".prev-movies-btn");
const nextMoviesbtn = document.querySelector(".next-movies-btn");
const searchbtn = document.querySelector(".search-btn");
const heading = document.querySelector(".heading");
export const initialHashcode = location.hash;
export const input = document.getElementById("search");
// ---------------------- functions ----------------------------------------------
export function renderTitle(str) {
  heading.innerHTML = str;
}
export async function render(newMovies, index) {
  if (newMovies.length === 0) return;
  clearDisplay(parent, ".movies-item");
  showNxtPrvbtn(newMovies, index);
  for (let curr = index; curr < index + 4; curr++) {
    if (curr >= newMovies.length) break;
    const markup = `<span class ="movies-item"><a href="#${curr}">
    <img loading="lazy" src="${newMovies[curr].image}" alt="">
    <p>${newMovies[curr].title}</p></a></span>`;
    parent.insertAdjacentHTML("beforeend", markup);
  }
}
export function hideNxtPrvbtn() {
  heading.innerHTML = "";
  nextMoviesbtn.classList.add("visibility-hidden");
  prevMoviesbtn.classList.add("visibility-hidden");
}
function showNxtPrvbtn(newMovies, index) {
  if (index >= 4) prevMoviesbtn.classList.remove("visibility-hidden");
  else prevMoviesbtn.classList.add("visibility-hidden");
  if (index + 4 <= newMovies.length)
    nextMoviesbtn.classList.remove("visibility-hidden");
  else nextMoviesbtn.classList.add("visibility-hidden");
}
// ---------------------------- utilities methods ------------------------------
export function removeDisplayHide(element) {
  element.classList.remove("display-hidden");
}
export function addDisplayHide(element) {
  element.classList.add("display-hidden");
}
export function showLoader() {
  loader.classList.remove("display-hidden");
}
export function hideLoader() {
  loader.classList.add("display-hidden");
}
export function clearDisplay(parentElement, className) {
  const children = parentElement.querySelectorAll(`${className}`);
  for (const cl of children) {
    cl.remove();
  }
}
// -------------------------------- event handlers -----------------------------------
export function addEventHandlerSearchbtn(handler) {
  searchbtn.addEventListener("click", handler);
}
export function addEventHandlerNextbtn(handler) {
  nextMoviesbtn.addEventListener("click", handler);
}
export function addEventHandlerPrevbtn(handler) {
  prevMoviesbtn.addEventListener("click", handler);
}
export function addEventHandlerMovieItem(handler) {
  window.addEventListener("hashchange", handler);
}
