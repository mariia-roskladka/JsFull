const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatar3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/{$userName}`)
        .then(response => response.json());
};


const renderUserData = userData => {
    console.log(userData);
    const {} = userData;
};




const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__info');


const onSearchUser = () => {
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);