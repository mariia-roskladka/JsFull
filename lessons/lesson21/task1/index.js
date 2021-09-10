export function getTitleElement() {
    //
    const titleElem = document.querySelector('.title');

    return console.dir(titleElem);
}

export function getInputElement() {
    //
    const inputElem = document.querySelector('[type="text"]');
    console.dir(inputElem);
    return inputElem;

}
getTitleElement();
getInputElement();