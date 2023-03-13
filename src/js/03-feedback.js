import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};
onOutput();

function onInputForm(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onOutput(params) {}
const savedItems = localStorage.getItem('feedback-form-state');
if (savedItems) {
  try {
    const formData = JSON.parse(savedItems);

    const entries = Object.entries(formData);
    entries.forEach(({ name, value }) => {
      formData[name] = value;
      form.email.value = formData.email;
      form.message.value = formData.message;
    });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');

  console.log({ email: formData.email, message: formData.message });
}
