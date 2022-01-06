console.log("Hello world !")

/*
Un serveur est un site web : 
*/

console.log(process.argv)



/*
Installer une librairie via npm (lodash)
dans le dossier sujet sur terminal:
npm init -y *** créer un fichier package.json
npm installl lodash *** pour installer lodash, regarder dans la doc pour connaitre le nom exact de la librairirie à inscrit dans le terminal
*** la commande précédente créer un fichier package-lock.json
*** la commande créer aussi un dossier module node avec les codes source des dependance installées
npm unistall lodash *** désinstalle lodash, les fichiers installées reste mais sont actuellement vides
*/

// package = dependance = librairies

// Utiliser lodash
/*
const lodash = require("lodash")
**permet d'importer la librairie de lodash
console.log(lodash) *** affiche le contenu de la libraire
lodash.zip() *** lodash. une méthode permet d'utiliser une fonction de la dépendance
*** lodash est actuellement un objet
*/


/* faire des liens entre différents ficher js*/
/*
const login = require("./login")
** indiquer le chemin pour le ficher pour un ficher perso
** pour une librairie juste metre le nom de la dependance
module.exports = login; ** permet d'exporter une fonctioon, se place à la fin du fichier js sur lequel est la fonction
** il est obligatoire d'exporter pour pouvoir importer ailleur
module.exports = {login, logout} *** permet d'exporter plusieurs éléments d'un fichier, ces éléments doivent être rentrés dans un objet
***petit tips : eporter des fonction dans un objet afin de pouvoir rajouter dans fonctions par la suite

*/




// Callback Prompt//


// dl prompt installer importer
/*
prompt.start();

prompt.get("Your email," function(err, res){
    console.log(res);
}
*/

//une fonction anonyme est une fonction qui ne porte pas de nom