localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', ('name', 'Tom'));
localStorage.setItem('age', JSON.stringify(18));

export const getLocalStorageData = () =>
    Object.entries(localStorage).reduce((acc, [key, value]) => {
        let newValue;
        try {
            newValue = JSON.parse(value);
        } catch {
            newValue = value;
        }

        return {
            ...acc,
            [key]: newValue,
        };
    }, {});