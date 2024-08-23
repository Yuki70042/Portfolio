function showInfo(point) {
    // Réinitialise tous les points de la frise
    document.querySelectorAll('.timeline-point').forEach(function (element) {
        element.classList.remove('active');
    });

    // Ajoute la classe active au point cliqué
    const clickedElement = document.querySelector(`.timeline-point[data-point="${point}"]`);
    clickedElement.classList.add('active');

    // Modifie le texte en fonction du point cliqué
    let aboutText = document.getElementById('about-text');
    switch (point) {
        case 'Enfance':
            aboutText.textContent = "Texte sur l'enfance.";
            break;
        case 'Lycee':
            aboutText.textContent = "Texte sur les années au lycée.";
            break;
        case 'BTS':
            aboutText.textContent = "Texte sur les études en BTS SIO.";
            break;
        case 'Aujourdhui':
            aboutText.textContent = "Texte sur la situation actuelle.";
            break;
        default:
            aboutText.textContent = "Cliquez sur un point pour en savoir plus.";
    }

    // Déplace le curseur
    let cursor = document.getElementById('timeline-cursor');
    let topOffset = clickedElement.offsetTop + (clickedElement.offsetHeight / 2) - (cursor.offsetHeight / 2);
    cursor.style.top = topOffset + "px";
}