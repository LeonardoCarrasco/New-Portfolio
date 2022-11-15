// here i goind to add (new) project card to show

const card_container = document.querySelector(".card-container");

fetch('proyects.json')
.then(res => res.json())
.then(data =>{
    for (const i in data) {
        console.log(data[i]);

        let div = document.createElement("div");
        div.classList.add("col");

        let skills='';

        for (const value of data[i].lang_used) {
            console.log(value); 
            skills += `<span class="me-2 py-2 color-skills">${value}</span>`;
            console.log(skills)
        }

        div.innerHTML=
        `<div class="card card-bckgr-color ligth-border"><img src="${data[i].img_src}" class="card-img-top" alt="..."><div class="card-body"><h4 class="card-title fw-semibold">${data[i].title}</h4><div class="skills-card">${skills}</div><div class="links d-flex align-items-center mt-3"><a class="fs-4 me-3" href="${data[i].links.github}" target="_blank"><i class="bi bi-github"></i></a><a class="fs-4" href="${data[i].links.deploy}" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a></div></div></div>`;

        card_container.append(div);
}}  
)






