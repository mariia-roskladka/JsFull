export function getSection(num) {
    const span = document.querySelector(`span[data-number="${num}"]`);
    const parentEl = span.closest('.box');
    //   console.log(parentEl.dataset.section);
    return parentEl.dataset.section;
}
getSection('5');