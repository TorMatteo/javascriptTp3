# ![](ressources/logo.jpeg) Prog web client riche - JavaScript 

### IUT Montpellier-Sète – Département Informatique

## TD3
#### _Thème : objets, classes, gestion d'événements par des écouteurs_

Cliquez sur le lien ci-dessous pour faire, dans un dossier public_html/JS/TD3, votre fork privé du TD3 (**attention, pas de fork à la main !**):

https://classroom.github.com/a/TiyLfsDY

la version [pdf](ressources/td3.pdf)

## INTRODUCTION

L’objectif de ce TD est de développer un jeu de champ de mines, où un personnage (représenté par un smiley) doit se déplacer sur un carré de 20 lignes et 20 colonnes pour atteindre un trésor (représenté par un coffre), en évitant un certain nombre de mines qui auront été déposées aléatoirement sur le terrain. 
Le personnage peut se déplacer avec les touches haut, bas, gauche et droite sur le terrain. Il ne peut pas en sortir.
Il est initialement placé sur une case aléatoire de la ligne du bas et le trésor est placé sur une case aléatoire de la ligne du haut. Il commence la partie avec un score de 200 points. Ce score est dégressif : chaque pas lui fait perdre un point.

A tout moment, il sera prévenu du nombre de mines qu’il a à proximité immédiate (à sa gauche, droite, devant ou derrière lui, mais pas celles placées en diagonale, inaccessibles en un pas).

<p align="center">
   <img src="ressources/img1.png">
</p>

S’il arrive au trésor, ou s’il marche sur une mine, ou enfin s’il atteint le trésor, alors un message donne l’information et le jeu est arrêté.

Vous utiliserez dans ce TD les objets JavaScript suivants :

- un objet Personnage, associé à la balise `<img id="personnage">`
- un objet Tresor, associé à la balise `<img id="tresor">`
- un objet Champ, associé à la balise `<div id="carteMines">` 

Les classes Personnage et Tresor héritent d’une classe `Element` qui regroupe les attributs et méthodes en commun.

Les fichiers `jeu.html` et `jeu.css` constituent une base de travail, ainsi que les images fournies. Vous testerez, dans la console, les méthodes que vous coderez.

## EXERCICE 1 - la classe Element

La classe `Element` aura deux classes filles : `Tresor` et `Personnage`. Il n’y aura donc pas d’objet `Element` proprement dit, mais un `Personnage` et un `Tresor`.

On définit un `Element` par les attributs suivants :

- `coordX`, nombre qui représente l’abscisse de l’élément dans le terrain. Partons du principe que la première colonne (la plus à gauche) correspond à `coordX = 1`, et la dernière colonne à `coordX = 20`.

- `coordY`, nombre qui représente l’ordonnée de l’élément. La ligne du haut (celle du trésor) correspondra à `coordY = 1` et la ligne du bas (d’où partira le personnage) correspondra à `coordY = 20`.

- `sprite`, qui correspond à la balise `html` liée à cet élément. On pourrait aussi choisir de dissocier complètement les balises  `html` des objets `Element` qui leur sont intuitivement associés.

On prévoit les méthodes suivantes :

+ `constructor(x,y,id)`, qui construit un nouvel `Element`, de coordonnées `x` et `y`, et de `sprite` la balise `html` dont l’identifiant est le paramètre `id`.

+ `setSprite(str)`, qui met à jour le `src` du `sprite` en lui donnant la valeur du paramètre `str`.

+ `initialiser(x,y,str)`, qui donne aux attributs `coordX` et `coordY` les valeurs des paramètres `x` et `y`, puis agit aussi sur l’attribut `src` du `sprite` de l’`Element` en lui donnant la valeur du paramètre `str` par l’appel de `setSprite`, et enfin place l’`Element` (en appelant la méthode place décrite juste après).

+ `placer()`, qui positionne le `sprite` en ajustant son `top` et son `left` en fonction des coordonnées de l’Element. 
Il faudra donc modifier la valeur de `this.sprite.style.top` et de `this.sprite.style.left`. Le mode de calcul sera à mettre en place. Testez vos formules en console. Comme indications, chaque case de l’image de fond est un carré de 20 px de côté et le quadrillage est décalé de 51 px des bords de l’écran, comme indiqué ci-dessous. Les valeurs à attribuer à `this.sprite.style.top` et `this.sprite.style.left` seront donc construites à partir de `this.coordX`, `this.coordY`, et des nombres 51 et 20.

