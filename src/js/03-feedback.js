import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onInputForm, 500));
form.addEventListener("submit", onFormSubmit);

const formData = {};
let savesItems = {};

function onInputForm(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

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
