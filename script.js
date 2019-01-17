const headerText = document.querySelector(".headerText p");

const headerTextList = [
  "Zarządzanie to dla nas przyjemność",
  "staniemy przed każdym wyzwaniem",
  "twój zaufany partner",
  "bezpieczeństwo i zaufanie"
];
let i = 0;
let j = 0;
function changeTextHeader() {
  headerText.innerHTML = headerTextList[i];
  i++;
  if (i === headerTextList.length) {
    i = 0;
  }
  setTimeout(changeTextHeader, 7000);
}

changeTextHeader();

const staticNumeber = document.querySelector(".staticNumeber span");

function handleStaticNumeber() {
  staticNumeber.innerHTML = j;
  j++;

  if (j === 18) {
    clearTimeout(yars);
  }
}

// for (k = 0; k < 19; k++) {

// }
window.addEventListener("scroll", () => {
  if (scrollY > 2300) {
    const yars = setTimeout(handleStaticNumeber, 70);
  }
});

class Scrolling {
  constructor() {}
}
