class Jeu {
    constructor(probaMine) {
        let dcPersonnage = Math.floor(Math.random() * 20);
        let dcTresor = Math.floor(Math.random() * 20);
        this.tresor = new Tresor(dcTresor);
        this.personnage = new Personnage(dcPersonnage);
        this.tresor.afficher();
        this.personnage.afficher();

        this.carte = [];
        for (let i = 0; i < 20; i++) {
            this.carte[i] = [];
            for (let j = 0; j < 20; j++) {
                if ((i === this.personnage.ligne && j === this.personnage.colonne) || (i === this.tresor.ligne && j === this.tresor.colonne)) {
                    this.carte[i][j] = false;
                } else {
                    let isAdjacent = Math.abs(i - this.personnage.ligne) <= 1 && Math.abs(j - this.personnage.colonne) <= 1 ||
                        Math.abs(i - this.tresor.ligne) <= 1 && Math.abs(j - this.tresor.colonne) <= 1;
                    if (probaMine > Math.random() && !isAdjacent) {
                        this.carte[i][j] = true;

                    } else {
                        this.carte[i][j] = false;
                    }
                }
            }
        }

    }


    /**
     * Affiche toutes les mines
     */
    afficherMines() {
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                if (this.carte[i][j] === true) {
                    let mine = new Mine(i, j);
                    mine.afficher();
                }
            }
        }
    }

    /**
     * Cache toutes les mines
     */
    cacherMines() {
        document.getElementById("champ").innerHTML = "";
        this.personnage.afficher();
        this.tresor.afficher();
    }

    /**
     * Renvoie le nombre de mines voisines de la position courante du joueur
     * @returns {number} nombre de mines adjacentes à la position du joueur
     */
    nbMinesVoisines() {
        let nbMine = 0;
        const lignes = this.carte.length;
    const colonnes = this.carte[0].length;
        if (this.personnage.ligne > 0 && this.carte[this.personnage.ligne - 1][this.personnage.colonne] === true) {
            nbMine++;
        }
        if (this.personnage.ligne < lignes - 1 && this.carte[this.personnage.ligne + 1][this.personnage.colonne] === true) {
            nbMine++;
        }
        if (this.personnage.colonne > 0 && this.carte[this.personnage.ligne][this.personnage.colonne - 1] === true) {
            nbMine++;
        }
        if (this.personnage.colonne < colonnes - 1 && this.carte[this.personnage.ligne][this.personnage.colonne + 1] === true) {
            nbMine++;
        }
        return nbMine;

    }

    /**
     * Indique si le joueur a gagné la partie
     * @returns {boolean} true si le joueur a gagné (position sur le trésor)
     */
    estGagne() {
        if (this.tresor.ligne === this.personnage.ligne && this.tresor.colonne === this.personnage.colonne) {
            return true;
        }
    }

    /**
     * Indique si le joueur a perdu la partie
     * @returns {boolean} true si le joueur est positionné sur une mine ou son score est <= 0
     */
    estPerdu() {
        if (this.personnage.score === 0) {
            return true;
        }
        if (this.carte[this.personnage.ligne][this.personnage.colonne] === true) {
            return true;
        }
    }
}
