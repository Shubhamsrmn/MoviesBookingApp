const prevMoviesbtn = document.querySelector(".prev-movies-btn");
const nextMoviesbtn = document.querySelector(".next-movies-btn");
const searchbtn = document.querySelector(".search-btn");
const heading = document.querySelector(".heading");
const parent = document.querySelector(".grid-container");
export const input = document.getElementById("search");
export const loader = document.querySelector(".loader");
export function renderHeading(str) {
  heading.innerHTML = str;
}
export async function render(newMovies, index) {
  if (newMovies.length === 0) return;
  clearMoviesDisplay();
  if (index >= 4) prevMoviesbtn.classList.remove("visibility-hidden");
  else prevMoviesbtn.classList.add("visibility-hidden");
  if (index + 4 <= newMovies.length)
    nextMoviesbtn.classList.remove("visibility-hidden");
  else nextMoviesbtn.classList.add("visibility-hidden");
  for (let curr = index; curr < index + 4; curr++) {
    if (curr >= newMovies.length) break;
    const markup = `<span class ="movies-item"><a href="#${newMovies[curr].id}">
    <img loading="lazy" src="${newMovies[curr].image}" alt="">
    <p>${newMovies[curr].title}</p></a></span>`;
    parent.insertAdjacentHTML("beforeend", markup);
  }
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
export function clearMoviesDisplay() {
  const children = parent.querySelectorAll(".movies-item");
  for (const cl of children) {
    cl.remove();
  }
}
export function hidingPagesbtn() {
  heading.innerHTML = "";
  nextMoviesbtn.classList.add("visibility-hidden");
  prevMoviesbtn.classList.add("visibility-hidden");
}
