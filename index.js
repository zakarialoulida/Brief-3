const icons = document.getElementById("icons");
const nav = document.getElementById("nav");

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});