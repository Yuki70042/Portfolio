

// Ajoute un menu "Burger sur les petits formats"
document.getElementById('menu-toggle').onclick = function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
};




// Ajoute une animations au niveau de la frise chronologique
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
            aboutText.innerHTML = "Né en avril 2005, j'ai toujours été une enfant curieuse, passionnée par l'apprentissage et la création d'histoires. Dès mon plus jeune âge, je me suis plongée dans le monde des jeux vidéos, où j'ai découvert des univers fascinants et des personnages aux personnalités distinctes que j'adorais redessiner et réinventer.<br><br> Cette immersion précose dans l'art des jeux vidéos est rapidement devenue une véritable passion. Les mondes imaginaires me captivaient, nourissant mon envie d'apprendre et de créer.<br><br> Au collège, mon intérêt pour les Mathématiques et l'Algorithmie a naturellement émergés. Ces domaines où la logique rencontre la créativité m'ont poussé à explorer davantage les possibilités offertes par la technologies. J'ai eu l'opportunité de participer à plusieurs concours, tels que le \"Castor Informatique\" et \"Algoréa\", où j'ai pu mettre en pratique mes compétences naissantes.";
            break;
        case 'Lycee':
            aboutText.innerHTML = "Lycéenne au Lycée Jean Mermoz à Saint-Louis, j'ai suivi un parcours général avec les options \"Mathématiques\", \"Science de l'Ingénieur\", et \"Numérique et Sciences de l'Informatiques\".Cette formation m'a permis de découvrir des méthodes de travail efficace, d'acquérir des notions essentielles, et de maîtriser des outils technologiques.<br><br> C'est au lycée que j'ai écrit mes premiers programmes, notamment en python. Cet apprentissage m'a offert une nouvelle perspective sur la logique et la résolution de problèmes, me passionnant au point de poursuivre mon exploration de la programmation duran tmon temps libre.<br><br> Le lycée a également été un trempelin vers des ambitions plus professionnelles. Grâces à mes spécialités, j'ai pu réaliser plusieurs projets en groupe, où j'ai perfectionné mes compétences en travail d'équipe, en recherche et en organisation. Ces expériences ont été essentielles dans ma formation, me préparant pour les défis futurs.";
            break;
        case 'BTS':
            aboutText.innerHTML = "Actuellement en deuxième année de BTS Services Informatiques aux Organisations (SIO) avec l'option Solutions Logicielles et Applications Métier (SLAM), j'ai choisi de poursuivre mes études en alternance au Lycée Condorcet. Durant ces deux années, j'ai eu l'opportunité d'être apprentie au sein de la DSI du Grand Belfort.<br><br> J'ai opté pour cette formation en raison de son approche profesionnalisante fortement axée sur des travaux pratiques et des projets de groupes. L'option SLAM qui se concentre sur la conception, le développement et la maintenance de programmes applicatifs orrespondait parfaitement à mes intérêts.<br><br> Ce cursus s'est révélé être une expérience formatrice et enrichissante, où j'ai véritablement développé une passion pour la programmation et la gestion de projets complexes. C'est également durant cette période que j'ai commencé à partager mes réalisations sur GitHub et Instagram, et que je me suis pleinement investie, consacrant une partie de mes soirées à des projets personnels.";
            break;
        case 'Aujourdhui':
            aboutText.innerHTML = "Je me définis aujourd'hui comme une personne ambitieuse, avec un fort désir de poursuivre mes études jusqu'au niveau master. Mon objectif est d'acquérir une expertise approfondie, notamment grâce à une expérience internationale qui me permettrait d'élargir mes horizons professionnels et personnels.<br><br> Passionnée par l'innovation et le dépassement de soi, j'aime explorer de nouvelles perspectives et relever des défis qui me poussent à évoluer constamment. Je suis ouverte à toutes les opportunités qui me permettent de développer mes compétences et d'apporter une valeur ajoutés dans mes projets. <br><br> Aujourd'hui, je m'épanouis en explorant les multiples facettes du développement informatique pour affiner mes compétences sans me presser de me spécialiser. J'apprends le C# à travers la création d'applications Windows Forms et de petits jeux vidéo avec Unity. Toujours curieuse, j'ai plusieurs projets en tête, comme l'idée de créer plusieurs jeux ou encore une application mobile pour organiser des jeux de rôle.";
            break;
        default:
            aboutText.innerHTML = "Cliquez sur un point pour en savoir plus.";
    }

    // Déplace le curseur
    let cursor = document.getElementById('timeline-cursor');
    let topOffset = clickedElement.offsetTop + (clickedElement.offsetHeight / 2) - (cursor.offsetHeight / 2);
    cursor.style.top = topOffset + "px";
}


document.addEventListener("DOMContentLoaded", function() {
document.getElementById("year").textContent = new Date().getFullYear(); 
});



document.addEventListener("DOMContentLoaded", function() {
    // Crée un observateur
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe 'visible' lorsque l'élément entre dans la vue
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Sélectionne tous les éléments à observer
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});
