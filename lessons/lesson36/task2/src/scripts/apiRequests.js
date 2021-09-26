export const fetchUserData = async(userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    if (!response.ok) {
        throw new Error("Failed to load data");
    }

    const x = await response.json();
    return x;
};

export const fetchRepositories = async(url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to load data");
    }

    const x = await response.json();
    return x;
};