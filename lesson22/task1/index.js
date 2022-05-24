const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const remove = document.querySelector('.remove-handlers-btn');
const attach = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  const eventList = document.querySelector('.events-list');
  eventList.innerHTML += `<span style = " color: ${color}; margin-left: 8px;">${text}</span>`;
};

const clear = () => {
  const eventList = document.querySelector('.events-list');
  eventList.innerHTML = null;
};

const attachHandle = () => {
  divElem.addEventListener('click', greenDiv);
  pElem.addEventListener('click', greenP);
  spanElem.addEventListener('click', greenSpan);
  divElem.addEventListener('click', greyDiv, true);
  pElem.addEventListener('click', greyP, true);
  spanElem.addEventListener('click', greySpan, true);
};

const removeHandle = () => {
  divElem.removeEventListener('click', greyDiv, true);
  pElem.removeEventListener('click', greyP, true);
  spanElem.removeEventListener('click', greySpan, true);
  divElem.removeEventListener('click', greenDiv);
  pElem.removeEventListener('click', greenP);
  spanElem.removeEventListener('click', greenSpan);
};
const removeCall = removeHandle.bind(null);
const attachCall = attachHandle.bind(null);
const clearCall = clear.bind(null);

const greenDiv = logTarget.bind(null, 'DIV', 'green');
const greenP = logTarget.bind(null, 'P', 'green');
const greenSpan = logTarget.bind(null, 'SPAN', 'green');

const greyDiv = logTarget.bind(null, 'DIV', 'grey');
const greyP = logTarget.bind(null, 'P', 'grey');
const greySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', greenDiv);
pElem.addEventListener('click', greenP);
spanElem.addEventListener('click', greenSpan);

divElem.addEventListener('click', greyDiv, true);
pElem.addEventListener('click', greyP, true);
spanElem.addEventListener('click', greySpan, true);

attach.addEventListener('click', attachCall);
remove.addEventListener('click', removeCall);
clearBtn.addEventListener('click', clearCall);
