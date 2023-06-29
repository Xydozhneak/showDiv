const area = document.querySelector('textarea');
const divForArea = document.querySelector('.disableDiv');
console.dir(area);

area.addEventListener('focus', () => {
   divForArea.classList.remove('disableDiv');
   divForArea.classList.add('showDiv');
   console.log("area on focus");
});

area.addEventListener('blur', () => {
    divForArea.classList.remove('showDiv');
    divForArea.classList.add('disableDiv');
    console.log("area lost focus");
});