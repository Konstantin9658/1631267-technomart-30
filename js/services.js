const btnDelivery = document.querySelector(".btn-delivery");
const btnGuarantee = document.querySelector(".btn-guarantee");
const btnCredit = document.querySelector(".btn-credit");
const btnServices = document.querySelector(".button-services");
const itemDelivery = document.querySelector(".delivery");
const itemGuarantee = document.querySelector(".guarantee");
const itemCredit = document.querySelector(".credit");

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

