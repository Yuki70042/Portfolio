

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
    
    

// Interception de l'envoi du formulaire pour afficher un message de confirmation
const form = document.querySelector('form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.style.display = 'none';
            confirmationMessage.style.display = 'block';
        } else {
            alert('Une erreur s\'est produite, veuillez réessayer.');
        }
    }).catch(error => {
        alert('Erreur de réseau. Veuillez réessayer plus tard.');
    });
});