const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');


burger.addEventListener('click', () => {
   menu.style.display = 'flex';
   document.body.classList.add('no-scroll');
})
close.addEventListener('click', () => {
    menu.style.display = '';
    document.body.classList.remove('no-scroll');
 })