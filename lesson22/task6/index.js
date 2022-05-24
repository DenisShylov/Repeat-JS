const btn = document.querySelector('.single-use-btn');
const single = () => {
  console.log('cliked');
  btn.removeEventListener('click', single);
};
btn.addEventListener('click', single);
