/*
## 02 - Table

- Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
- Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
- Vous devrez donner l'argument dans le terminal en appelant le programme

    ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console
*/

function multiply(tableOfMultiplication) {
    //  Guard
    if (process.argv[2] !== undefined || null) {
        //corps de la fonction
        let resultOfTable = 0;
        for (i = 1; i <= 10; i++) {
            resultOfTable = tableOfMultiplication * i;
            console.log(resultOfTable);
        }
    }
    //message d'erreur du guard
    else {
        return console.log("Erreur, entrez un nombre entier !");
    }
}
multiply(process.argv[2]);


module.exports = { multiply };