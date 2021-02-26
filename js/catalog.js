const btnBuys = document.querySelectorAll(".button-buy");
const catalogPopup = document.querySelector(".modal-catalog");
const closePopup = document.querySelector(".modal-close__catalog")

for (btnBuy of btnBuys) {
  btnBuy.addEventListener ("click", function () {
    catalogPopup.classList.add("modal-show");
  })
};

closePopup.addEventListener("click", function () {
  catalogPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (catalogPopup.classList.contains("modal-show")) {
      catalogPopup.classList.remove("modal-show");
    }
  }
});
