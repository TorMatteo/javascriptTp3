/** @type {Jeu} jeu */
let jeu;  // variable globale représentant le jeu actuel
const boutonNouvellePartie = document.getElementById("nouvelle-partie");

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            jeu.personnage.deplacer(0, -1);
            miseAJour();
            break;
        case 'ArrowUp':
            jeu.personnage.deplacer(-1, 0);
            miseAJour();
            break;
        case 'ArrowRight':
            jeu.personnage.deplacer(0, 1);
            miseAJour();
            break;
        case 'ArrowDown':
            jeu.personnage.deplacer(1, 0)
            miseAJour();
            break;
        default:
    }

});


/**
 * Met à jour la partie et l'affichage pour le joueur en fonction de la position du joueur
 * - indique si la partie est gagnée ou perdue
 * - indique le nombre de mines à proximité du joueur
 * - affiche le score du joueur
 * - met à jour l'image représentant le joueur
 */
function miseAJour() {
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = "Score : " + jeu.personnage.score;
    let nbMines = jeu.nbMinesVoisines();
    jeu.personnage.majSprite(nbMines);
    let messageElement = document.getElementById("message");
    messageElement.textContent = "" + nbMines;
    console.log(jeu.personnage.ligne);
    console.log(jeu.personnage.colonne);
    console.log(jeu.tresor.ligne);
    console.log(jeu.tresor.colonne);
    if (jeu.estPerdu() === true) {
        messageElement.textContent = "Vous avez perdu";
        jeu.afficherMines();
    } else if (jeu.estGagne() === true) {
        messageElement.textContent = "Vous avez gagné";
        jeu.afficherMines();
    }


}


/**
 * Démarre une nouvelle partie
 */
function nouvellePartie() {
    document.getElementById("champ").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    jeu = new Jeu(Math.random());
    miseAJour();

}


window.addEventListener("load", function () {
    nouvellePartie();
});

boutonNouvellePartie.addEventListener("click", function () {
    nouvellePartie();
})
