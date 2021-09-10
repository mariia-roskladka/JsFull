export function getTitleElement() {
    //
    const titleElem = document.querySelector('.title');

    console.dir(titleElem);
    return titleElem;
}

export function getInputElement() {
    //
    const inputElem = document.querySelector('[type="text"]');
    console.dir(inputElem);
    return inputElem;

}
getTitleElement();
getInputElement();