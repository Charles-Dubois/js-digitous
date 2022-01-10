/*
fs est un module qui fait partie de node js
La liste des module de node est disponible sur leur site
On l'utilise comme ceci*/

const fs = require("fs");
//la fonction fs permet d'intéragir avec des fichiers
fs.readFile("./text.txt", function(err, data) {
    if (err) {
        return console.log("Erreur", err)
    }
    return console.log("Contenu du fichier :", data.toString())
})


// writefile via fs permet d'écrire des string
// on ecrit toujours des string !

fs.writeFile("./text.txt", "How are you", function(err) {
    if (err) {
        return console.log("Erreur", err)
    }
})

// ajjouter du texte


fs.appendFile(".text.txt", "Texte ajouté", function(err) {
    if (err) {
        return console.log("Erreur", err)
    }
})

// Obtenir les infos sur le fichier 

fs.stat(".text.txt", function(err, stats) {
    if (err) {
        return console.log("Erreur", err)
    }
    return console.log(stats)
})