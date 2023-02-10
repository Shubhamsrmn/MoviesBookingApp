// import * as view from "../view.js";
// export const parent = document.querySelector(".booking-main-container");
// export const priceRange = document.getElementById("pricerange");
// export const movieTiming = document.getElementById("movietime");
// export const dateparent = document.querySelector(".date-panel-container");
// export const toggleleft = document.querySelector(".toggle-left");
// export const toggleright = document.querySelector(".toggle-right");
// export let currentday;
// export function renderTheaters(theatersDetails, timingval, priceval) {
//   view.clearDisplay(parent, ".theater-container");
//   if (timingval === "0-24") {
//     renderTheaterswith(
//       theatersDetails,
//       theatersDetails[4].defaultTiming,
//       priceval
//     );
//   } else if (timingval === "9-12") {
//     renderTheaterswith(
//       theatersDetails,
//       theatersDetails[4].morningTiming,
//       priceval
//     );
//   } else if (timingval === "13-16") {
//     renderTheaterswith(
//       theatersDetails,
//       theatersDetails[4].afternoonTiming,
//       priceval
//     );
//   } else if (timingval === "18-21") {
//     renderTheaterswith(
//       theatersDetails,
//       theatersDetails[4].nightTiming,
//       priceval
//     );
//   } else if (timingval === "21-24") {
//     renderTheaterswith(
//       theatersDetails,
//       theatersDetails[4].lateNightTiming,
//       priceval
//     );
//   }
// }
// function timingStr(tarr, parr, pv) {
//   let f = "";
//   const lowbound = pv.slice(0, 3);
//   const highbound = pv.slice(4, 7);
//   for (let a = 0; a < tarr.length; a++) {
//     if (parr[a] >= lowbound && parr[a] <= highbound) {
//       f = f + `<button class="timingbookbtn btn">${tarr[a]}</button>`;
//     }
//   }
//   return f;
// }
// function renderTheaterswith(theatersDetails, Arr, priceval) {
//   for (let idx = 0; idx < Arr.length; idx++) {
//     const timestr = timingStr(
//       theatersDetails[Arr[idx]].timingArr,
//       theatersDetails[Arr[idx]].priceArr,
//       priceval
//     );
//     const markup = `<div class="theater-container"><div class="theater-name-container">
//      <span class="theater-name">${theatersDetails[Arr[idx]].theaterName}</span>
//      </div>
//      <div class="theater-timing-btn-container">${timestr}</div></div>`;
//     parent.insertAdjacentHTML("beforeend", markup);
//   }
// }
// export function addEventHandlerFilter(handler) {
//   priceRange.addEventListener("change", handler);
//   movieTiming.addEventListener("change", handler);
// }

