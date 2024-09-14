

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
    
    
    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
    
        var form = event.target;
        var formData = new FormData(form);
    
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json', // En-tête pour accepter une réponse JSON
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Convertir la réponse en JSON
            }
            throw new Error('Network response was not ok.'); // Gérer les erreurs de réseau
        })
        .then(data => {
            // Message de succès
            alert('Message envoyé');
            form.reset(); // Réinitialiser le formulaire
        })
        .catch(error => {
            // Gestion discrète des erreurs
            console.error('Erreur:', error);
            alert('erreur, Merci de Reesayer plus tard');
        });
    });