<p align="center">
   <img src="ressources/img2.png">
</p>

Codez cette classe Element en complétant le fichier `element.js`.

Vous savez qu’il n’y aura pas d’objet `Element` proprement dit, mais pour vérifier la justesse de votre code, vous pourrez en console tester les commandes suivantes :



<p align="center" >
   <img src="ressources/img3.png">
</p>

<div style="border:solid 1 px black;">
	![](ressources/img3.png)
</div>

## EXERCICE 2 - la classe Tresor

Un objet `Tresor` est un objet très simple. Il n’est pas amené à se déplacer. On prévoiera seulement comme méthodes :

+ `constructor(x)`, qui construit le trésor en invoquant le constructeur de la classe Element. Il n’y a besoin que d’un paramètre x (la colonne où sera déposé le trésor) puisque la ligne est obligatoirement celle du haut (ligne 1), et le paramètre name sera l’identifant de la balise qui sera naturellement associée au trésor.

initialiser(x), qui évoque la méthode initialiser de la classe Element. A vous de trouver avec quels paramètres on évoque cette méthode.

Codez cette classe Tresor en complétant le fichier tresor.js. Testez les méthodes dans la console.

Remarques :
 
vous ferez appel au super-constructeur dans constructor(x) ;
vous ferez appel à la méthode mère initialiser de Element dans initialiser(x).

## EXERCICE 3 - l'objet Journee

Une Journee aura comme attributs : 

- son match n°1 noté `match1`;
- son match n°2 noté `match2`;
- son match n°3 noté `match3`;
- son match n°4 noté `match4`;
- un booléen `played` qui dit si la journée a été jouée ou non.


1. Complétez le constructeur donné dans le fichier `journee.js`. Vous initialiserez l’attribut `played` à `false`.

2. Incorporez le fichier `journee.js` à la suite de `match.js`.

3. Testez votre constructeur comme précédemment, en créant dans la console 8 équipes, puis 4 matchs, puis 1 journée.

4. Codez la fonction `afficher()`. Elle est un peu différente des précédents affichages. En effet, l’idée est ici de remplir le `innerHTML` des 4 `<div>` du document html qui correspondent aux 4 matchs (repérez-les par leurs identifiants). Chacun de ces div devra refléter l’affichage du match qui lui correspond.

5. Testez votre fonction `afficher()` dans la console. Elle doit produire un affichage visible (enfin !) dans le navigateur. Vous améliorerez l’esthétique de votre affichage plus tard (avec des balises `<table>`). L’essentiel n’est pas là.

6. Codez la fonction `jouer()` qui, si la journée n’est pas encore jouée :
- joue les 4 matchs de la journée ;
- affiche la journée par la méthode précédente ;
- passe le booléen played à `true` ;
- met à jour chaque équipe grâce à la fonction `maj_equipes()`.

7. Testez cette fonction en la lançant dans la console après avoir testé votre question 5. Vous devez constater l’affichage des nouveaux scores.


## EXERCICE 4 - l’objet Championnat

1. Le constructeur de Championnat vous est fourni. Un objet Championnat a trois attributs : 
- un tableau d’équipes nommé  `tabEquipes` ;
- en entier `numJournee` qui dit quelle est la journée active ;
- un tableau `journees` contenant les 14 journées du planning.

   Analysez ce code et comprenez ce qui est fait. Vous remarquerez en particulier les méthodes sur les tableaux. N’oubliez pas d’insérer le fichier `championnat.js`.

2. Codez la fonction `jouer_journee(i)` dont l’exécution fera jouer la journée n°i du planning (attention, la journée n°1 du planning correspond à l’élément d’indice 0 du tableau `journees` de `this`).

3. Codez la fonction `afficher_journee(i)`, dont l’exécution lancera l’affichage de la journée n°i du planning. Même remarque que pour la question précédente.

4. Codez la fonction `afficher_classement()`. Pour cela, vous remplirez :
- la `<div>` d’identifiant **titres** qui donne les items de chaque colonne, à savoir : nom, points, G, N, P, buts pour, buts contre et différence (buts pour – buts contre)
- les `<div>` identifiés "1", "2", …, "8". Chacune de ces div recevra l’affichage de l’équipe dont le classement correspond à l’identifiant de la div.

