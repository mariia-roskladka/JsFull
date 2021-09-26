/* eslint-disable camelcase */
const userAvatarElem = document.querySelector(".user__avatar");
const usernameElem = document.querySelector(".user__name");
const userLocationELem = document.querySelector(".user__location");
const listElem = document.querySelector(".repo-list");

export const renderUserData = (userData) => {
    const { avatar_url, name, location } = userData;
    userAvatarElem.src = avatar_url;
    usernameElem.textContent = name;
    userLocationELem.textContent = location ? `from ${location}` : "";
};

export const clearList = () => {
    listElem.innerHTML = "";
};

export const renderRepos = (repoList) => {
    listElem.innerHTML = "";
    const repoListElem = repoList.map(({ name }) => {
        const listItemElem = document.createElement("li");
        listItemElem.classList.add("repo-list__item");
        listItemElem.textContent = name;

        return listItemElem;
    });
    listElem.append(...repoListElem);
};