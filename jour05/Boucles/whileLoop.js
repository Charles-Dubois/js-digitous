/* ### 01 - Comptons

A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200 */

let start = 50,
    limit = 200;

while (start <= limit) {
    if (start % 2 === 0) {
        console.log(start)
    }
    start++
};

/* ### 02 - Try again

Créez une variable `dice` valant null et une variable `count` valant 0

Tant que `dice` ne vaut pas 6, assignez le résultat d'un lancé de dé aléatoire à dice et ajoutez 1 à `count`

Affichez `count`, le nombre de fois qu'il vous a fallu lancer le dé pour faire un 6 */


let dice = null,
    count = 0;

while (dice !== 6) {
    dice = Math.floor(Math.random() * 7);
    count++;
    if (dice === 6) {
        console.log(count)
    }
};

/* ### 03 - Course

Créez deux variables `ussainBolt` et `tysonGay` valant 0

Tant que l'une des deux variables n'a pas dépassé 100 

Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier nombre à la premiere variable et le deuxieme à la deuxieme

Afficher le vainqueur de la course (la variable ayant dépassé 100 en premier) */

let ussainBolt = 0,
    tysonGay = 0;

while ((ussainBolt || tysonGay) <= 100) {
    let number1 = Math.floor(Math.random() * 11),
        number2 = Math.floor(Math.random() * 11);

    ussainBolt += number1;
    tysonGay += number2;

    if (ussainBolt > 100) {
        console.log("ussainBolt" + ussainBolt)
        break
    } else if (tysonGay > 100) {
        console.log("tysonGay" + tysonGay)
        break
    }
}

// 04 A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)

/*
5
2
5
-8
*/

// 05  A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)

/*
0
7
*/