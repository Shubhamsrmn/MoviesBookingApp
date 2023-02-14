export const sectionmain = document.querySelector(".start-main-content");
export const parent = document.querySelector(".grid-container");
const loader = document.querySelector(".loader");
export const btn_container = document.querySelector(".btn-container");
const prevMoviesbtn = document.querySelector(".prev-movies-btn");
const nextMoviesbtn = document.querySelector(".next-movies-btn");
const searchbtn = document.querySelector(".search-btn");
const searchpopup = document.querySelector(".search-pop-up");
const heading = document.querySelector(".heading");
const searchclsebtn = document.querySelector(".search-popup-close");
export const searchplot = document.querySelector(".search-item-plot");
export const searchtitle = document.querySelector(".search-item-title");
export const initialHashcode = window.location;
export const input = document.getElementById("search");
export const homebtn = document.getElementById("homebtn");
// ---------------------- functions ----------------------------------------------
export function renderTitle(str) {
  heading.innerHTML = str;
}
export function hideLatestMovies() {
  addDisplayHide(parent);
}
export function showLatestMovies() {
  removeDisplayHide(parent);
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
export function showSearchPopup(title, plot) {
  searchtitle.innerHTML = title;
  searchplot.innerHTML = plot;
  searchpopup.classList.remove("display-hidden");
  parent.classList.add("blur-effect");
  btn_container.classList.add("blur-effect");
}
export function hideSearchPopup() {
  searchpopup.classList.add("display-hidden");
  parent.classList.remove("blur-effect");
  btn_container.classList.remove("blur-effect");
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
export function addEventHandlersearchpopupclosebtn(handler) {
  searchclsebtn.addEventListener("click", handler);
}
export function addEventHandlerHomebtn(handler) {
  homebtn.addEventListener("click", handler);
}