5. Codez la fonction `classer_equipes()`. Sa mission est de mettre à jour l’attribut classement des 8 équipes après avoir calculé leur évaluation.

   **Aide 1** : il peut être utile d’avoir à trier par ordre **croissant** un certain tableau de nombres. Si nous devons trier un tableau `t`, alors cela peut se faire simplement en JavaScript par :

   `t.sort(function(a,b) {return a-b;})`

   Explication : `t.sort()` trierait `t` en considérant ces éléments comme des chaînes de caractères. Le tri serait alphabétique. Autrement dit, 112 serait considéré comme « inférieur » à 13.

   Le paramètre donné à la méthode `sort` permet d’imposer un autre critère de tri. Pour le cas présent, deux éléments `a` et `b` seront triés dans l’ordre `a < b` si la fonction paramètre retourne un résultat négatif. Comme cette fonction a été codée pour retourner `a-b`, on aura le tri `a < b` si `a-b < 0` ce qui est cohérent avec l’ordre attendu entre les nombres.

   Si c’est encore un peu obscur, retenez que l’instruction `t.sort(function(a,b) {return a-b;})` permet de trier le tableau de nombres `t` par **ordre croissant**.

   De même, l’instruction 

   `t.sort(function(a,b) {return b-a;})`

   permet de trier un tableau de nombres par **ordre décroissant**. Ceci peut servir...

   **Aide 2** : `t.indexOf(num)` retourne l’indice de `num` dans le tableau `t`.

   Avec tout ceci, vous devriez vous en tirer.

6. Il serait bon, de nouveau, de tester tout ça dans la console. Voici un exemple de code à insérer après tous les fichiers, et qui peut vous aider :

		<script type="text/javascript">
	       let eq1 = new Equipe("PSG");
	       let eq2 = new Equipe("FCN");
	       let eq3 = new Equipe("ASM");
	       let eq4 = new Equipe("RCS");
	       let eq5 = new Equipe("HAC");
	       let eq6 = new Equipe("RCL");
	       let eq7 = new Equipe("TFC");
	       let eq8 = new Equipe("EAG");
	       let chp = new Championnat(eq1,eq2,eq3,eq4,eq5,eq6,eq7,eq8);
	    </script>

	Entrez ensuite dans la console les instructions suivantes :

		chp.classer_equipes();
		chp.afficher_classement();
		chp.afficher_journee(1);
		chp.jouer_journee(1);
		chp.classer_equipes();
		chp.afficher_classement();
		chp.afficher_journee(2);
		chp.jouer_journee(2);
		chp.classer_equipes();
		chp.afficher_classement();

	etc

7. Il pourrait être agréable d’avoir une disposition de table au niveau de la `<div id="titres">` et des `<div id="1">`, ..., `<div id="8">` pour avoir un bon affichage du classement (voir image plus haut). Si vous avez le temps, c’est le moment. C’est possible en incluant « brutalement » les balises adéquates au niveau des divers `innerHTML` rencontrés.  


## EXERCICE 5 - le scénario

Et maintenant, le scénario du déroulement du jeu. Vous pouvez supprimer les instructions tests utilisées précédemment (voir haut de cette page). Incluez le fichier scenario.js à la suite des 4 autres fichiers. Ce fichier sera une suite d’instructions. Pour le moment, il contient des déclarations de variables :

des variables qui font le lien avec l’interface html ;
d’autres variables comme tabEq et chp;
tabEq sert à remplir les input et la liste des équipes engagées avec des valeurs par défaut,
chp prendra comme valeur un Championnat (plus tard).

### État initial

1. Au début, certains éléments seront en `display : inline`, d’autres en `display :  none`. Tous ces styles sont amenés à passer d’un état à l’autre en fonctions d’événements clic divers, et ceci restera à programmer. 

   Rappel: on peut accéder au `display` d’un élément `elt` par `elt.style.display = "…"`.

   Programmez l’état d’affichage initial suivant :

   + les `fieldsetJ` et `fieldsetC` sont en `display : none`.

   + le `fieldsetE` doit être en `display : inline`.

   + Parmi les enfants du `fieldsteE` :
      - la `<div id="equipesEngagees">` sera en `display : inline`.
      - la `<div id="listeEquipes">` sera en `display : none`.

   + Dans la balise `legend` du `fieldsetE`, seule l’image « **plus** » est affichée, l’autre est en `display : none`.

   + Quand on lancera le championnat, le `fieldsetC` deviendra visible. Il faut donc faire en sorte que dès à présent, le bouton `journee_suivante` soit caché, contrairement au bouton `jouer_journee`. Passez donc le `display` de `jj` à `inline` et celui de `js` à `none`.
	
