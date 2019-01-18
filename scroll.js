document.querySelector(".arrow").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".about").offsetTop);
});
document.querySelector(".elements1").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".about").offsetTop);
});
document.querySelector(".elements2").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".oferts").offsetTop);
});
document.querySelector(".elements3").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".clients").offsetTop);
});
document.querySelector(".elements4").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".contacts").offsetTop);
});

document.querySelector(".upArrow ").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("scroll", () => {
  if (scrollY > document.querySelector(".header").offsetTop + 150) {
    document.querySelector(".upArrow").classList.add("upArrow__active");
  } else {
    document.querySelector(".upArrow").classList.remove("upArrow__active");
  }
});

document.querySelector(".menagment__btn").addEventListener("click", () => {
  document.querySelector(".menagment").classList.add("menagment__active");
});
document.querySelector(".menagment .fa-times").addEventListener("click", () => {
  document.querySelector(".menagment").classList.remove("menagment__active");
});

document.querySelector(".administracion__btn").addEventListener("click", () => {
  document.querySelector(".administracion").classList.add("menagment__active");
});
document
  .querySelector(".administracion .fa-times")
  .addEventListener("click", () => {
    document
      .querySelector(".administracion")
      .classList.remove("menagment__active");
  });

document.querySelector(".consultancy__btn").addEventListener("click", () => {
  document.querySelector(".consultancy").classList.add("menagment__active");
});
document
  .querySelector(".consultancy .fa-times")
  .addEventListener("click", () => {
    document
      .querySelector(".consultancy")
      .classList.remove("menagment__active");
  });
