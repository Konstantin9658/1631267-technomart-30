const btnBuys = document.querySelectorAll(".button-buy");
const catalogPopup = document.querySelector(".modal-catalog");
const closePopup = document.querySelector(".modal-close__catalog");
const btnPopup = document.querySelector(".button-popup");
const feedbackForm = document.querySelector(".modal-feedback");
const closeForm = document.querySelector(".modal-close__feedback");
const userName = feedbackForm.querySelector(".modal-user__name");
const userEmail = feedbackForm.querySelector(".modal-user__email");
const userText = feedbackForm.querySelector(".modal-user__text");
const btnFeedback = document.querySelector(".btn-feedback");
const mapLink = document.querySelector(".map-popup");
const mapPopup = document.querySelector(".modal-map");
const closeMap = document.querySelector(".modal-close__map");
const btnDelivery = document.querySelector(".btn-delivery");
const btnGuarantee = document.querySelector(".btn-guarantee");
const btnCredit = document.querySelector(".btn-credit");
const btnServices = document.querySelector(".button-services");
const itemDelivery = document.querySelector(".delivery");
const itemGuarantee = document.querySelector(".guarantee");
const itemCredit = document.querySelector(".credit");

for (const btnBuy of btnBuys) {
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

btnDelivery.addEventListener("click", function () {
  btnDelivery.classList.add("active");
  btnGuarantee.classList.remove("active");
  btnCredit.classList.remove("active");
  if (btnDelivery.classList.contains("active")) {
    itemGuarantee.classList.remove("show");
    itemDelivery.classList.add("show");
    itemCredit.classList.remove("show");
  }
});

btnGuarantee.addEventListener("click", function () {
  btnDelivery.classList.remove("active");
  btnCredit.classList.remove("active");
  btnGuarantee.classList.add("active");
  if (btnGuarantee.classList.contains("active")) {
    itemGuarantee.classList.add("show");
    itemDelivery.classList.remove("show");
    itemCredit.classList.remove("show");
  }
});

btnCredit.addEventListener("click", function () {
  btnCredit.classList.add("active");
  btnDelivery.classList.remove("active");
  btnGuarantee.classList.remove("active");
  if (btnCredit.classList.contains("active")) {
    itemGuarantee.classList.remove("show");
    itemDelivery.classList.remove("show");
    itemCredit.classList.add("show");
  }
});

