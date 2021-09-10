export function finishList() {
    const list = document.querySelector('.list');
    const listItemOne = document.createElement('li');
    listItemOne.textContent = '1';
    list.prepend(listItemOne);
    const listItemEight = document.createElement('li');
    listItemEight.textContent = '8';
    list.append(listItemEight);
    const specialItem = document.querySelector('.special');
    const listItemFour = document.createElement('li');
    listItemFour.textContent = '4';
    specialItem.before(listItemFour);
    const listItemSix = document.createElement('li');
    listItemSix.textContent = '6';
    specialItem.after(listItemSix);
}
finishList();