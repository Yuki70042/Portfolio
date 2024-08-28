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
            aboutText.innerHTML = "Né en avril 2005, j'ai toujours été une enfant très curieuse adorant apprendre et créer des histoires.<br><br> Dès mon plus jeune âge je me suis tant retrouvé bercé dans l'art du jeux vidéos que cela est devenu une vrai passion pour moi. J'y ai découvert des univers, des histoires, des personnages aux caractères distingués que j'adorais redessiner et réinventer. <br> <br> Arrivée au collège les Mathématiques et l'Algorithmie sont des domaines qui m'ont particulièrement accrochés. J'ai eu l'occasion de participer à différents concours tel que \"Castor Informatique\" ou \"Algoréa\".";
            break;
        case 'Lycee':
            aboutText.innerHTML = "Lycéenne au Lycée Jean Mermoz à Saint-Louis, j'ai réalisé un parcours général avec pour options \"Mathématiques\", \"Science de l'Ingénieur\", et \"Numérique et Sciences de l'Informatiques\".<br><br> J'ai pu y découvrir des méthodes de travail, des notions importantes, des outils mais surtout, j'ai réalisé mes premiers programmes via l'apprentissage de python. Il s'agissait d'une logique et d'une façon nouvelle de voir les choses que j'ai tant aimé, que j'ai poursuivis mon apprentissage durant mon temps libre.<br><br> Cependant le lycée à surtout été un trempelin pour moi vers des objectifs plus profesionnels grâce au choix de mes spécialités. J'ai eu la chance de réalisé plusieurs projets en groupes qui m'ont apportés des compétences essentielles tels que le travail d'équipe, de recherche et d'organisation.";
            break;
        case 'BTS':
            aboutText.innerHTML = "J'ai pousuivis mes études en réalisant en alternance un BTS SIO option SLAM au Lycée Condorcet. J'ai durant ces deux années été apprentis à la DSI du Grand Belfort.<br><br> J'ai choisis cette formation pour son parcours profesionnalisant se basant majoritairement sur des travaux pratiques et des projets de groupes. Ma décision s'est portée sur l'option \"Solutions Logicielles et Applications Métier\" qui se concentre sur la conception et la maintenance de programmes applicatifs.<br><br> Ce cursus m'a particulièrement été formateur et durant ces deux années j'ai réellement prit goût à la programmation et la réalisation de projets plus conséquent. C'est durant ces deux années que j'ai pris la décision de partager mon travail via GitHub et Instagram et que j'ai prit goût à programmer chaques soir à titre personnel.";
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