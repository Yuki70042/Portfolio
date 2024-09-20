

// Ajoute un menu "Burger sur les petits formats"
document.getElementById('menu-toggle').onclick = function () {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
};


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
});



function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.classList.contains('active')) {
        section.classList.remove('active');
    } else {
        section.classList.add('active');
    }
}