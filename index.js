const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');


navToggle.addEventListener("click", () => {
    navList.classList.toggle('hidden');
})