const parent = document.querySelector(".grid-container");
const nextMoviesbtn = document.querySelector(".next-movies-btn");
export async function render(newMovies, index) {
  if (index + 4 <= newMovies.length)
    nextMoviesbtn.classList.remove("visibility-hidden");
  if (index + 4 >= newMovies.length)
    nextMoviesbtn.classList.add("visibility-hidden");
  for (let curr = index; curr < index + 4; curr++) {
    const markup = `<span><img src="${newMovies[curr].image}" alt="">
        <p>${newMovies[curr].title}</p></span>`;
    parent.insertAdjacentHTML("beforeend", markup);
  }
}
export function addEventHandlerRight(handler) {
  nextMoviesbtn.addEventListener("click", handler);
}
