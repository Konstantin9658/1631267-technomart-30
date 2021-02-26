const btnPopup = document.querySelector(".button-popup");
const feedbackForm = document.querySelector(".modal-feedback");
const closeForm = document.querySelector(".modal-close__feedback");
const userName = feedbackForm.querySelector(".modal-user__name");
const userEmail = feedbackForm.querySelector(".modal-user__email");
const userText = feedbackForm.querySelector(".modal-user__text");
const btnFeedback = document.querySelector(".btn-feedback");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

btnPopup.addEventListener("click", function (evt) {
  feedbackForm.classList.add("modal-show");
  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

closeForm.addEventListener("click", function () {
  feedbackForm.classList.remove("modal-show");
  feedbackForm.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains("modal-show")) {
      feedbackForm.classList.remove("modal-show");
      feedbackForm.classList.remove("modal-error");
    }
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal-error");
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", userName.value);
    }
  }
})
