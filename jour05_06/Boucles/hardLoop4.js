/*
### 04 - Nested Loop

Créez un tableau `words` avec les mots suivants

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

A l'aide d'une boucle for, utilisez la méthode split pour créer un tableau contenant les lettres de chaque mot.

A l'aide d'une deuxieme boucle for (à l'interieur de la première), comptez le nombre de "o" de chaque mot.

Retournez le nombre total de "o"

Résultat attendu: 8
*/

let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"],
    totalO = 0;

for (let i = 0; i < words.length; i++) {
    let splited = words[i].split("");
    console.log(splited);
    for (let o = 0; o < splited.length; o++) {
        let numberO = splited[o];
        if (numberO === "o") {
            totalO += 1;
        }
    }
}
console.log(totalO)