let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('remove');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('remove');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});  //this section from line no 10 to 14 is write for nav section to stuck and apply bg color while site scroll to down