// export function renderdatePanel() {
//   for (let i = 0; i < 4; i++) {
//     const curr = new Date();
//     curr.setDate(curr.getDate() + i);
//     const currweek = new Intl.DateTimeFormat(navigator.language, {
//       weekday: "short",
//     })
//       .format(curr)
//       .toUpperCase();
//     const currday = new Intl.DateTimeFormat(navigator.language, {
//       day: "numeric",
//     }).format(curr);
//     const currmonth = new Intl.DateTimeFormat(navigator.language, {
//       month: "short",
//     })
//       .format(curr)
//       .toUpperCase();
//     const markup = `<span class="single-date" id="${i}">
//     <span>${currweek}</span>
//     <span><b>${currday}</b></span>
//     <span>${currmonth}</span>
//   </span>`;
//     dateparent.insertAdjacentHTML("beforeend", markup);
//   }
//   currentday = document.getElementById("0");
//   currentday.classList.add("current-day");
// }
// export function addEventHandlerToggleleft(handler) {
//   toggleleft.addEventListener("click", handler);
// }
// export function addEventHandlerToggleright(handler) {
//   toggleright.addEventListener("click", handler);
// }
// export function updateCurrentDay(id) {
//   currentday.classList.remove("current-day");
//   currentday = document.getElementById(`${id}`);
//   currentday.classList.add("current-day");
// }
// export function renderBookingHeading(title, genres) {
//   const heading = document.querySelector(".booking-main-title");
//   const genrecontainer = document.querySelector(".booking-main-genres");
//   heading.innerHTML = title;
//   let markup = "";
//   for (let index = 0; index < genres.length; index++) {
//     markup += `<span>${genres[index].value.toUpperCase()}</span>`;
//   }
//   genrecontainer.insertAdjacentHTML("beforeend", markup);
// }
import * as view from "../view.js";
export const parent = document.querySelector(".booking-main-container");
export const priceRange = document.getElementById("pricerange");
export const movieTiming = document.getElementById("movietime");
export const dateparent = document.querySelector(".date-panel-container");
export const toggleleft = document.querySelector(".toggle-left");
export const toggleright = document.querySelector(".toggle-right");
export const closetheaters = document.querySelector(".theater-close-btn");
export const heading = document.querySelector(".booking-main-title");
export const genrecontainer = document.querySelector(".booking-main-genres");
export let currentday;
// --------------------functions -----------------------------
export function resetFilters() {
  priceRange.selectedIndex = 0;
  movieTiming.selectedIndex = 0;
}
export function renderTheaters(theatersDetails, timingval, priceval) {
  view.clearDisplay(parent, ".theater-container");
  if (timingval === "0-24") {
    renderTheaterswith(
      theatersDetails,
      theatersDetails[4].defaultTiming,
      priceval
    );
  } else if (timingval === "9-12") {
    renderTheaterswith(
      theatersDetails,
      theatersDetails[4].morningTiming,
      priceval
    );
  } else if (timingval === "13-16") {
    renderTheaterswith(
      theatersDetails,
      theatersDetails[4].afternoonTiming,
      priceval
    );
  } else if (timingval === "18-21") {
    renderTheaterswith(
      theatersDetails,
      theatersDetails[4].nightTiming,
      priceval
    );
  } else if (timingval === "21-24") {
    renderTheaterswith(
      theatersDetails,
      theatersDetails[4].lateNightTiming,
      priceval
    );
  }
}
function timingStr(tarr, parr, pv) {
  let f = "";
  const lowbound = pv.slice(0, 3);
  const highbound = pv.slice(4, 7);
  for (let a = 0; a < tarr.length; a++) {
    if (parr[a] >= lowbound && parr[a] <= highbound) {
      f = f + `<button class="timingbookbtn btn">${tarr[a]}</button>`;
    }
  }
  return f;
}
function renderTheaterswith(theatersDetails, Arr, priceval) {
  for (let idx = 0; idx < Arr.length; idx++) {
    const timestr = timingStr(
      theatersDetails[Arr[idx]].timingArr,
      theatersDetails[Arr[idx]].priceArr,
      priceval
    );
    const markup = `<div class="theater-container"><div class="theater-name-container">
     <span class="theater-name">${theatersDetails[Arr[idx]].theaterName}</span>
     </div>
     <div class="theater-timing-btn-container">${timestr}</div></div>`;
    parent.insertAdjacentHTML("beforeend", markup);
  }
}
export function addEventHandlerFilter(handler) {
  priceRange.addEventListener("change", handler);
  movieTiming.addEventListener("change", handler);
}

export function renderdatePanel() {
  for (let i = 0; i < 4; i++) {
    const curr = new Date();
    curr.setDate(curr.getDate() + i);
    const currweek = new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
    })
      .format(curr)
      .toUpperCase();
    const currday = new Intl.DateTimeFormat(navigator.language, {
      day: "numeric",
    }).format(curr);
    const currmonth = new Intl.DateTimeFormat(navigator.language, {
      month: "short",
    })
      .format(curr)
      .toUpperCase();
    const markup = `<span class="single-date" id="${i}">
    <span>${currweek}</span>
    <span><b>${currday}</b></span>
    <span>${currmonth}</span>
  </span>`;
    dateparent.insertAdjacentHTML("beforeend", markup);
  }
  currentday = document.getElementById("0");
  currentday.classList.add("current-day");
}
export function addEventHandlerToggleleft(handler) {
  toggleleft.addEventListener("click", handler);
}
export function addEventHandlerToggleright(handler) {
  toggleright.addEventListener("click", handler);
}
export function updateCurrentDay(id) {
  currentday.classList.remove("current-day");
  currentday = document.getElementById(`${id}`);
  currentday.classList.add("current-day");
}
export function renderTheatersPageHeading(title, genres) {
  heading.innerHTML = title;
  let markup = "";
  for (let index = 0; index < genres.length; index++) {
    markup += `<span class = "single-genre">${genres[
      index
    ].value.toUpperCase()}</span>`;
  }
  genrecontainer.insertAdjacentHTML("beforeend", markup);
}
export function addEventHandlertheaterclosebtn(handler) {
  closetheaters.addEventListener("click", handler);
}
