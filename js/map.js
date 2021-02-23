const mapLink = document.querySelector(".map-popup");
const mapPopup = document.querySelector(".modal-map");
const closeMap = document.querySelector(".modal-close__map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

closeMap.addEventListener("click", function () {
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
