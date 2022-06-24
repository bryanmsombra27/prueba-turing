const btnMenu = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#menu');

btnMenu.addEventListener('click',()=>{

    btnMenu.classList.toggle("open");
    mobileMenu.classList.toggle("flex");
    mobileMenu.classList.toggle("hidden");

})