class HeaderSlider {
  constructor(i, element, table) {
    this.element = document.querySelector(element);
    this.table = table;
    this.i = i;
  }

  changeTextHeader() {
    this.element.innerHTML = this.table[this.i];
    this.i++;
    if (this.i === this.table.length) {
      this.i = 0;
    }
  }
  changeImage() {
    this.element.style.backgroundImage = `url(${this.table[this.i]})`;
    this.i++;
    if (this.i === this.table.length) {
      this.i = 0;
    }
  }
}

const kwadrat = new HeaderSlider(1, ".headerText p", [
  "Zarządzanie to dla nas przyjemność",
  "staniemy przed każdym wyzwaniem",
  "twój zaufany partner",
  "bezpieczeństwo i zaufanie"
]);

(function slider() {
  setTimeout(function() {
    kwadrat.changeTextHeader();
    slider();
  }, 7000);
})();

const pros = new HeaderSlider(1, ".clientsSlider div", [
  "img/architecture-768432_1920.jpg",
  "img/moscow-city-1573549_1920.jpg",
  "img/office-building-2297869_1920.jpg",
  "img/skyscraper-3094696_1920.jpg"
]);
(function slider2() {
  setTimeout(function() {
    pros.changeImage();
    slider2();
  }, 6000);
})();
