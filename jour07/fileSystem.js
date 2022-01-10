/*
-Dans le fichier `js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console
*/

const fs = require("fs");

fs.readFile("./jour07.txt", function(err, data) {
    if (err) {
        return console.log("Error : ", err);
    }
    return console.log("Contenu du fichier :", data.toString());
})