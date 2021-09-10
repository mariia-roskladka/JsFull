export function manageClasses() {
    const firstItem = document.querySelector('.one');
    firstItem.classList.add('selected');
    const secondItem = document.querySelector('.two');
    secondItem.classList.remove('selected');
    const thirdItem = document.querySelector('.three');
    thirdItem.classList.toggle('three_done');
    const fourthItem = document.querySelector('.four');
    if (fourthItem.classList.contains('some-class')) {
        fourthItem.classList.add('another-class');
    }
}
manageClasses();