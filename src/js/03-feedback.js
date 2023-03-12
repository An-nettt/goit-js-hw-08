import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", onInputForm);
form.addEventListener("submit", onFormSubmit);

let savesItems = {};

function onInputForm(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  let inputEmail = email.value;
  let inputMess = message.value;

  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify({ email: inputEmail, message: inputMess })
  );
}

function setStorage(params) {}

const savedItems = localStorage.getItem("feedback-form-state");
if (savedItems) {
  savesItems = JSON.parse(savedItems);
  form.email.value = savesItems.email;
  form.message.value = savesItems.message;
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem("feedback-form-state");

  console.log({ email: savesItems.email, message: savesItems.message });
}
