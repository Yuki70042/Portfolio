

// Ajoute un menu "Burger sur les petits formats"
document.getElementById('menu-toggle').onclick = function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
};


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear(); 
    });
    
    

let angle = 0;

function rotateCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    angle += direction * 60;  // Chaque élément occupe maintenant 60° (360° / 6 éléments)
    carousel.style.transform = `rotateY(${angle}deg)`;
}

function openPDF(file) {
    window.open(file, '_blank');
}