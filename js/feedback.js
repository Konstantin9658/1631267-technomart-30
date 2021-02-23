const btnPopup = document.querySelector(".button-popup");
const feedbackForm = document.querySelector(".modal-feedback");
const closeForm = document.querySelector(".modal-close__feedback");

btnPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("modal-show");
});

closeForm.addEventListener("click", function () {
  feedbackForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains("modal-show")) {
      feedbackForm.classList.remove("modal-show");
    }
  }
});
