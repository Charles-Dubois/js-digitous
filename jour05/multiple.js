/*
## 02 - Table

- Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
- Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
- Vous devrez donner l'argument dans le terminal en appelant le programme

    ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console
*/

function multiple(numb1) {
    //guard
    if (process.argv[2] !== undefined) {
        //corps de fonction
        let arrayOfNumb = [],
            numb = Number(numb1);

        for (let i = 1; i <= 10; i++) {
            arrayOfNumb.push(numb * i);
        }
        return arrayOfNumb;
        //erreur guard
    } else {
        return "Error";
    };
}
multiple(process.argv[2])


// addition

function addit(numb1) {
    //guard
    if (process.argv[2] !== undefined) {
        //corps de fonction
        let arrayOfNumb = [],
            numb = Number(numb1);
        for (let i = 1; i <= 10; i++) {
            arrayOfNumb.push(numb + i);
        }
        return arrayOfNumb;
        //erreur guard
    } else {
        return "Error";
    };
}


module.exports = { multiple, addit }