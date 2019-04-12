const menagment = document.querySelectorAll(".ofert_menagment span");
const administracion = document.querySelectorAll(".ofert_administracion span");
const consultancy = document.querySelectorAll(".ofert_consultancy span");

document.addEventListener("scroll", () => {
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop / 3
  ) {
    menagment.forEach(e => {
      e.classList.add("active_option");
    });
  }
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop / 3
  ) {
    administracion.forEach(e => {
      e.classList.add("active_option");
    });
  }
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop
  ) {
    consultancy.forEach(e => {
      e.classList.add("active_option");
    });
  }
});
