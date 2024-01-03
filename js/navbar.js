const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".navlist");
const links = document.querySelectorAll(".navlist li");

menuIcon.addEventListener('click', ()=>{

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    menuIcon.classList.toggle("toggle");
});


