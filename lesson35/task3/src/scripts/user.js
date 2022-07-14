const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const nameLocationElem = document.querySelector('.user__location');

export const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;

  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  nameLocationElem.textContent = location ? `from ${location}` : '';
};
