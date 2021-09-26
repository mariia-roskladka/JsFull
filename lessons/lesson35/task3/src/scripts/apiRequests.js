export const fetchUserData = (userName) =>
    //   fetch(`https://ai.github.com/users/${userName}`).then((response) => {
    // this one is broken for testing error
    fetch(`https://api.github.com/users/${userName}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to load data");
    });

export const fetchRepositories = (url) =>
    fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to load data");
    });