const spinnerElem = document.querySelector('.spinner');

export const showSpinner = () => {
  spinnerElem.classList.remove('spinner_hiden');
};

export const hideSpinner = () => {
  spinnerElem.classList.add('spinner_hiden');
};
