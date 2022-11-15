

const navbar_collapse = document.querySelector('#links-menu');
const navLink = document.querySelectorAll('.nav-link');


const xmark = document.querySelector('#xmark').addEventListener('click', ()=>{
    navbar_collapse.classList.toggle('appears-nav');
})


const menubtn = document.querySelector('.navbar-toggler').addEventListener('click', ()=>{
    navbar_collapse.classList.toggle("appears-nav");
})


navLink.forEach(el => el.addEventListener("click", function() {
    navbar_collapse.classList.toggle('appears-nav');
}));
