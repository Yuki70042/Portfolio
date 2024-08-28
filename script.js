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
            aboutText.innerHTML = "Né en Avril 2005, j'ai toujours été une enfant très curieuse adorant apprendre et créer des histoires.<br><br> Dès mon plus jeune âge je me suis tant retrouvé bercé dans l'art du jeux vidéos que cela est devenu une passion pour moi. J'y ai découvert des concepts, des univers, des histoires, des personnages aux caractères distingués que j'adorais redessiner et réinventer. <br> <br> Arrivée au collège les Mathématiques et l'Algorithmie sont des domaines qui m'ont particulièrement accrochés. J'ai eu l'occasion de participer à différents concours tel que \"Castor Informatique\" ou \"Algoréa\".";
            break;
        case 'Lycee':
            aboutText.innerHTML = "Texte sur les années au lycée.";
            break;
        case 'BTS':
            aboutText.innerHTML = "Texte sur les études en BTS SIO.";
            break;
        case 'Aujourdhui':
            aboutText.innerHTML = "Texte sur la situation actuelle.";
            break;
        default:
            aboutText.innerHTML = "Cliquez sur un point pour en savoir plus.";
    }

    // Déplace le curseur
    let cursor = document.getElementById('timeline-cursor');
    let topOffset = clickedElement.offsetTop + (clickedElement.offsetHeight / 2) - (cursor.offsetHeight / 2);
    cursor.style.top = topOffset + "px";
}