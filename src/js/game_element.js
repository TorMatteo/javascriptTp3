class GameElement {

    constructor(ligne, colonne, spriteURL) {
        this.ligne = ligne;
        this.colonne = colonne;
        this.spriteElement = document.createElement("img");
        this.spriteElement.setAttribute("class", "element");
        this.spriteElement.setAttribute("src", "spriteURL")
        this.placer(this.ligne,this.colonne);
    }

    /**
     * Déplace l'élément à la position indiquée (et replace le sprite pour qu'il soit affiché au bon endroit)
     * @param ligne {Number} indice de la ligne où placer l'élément
     * @param colonne {Number} indice de la colonne où placer l'élément
     */
    placer(ligne, colonne) {
        this.spriteElement.style.top= 51+"px"+colonne+"px";
        this.spriteElement.style.left= 51+"px"+ligne+"px";
        this.ligne = ligne;
        this.colonne = colonne;
    }

    /**
     * Affiche l'élément
     * Ajoute l'élément (= la balise) dans le <div id="champ">
     */
    afficher() {
        let blabla = document.getElementById("champ");
        blabla.appendChild(this.spriteElement);
    }

    /**
     * Cache l'élément
     * Supprime l'élément du <div id="champ">
     */
    cacher() {
        let blabla = document.getElementById("champ");
        blabla.removeChild(this.spriteElement);
    }
}


class Tresor extends GameElement {
    constructor(colonne) {
        // à compléter
    }
}


class Mine extends GameElement {
    constructor(ligne, colonne) {
        // à compléter
    }
}


class Personnage extends GameElement {
    constructor(colonne) {
        // à compléter
    }

    /**
     * Exécute un déplacement du joueur horizontalement ou verticalement des valeurs passées en paramètre.
     * Si le déplacement est valide (le joueur ne sort pas de la grille 20x20), la position du personnage est modifiée
     * et le score est décrémenté de 1.
     *
     * Prérequis : exactement un des deux paramètres `dl` et `dc` est non nul, et sa valeur est 1 ou -1.
     * @param dl {Number} déplacement vertical du joueur (modifie la ligne)
     * @param dc {Number} déplacement horizontal du joueur (modifie la colonne)
     */
    deplacer(dl, dc) {
        // à compléter
    }

    /**
     * Met à jour le sprite (= l'image) du personnage
     * On doit afficher l'image alternative si il y a une mine dans une case voisine
     * @param nbMinesVoisines {Number} nombre de mines dans les cases voisines
     */
    majSprite(nbMinesVoisines) {
        // à compléter
    }
}