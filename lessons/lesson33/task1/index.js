const userAvatarElem = document.querySelector(".user__avatar");
const usernameElem = document.querySelector(".user__name");
const userLocationELem = document.querySelector(".user__location");

const defaultAvatar = "https://avatars3.githubusercontent.com/u10001";

userAvatarElem.src = defaultAvatar;

// https;//api.github.com/users/USERNAME

// fetch and render user data ...

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInput = document.querySelector(".name-form__input");

const fetchUserData = (userName) =>
    fetch(`https://api.github.com/users/${userName}`) // if we need only GET we may not put second parameter for fetch usually it looks like fetch(url,options)
    .then((response) => response.json());

const renderUserData = (userData) => {
    const { avatar_url, name, location } = userData;
    userAvatarElem.src = avatar_url;
    usernameElem.textContent = name;
    userLocationELem.textContent = location ? `from ${location}` : "";
};

const onSearchUser = () => {
    const userName = userNameInput.value;
    fetchUserData(userName).then((userData) => renderUserData(userData));
};

showUserBtnElem.addEventListener("click", onSearchUser);