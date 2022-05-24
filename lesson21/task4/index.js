const getTitle = () => {
  const title = document.querySelector('.title');
  return title.textContent;
};
console.log(getTitle());

const getDescription = () => {
  const about = document.querySelector('.about');
  return about.innerText;
};
console.log(getDescription());

const getPlans = () => {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
};
console.log(getPlans());

const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
};
console.log(getGoal());
