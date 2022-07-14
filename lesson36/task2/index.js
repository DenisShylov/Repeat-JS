import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanRepos } from './repos.js';
import { hideSpinner, showSpinner } from './spinner.js';

const defaultImg = 'https://avatars3.githubusercontent.com/u10001';
const baseUrl = 'https://api.github.com/users';

const inputElem = document.querySelector('.name-form__input');
const showBtnElem = document.querySelector('.name-form__btn');

const defaultUser = {
  avatar_url: defaultImg,
  name: '',
  location: '',
};
renderUserData(defaultUser);

const onSearchUser = async () => {
  showSpinner();
  cleanRepos();

  const userName = inputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);

    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
};

showBtnElem.addEventListener('click', onSearchUser);
