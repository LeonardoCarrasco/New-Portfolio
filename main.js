

const navbar_collapse = document.querySelector('#links-menu');



const xmark = document.querySelector('#xmark').addEventListener('click', ()=>{
    navbar_collapse.classList.toggle('appears-nav');
})


const menubtn = document.querySelector('.navbar-toggler').addEventListener('click', ()=>{
    navbar_collapse.classList.toggle("appears-nav")
})
