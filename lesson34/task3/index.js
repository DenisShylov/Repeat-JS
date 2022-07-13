const baseUrl = 'https://62cd7c47a43bf78008597d77.mockapi.io/api/v1/userData';

const registerBtnElem = document.querySelector('.submit-button');
const formElem = document.querySelector('form');

const defaultValidator = () =>
  formElem.reportValidity()
    ? registerBtnElem.removeAttribute('disabled')
    : undefined;

const addUserData = (event) => {
  event.preventDefault();
  const formFields = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => {
      return { ...acc, [field]: value };
    },
    {}
  );

  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset="utf-8"' },
    body: JSON.stringify(formFields),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        alert(JSON.stringify(result));
        event.target.reset();
      }
    });
};

formElem.addEventListener('input', defaultValidator);
formElem.addEventListener('submit', addUserData);
