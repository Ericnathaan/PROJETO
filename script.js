document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const customMenuButton = document.querySelector(".custom-menu-btn");
    const customMenu = document.querySelector(".custom-menu");

    customMenuButton.addEventListener("click", function () {
        customMenu.classList.toggle("active");
    });
});
