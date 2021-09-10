export function squaredNumbers() {
    const Elements = document.querySelectorAll('.number');
    console.log([...Elements].map(elem => elem.dataset.number));
    return [...Elements].map((elem, index) => {
        return (elem.dataset.squaredNumber = [...Elements].map(elem => elem.dataset.number)[index] ** 2);
    });
}