2. Il faut aussi préremplir les input des noms d’équipes en cohérence avec la liste des équipes engagées par défaut. Autrement dit, il faut remplir ces `input` avec les valeurs du tableau `tabEq`. Programmez ceci.

3. Enfin, pour compléter votre état initial, affectez au `innerHTML` de `ee` la valeur texte suivante :

		"équipes engagées : PSG - ASM - OL - OM - FCN - ASSE - MHSC - EAG"

   Programmez tout ceci et testez en rafraîchissant la page


### Gestion des événements click

4. On peut programmer la gestion d’un événement `click` de plusieurs façons (voir TD1). Dans notre cas, nous allons utiliser des « fonctions anonymes » :

		pl.onclick = function() {
		  pl.style.display = "none";
		  mo.style.display = "inline";
		  le.style.display = "inline";
		  ee.style.display = "none";
		}
	
   Dans le code précédent, on affecte à l’attribut `onclick` de `pl` une valeur de type fonction, qui ne porte pas de nom particulier, et dont le contenu permet d’agir sur le `display` d’éléments. Un code équivalent aurait été :

		function reaction_au_clic_pl() {
		  pl.style.display = "none";
		  mo.style.display = "inline";
		  le.style.display = "inline";
		  ee.style.display = "none";
		}

		pl.onclick =  reaction_au_clic_pl ;

   Mais comme cette fonction ne sert que là, on peut la passer en fonction anonyme sans problème.

   Recopiez ce code, anticipez ce qui se passera quand on cliquera sur l’image `plus`. Actualisez la page et vérifiez que le comportement attendu se produit bien.

5. On va maintenant gérer le clic sur l’image `moins`. Adaptez le code précédent pour programmer le comportement suivant, quand on clique sur le moins :

	+ l’image `plus` doit réapparaître;

	+ l’image `moins` doit disparaître;

	+ la `<div id="listeEquipes">` doit disparaître ;

	+ le `innerHTML` de la `<div id="equipesEngagees">` doit être recalculé pour afficher le même type de phrase que celle par défaut, mais cette fois ce sont les valeurs des `input` qui serviront ;

	+ cette `<div id="equipesEngagees">` doit apparaître ;

   Programmez tout ceci, actualisez la page et vérifiez que les comportements attendus sont opérationnels.

6. Programmons l’action du bouton `lancer_championnat`.

   Celui-ci doit :

	+ appeler le constructeur de `Championnat`, les paramètres étant huit équipes construites à partir des 8 champs texte du `fieldsetE`. Vous utiliserez la variable globale `chp` déclarée au début :

		chp = new Championnat(…);

	+ classer ces équipes ;

	+ afficher le classement ;

	+ actualiser la balise `<legend id="numJ">` pour que son contenu soit de la forme « journée n°… » (utiliser l’attribut `numJournee` ) ;

	+ afficher la journée correspondant à `numJournee` (c’est-à-dire afficher les 4 matchs) ;

	+ passer `jj` en `display :  inline` et `js` en `display : none` ;

	+ passer `fj` et `fc` en `display : inline`, `fe` en `display : none` ;

	+ passer `lc` en `display : none` (pour éviter les relances maladroites du championnat)

	Essayez de faire tout ça dans une fonction anonyme !

7. Passons à l’action du bouton `jouer_journee`. Celui-ci doit :

	+ faire jouer la journée d’indice `numJournee` ;

	+ passer `jj` en `display : none` ;

	+ si `numJournee` est inférieur à 14, passer `js` en `display : inline` (sinon, le championnat est terminé!) ;

	+ classer les équipes ;

	+ afficher le classement.

	Pareil, fonction anonyme.


8. Et pour finir, l’action de `journee_suivante`. Celui-ci doit :

	+ augmenter `numJournee` d’une unité ;

	+ afficher la journée correspondant à cette nouvelle valeur de `numJournee` ;

	+ mettre à jour le contenu de la balise `numJ` ;

	+ passser `jj` en `display : inline` et `js` en `display : none`.

   Pareil, fonction anonyme.

   Actualisez tout ça, et jouez !



