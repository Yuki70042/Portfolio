

// Ajoute un menu "Burger sur les petits formats"
document.getElementById('menu-toggle').onclick = function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
};



// Initialisation de Swiper
const swiper = new Swiper('.swiper', {
    loop: true, // Permet de faire défiler en boucle
    autoplay: {
        delay: 5000, // Défilement toutes les 5 secondes
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Les points sont cliquables
    },
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



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear(); 
    });
    