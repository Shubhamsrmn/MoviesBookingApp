const prevMoviesbtn = document.querySelector(".prev-movies-btn");
const nextMoviesbtn = document.querySelector(".next-movies-btn");
const searchbtn = document.querySelector(".search-btn");
const closeMoviebtn = document.querySelector(".close-movie-btn");
const heading = document.querySelector(".heading");
const btn_container = document.querySelector(".btn-container");
const movie_parent = document.querySelector(".full-movie-content");
export let fullContentImage;
export const starHashcode = location.hash;
export const parent = document.querySelector(".grid-container");
export const input = document.getElementById("search");
export const loader = document.querySelector(".loader");
export function renderHeading(str) {
  heading.innerHTML = str;
}
export async function render(newMovies, index) {
  if (newMovies.length === 0) return;
  clearDisplay(parent, ".movies-item");
  if (index >= 4) prevMoviesbtn.classList.remove("visibility-hidden");
  else prevMoviesbtn.classList.add("visibility-hidden");
  if (index + 4 <= newMovies.length)
    nextMoviesbtn.classList.remove("visibility-hidden");
  else nextMoviesbtn.classList.add("visibility-hidden");
  for (let curr = index; curr < index + 4; curr++) {
    if (curr >= newMovies.length) break;
    const markup = `<span class ="movies-item"><a href="#${curr}">
    <img loading="lazy" src="${newMovies[curr].image}" alt="">
    <p>${newMovies[curr].title}</p></a></span>`;
    parent.insertAdjacentHTML("beforeend", markup);
  }
}
export function closeFullMovieItem() {
  parent.classList.remove("display-hidden");
  btn_container.classList.remove("display-hidden");
  movie_parent.classList.add("display-hidden");
  closeMoviebtn.classList.add("display-hidden");
  clearDisplay(movie_parent, ".full-content-des");
  location.hash = starHashcode;
}
export function renderFullMovieItem(newMovies, index) {
  parent.classList.add("display-hidden");
  btn_container.classList.add("display-hidden");
  movie_parent.classList.remove("display-hidden");
  closeMoviebtn.classList.remove("display-hidden");
  const markup = `<img class ="full-content-des full-content-img" src="${newMovies[index].iamge}" alt="" />
  <div class="full-content-des">
    <span class="full-content-container">
      <p>
        <i class="ri-movie-fill"></i>
        <span>${newMovies[index].fullTitle}</span>
      </p>
      <p>
        <i class="ri-star-fill"></i>
        <span>Rating : ${newMovies[index].imDbRating}/10 <sub>${newMovies[index].imDbRatingCount} votes</sub></span>
      </p>
      <p>
        <i class="ri-film-line"></i>
        <span>${newMovies[index].genres}</span>
      </p>
      <p>
        <i class="ri-calendar-line"></i
        ><span> Release Date : ${newMovies[index].releaseState} </span>
      </p>
      <p>
        <i class="ri-time-fill"></i>
        <span>Runtime : ${newMovies[index].runtimeStr}</span>
      </p>
    </span>
    <span>
      <button class="book-btn btn">
        <span><i class="ri-coupon-2-fill"></i>Book Tickets </span>
      </button>
    </span>
  </div>
  `;
  movie_parent.insertAdjacentHTML("afterbegin", markup);
  fullContentImage = document.querySelector(".full-content-img");
}
export function addEventHandlerMovieItem(handler) {
  window.addEventListener("hashchange", handler);
}
export function addEventHandlerNext(handler) {
  nextMoviesbtn.addEventListener("click", handler);
}
export function addEventHandlerPrev(handler) {
  prevMoviesbtn.addEventListener("click", handler);
}
export function addEventHandlerSearch(handler) {
  searchbtn.addEventListener("click", handler);
}
export function addEventHandlerCloseMovie(handler) {
  closeMoviebtn.addEventListener("click", handler);
}
export function hidingPagesbtn() {
  heading.innerHTML = "";
  nextMoviesbtn.classList.add("visibility-hidden");
  prevMoviesbtn.classList.add("visibility-hidden");
}
export function clearDisplay(parentElement, className) {
  const children = parentElement.querySelectorAll(`${className}`);
  for (const cl of children) {
    cl.remove();
  }
}
