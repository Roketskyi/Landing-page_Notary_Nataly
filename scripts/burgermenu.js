const toggleBtn = document.getElementById("menu-toggle-btn");
const headerMenu = document.getElementById("header-menu");

document.documentElement.clientWidth < 768 ? headerMenu.style.display = 'none' : 'flex';

toggleBtn.addEventListener("click", function() {
    if (window.innerWidth < 768) {
        headerMenu.style.display = headerMenu.style.display === "none" ? "" : "none";
    }

    toggleBtn.classList.toggle("active");
});