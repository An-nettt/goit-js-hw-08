import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
  // input: document.querySelector('.feedback-form input'),
  // textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener("input", throttle(onInputForm, 500));
refs.form.addEventListener("submit", onFormSubmit);

const savedItems = {};
onOutput();

function onInputForm(event) {
  const {
    elements: { email, message },
  } = event.target;

  console.log(event.target);

  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify({ email: email.value, message: message.value })
  );
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem("feedback-form-state");

  console.log(savedItems);

  // console.log('email' email.value);
  // console.log('message' message.value);
}

function onOutput() {
  savedItems = localStorage.getItem("feedback-form-state");

  if (savedItems) {
    console.log(savedItems);
    const savesItems = JSON.parse(savedItems);
    console.log(savesItems.email);

    // console.log(savesItems.email);

    // savesItems.email.value = savedItems;
  }
}
