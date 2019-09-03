const hamburguer = document.querySelector(".hamburguer");
const nav_links = document.querySelector(".nav-links");
const links = document.querySelectorAll(".links");


hamburguer.addEventListener("click", () => {
    nav_links.classList.remove("hidden");
})

