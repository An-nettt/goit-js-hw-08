const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.textarea.addEventListener('input', onInput);
refs.textarea.addEventListener('input', onTextareaInput);
refs.form.addEventListener('submit', onFormSubmit);

function onInput(event) {
  const input = event.target.value;

  console.log(input);
}

function onTextareaInput(event) {
  const value = event.target.value;
  localStorage.setItem('message', value);
}

function onFormSubmit(event) {}
