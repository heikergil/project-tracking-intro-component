const hamburguer = document.querySelector(".hamburguer");
const nav_links = document.querySelector(".nav-links");
const links = document.querySelectorAll(".links");


hamburguer.addEventListener("click", () => {

    if (nav_links.classList.contains('hidden')) {
    nav_links.classList.remove("hidden");
    nav_links.classList.add("flex");
    } else {
        nav_links.classList.remove("flex");
        nav_links.classList.add("hidden");
    } 
})

